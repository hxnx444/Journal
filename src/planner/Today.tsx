import { Bar, CheckList, Frame, Pill } from "./bits";
import {
  SALAH,
  cgpa,
  emptyDaily,
  setsFor,
  suggestSkin,
  todayKey,
  usePlanner,
  workoutPlan,
} from "./store";

export function TodayView() {
  const key = todayKey();
  const dailyMap = usePlanner((s) => s.daily);
  const patch = usePlanner((s) => s.patch);
  const courses = usePlanner((s) => s.courses);
  const salah = usePlanner((s) => s.salah);
  const habits = usePlanner((s) => s.habits);
  const habitLog = usePlanner((s) => s.habitLog);
  const tasks = usePlanner((s) => s.tasks);
  const day = dailyMap[key] ?? emptyDaily();
  const g = cgpa(courses);
  const prayers = SALAH.filter((n) => salah[key]?.[n]).length;
  const habitDone = (habitLog[key] ?? []).length;
  const openUni = tasks.filter((t) => !t.done).length;
  const plan = workoutPlan(key);
  const skinHint = suggestSkin(usePlanner.getState().skin, key);

  const save = (next: typeof day) => patch({ daily: { ...dailyMap, [key]: next } });

  const scoreParts = [
    day.priorities.length ? day.priorities.filter((p) => p.done).length / day.priorities.length : 0,
    habits.length ? habitDone / habits.length : 0,
    prayers / 5,
  ];
  const score = Math.round((scoreParts.reduce((a, b) => a + b, 0) / scoreParts.length) * 100);

  const dateLabel = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="grid gap-4">
      <Frame kicker="today" title={dateLabel}>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Today" value={`${score}%`} />
          <Stat label="CGPA" value={g ? g.toFixed(2) : "—"} hint="aim 3.33" />
          <Stat label="Salah" value={`${prayers}/5`} />
          <Stat label="Open uni work" value={String(openUni)} />
        </div>
        <div className="mt-4">
          <Bar value={score} />
          <p className="mt-2 text-sm text-muted">Only what is in front of you. The rest can wait.</p>
        </div>
      </Frame>

      <div className="grid gap-4 lg:grid-cols-2">
        <Frame title="Three priorities">
          <CheckList
            items={day.priorities}
            placeholder="One thing that matters today"
            onChange={(priorities) => save({ ...day, priorities: priorities.slice(0, 3) })}
          />
          {day.priorities.length >= 3 ? (
            <p className="mt-2 text-xs text-muted">Three is enough. Finish one before adding another day.</p>
          ) : null}
        </Frame>
        <Frame title="To-do">
          <CheckList
            items={day.todos}
            placeholder="A small task"
            onChange={(todos) => save({ ...day, todos })}
          />
        </Frame>
        <Frame title="University">
          <CheckList
            items={day.uni}
            placeholder="Lecture, revision, deadline"
            onChange={(uni) => save({ ...day, uni })}
          />
        </Frame>
        <Frame title="Work">
          <CheckList
            items={day.work}
            placeholder="Shift, application, follow-up"
            onChange={(work) => save({ ...day, work })}
          />
        </Frame>
      </div>

      <Frame title="Appointments">
        <CheckList
          items={day.appointments}
          placeholder="Time and place"
          onChange={(appointments) => save({ ...day, appointments })}
        />
      </Frame>

      <div className="grid gap-4 lg:grid-cols-2">
        <Frame title="Notes">
          <textarea
            className="min-h-28 w-full rounded-xl border border-line bg-ivory px-3 py-2 text-sm outline-none focus:border-rose"
            value={day.notes}
            placeholder="A line for later."
            onChange={(e) => save({ ...day, notes: e.target.value })}
          />
        </Frame>
        <Frame title="Mood and energy">
          <p className="mb-2 text-sm text-muted">Mood</p>
          <div className="mb-3 flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <Pill key={n} on={day.mood === n} onClick={() => save({ ...day, mood: n })}>
                {n}
              </Pill>
            ))}
          </div>
          <p className="mb-2 text-sm text-muted">Energy</p>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <Pill key={n} on={day.energy === n} onClick={() => save({ ...day, energy: n })}>
                {n}
              </Pill>
            ))}
          </div>
          <p className="mt-3 text-sm text-ink">
            {plan
              ? `Workout window: ${plan.name}, about ${plan.minutes} minutes, ${setsFor(usePlanner.getState().workoutStart, key)} set. Rest days are part of the plan.`
              : "Rest day. Missing a workout is not a failure."}
          </p>
          <p className="mt-1 text-sm text-muted">
            Skincare suggestion for tonight: {skinHint === "acretin" ? "Acretin 0.05%, if skin feels calm" : "Recovery night"}.
          </p>
        </Frame>
      </div>
    </div>
  );
}

function Stat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-2xl bg-blush/70 px-3 py-3">
      <p className="text-xs text-muted">{label}</p>
      <p className="font-display text-2xl text-night">{value}</p>
      {hint ? <p className="text-xs text-rose-deep">{hint}</p> : null}
    </div>
  );
}
