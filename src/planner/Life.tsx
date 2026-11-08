import { useState } from "react";
import { CheckList, Field, Frame, Pill } from "./bits";
import {
  SALAH,
  newId,
  setsFor,
  suggestSkin,
  todayKey,
  usePlanner,
  workoutPlan,
  type Ledger,
  type SkinNight,
} from "./store";

export function MoneyView() {
  const s = usePlanner();
  const month = todayKey().slice(0, 7);
  const monthRows = s.ledger.filter((r) => r.date.startsWith(month));
  const spent = monthRows.filter((r) => r.kind === "expense" && r.currency === "EGP").reduce((n, r) => n + r.amount, 0);
  const earned = monthRows.filter((r) => r.kind === "income" && r.currency === "EGP").reduce((n, r) => n + r.amount, 0);
  const fund = (name: Ledger["fund"]) =>
    s.ledger
      .filter((r) => r.fund === name && r.currency === "EGP")
      .reduce((n, r) => n + (r.kind === "income" ? r.amount : -r.amount), 0);

  return (
    <div className="grid gap-4">
      <Frame kicker="protect what you save" title="Balances">
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="EGP on hand / saved" type="number" value={s.egp} onChange={(v) => s.patch({ egp: Number(v) || 0 })} />
          <Field label="USD" type="number" value={s.usd} onChange={(v) => s.patch({ usd: Number(v) || 0 })} />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Mini label="EGP in this month" value={`${earned - spent}`} />
          <Mini label="Emergency ledger" value={String(fund("emergency"))} />
          <Mini label="Moving-out ledger" value={String(fund("moving"))} />
          <Mini label="Travel ledger" value={String(fund("travel"))} />
        </div>
        <p className="mt-3 text-sm text-muted">Balances are what you type. The ledger is a running note of movements, not a bank.</p>
      </Frame>

      <Frame title="Add a movement">
        <form
          className="grid gap-2 sm:grid-cols-6"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const label = String(fd.get("label") || "").trim();
            const amount = Number(fd.get("amount") || 0);
            if (!label || !amount) return;
            const row: Ledger = {
              id: newId(),
              kind: String(fd.get("kind")) as Ledger["kind"],
              amount,
              currency: String(fd.get("currency")) as Ledger["currency"],
              label,
              date: String(fd.get("date") || todayKey()),
              fund: String(fd.get("fund")) as Ledger["fund"],
            };
            s.patch({ ledger: [row, ...s.ledger] });
            e.currentTarget.reset();
          }}
        >
          <select name="kind" className="min-h-11 rounded-xl border border-line bg-ivory px-2 text-sm">
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <input name="amount" type="number" step="0.01" placeholder="Amount" className="min-h-11 rounded-xl border border-line bg-ivory px-3 text-sm" />
          <select name="currency" className="min-h-11 rounded-xl border border-line bg-ivory px-2 text-sm">
            <option>EGP</option>
            <option>USD</option>
          </select>
          <select name="fund" className="min-h-11 rounded-xl border border-line bg-ivory px-2 text-sm">
            <option value="daily">Daily</option>
            <option value="emergency">Emergency</option>
            <option value="moving">Moving</option>
            <option value="travel">Travel</option>
          </select>
          <input name="date" type="date" defaultValue={todayKey()} className="min-h-11 rounded-xl border border-line bg-ivory px-2 text-sm" />
          <input name="label" placeholder="What" className="min-h-11 rounded-xl border border-line bg-ivory px-3 text-sm" />
          <button className="min-h-11 rounded-xl bg-night px-4 text-sm font-semibold text-ivory sm:col-span-6 sm:w-fit">Save movement</button>
        </form>
        <ul className="mt-3 space-y-1">
          {s.ledger.slice(0, 8).map((r) => (
            <li key={r.id} className="flex justify-between text-sm">
              <span>
                {r.date} · {r.kind} · {r.fund} · {r.label}
              </span>
              <span>
                {r.amount} {r.currency}{" "}
                <button type="button" className="text-muted" onClick={() => s.patch({ ledger: s.ledger.filter((x) => x.id !== r.id) })}>
                  Remove
                </button>
              </span>
            </li>
          ))}
        </ul>
      </Frame>

      <Frame title="Monthly budget notes">
        <Field label="What is fixed, what can wait" textarea value={s.budgetNote} onChange={(budgetNote) => s.patch({ budgetNote })} />
      </Frame>
      <Frame title="Financial milestones">
        <CheckList items={s.moneyGoals} placeholder="A number or a habit" onChange={(moneyGoals) => s.patch({ moneyGoals })} />
      </Frame>
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-blush px-3 py-2">
      <p className="text-xs text-muted">{label}</p>
      <p className="font-display text-lg text-night">{value}</p>
    </div>
  );
}

export function IndependenceView() {
  const s = usePlanner();
  return (
    <div className="grid gap-4">
      <Frame kicker="after graduation" title="A place of your own">
        <p className="text-sm text-muted">Moving out waits until income and savings can carry it. The list is preparation, not pressure.</p>
      </Frame>
      <Frame title="Estimated living costs">
        <Field label="Monthly picture" textarea value={s.livingCosts} onChange={(livingCosts) => s.patch({ livingCosts })} />
      </Frame>
      <Frame title="Income you would need">
        <Field label="Before you sign a lease" textarea value={s.incomeNeed} onChange={(incomeNeed) => s.patch({ incomeNeed })} />
      </Frame>
      <Frame title="Housing research">
        <Field label="Areas, rents, transport" textarea value={s.housing} onChange={(housing) => s.patch({ housing })} />
      </Frame>
      <Frame title="Documents">
        <Field label="What to keep ready" textarea value={s.documents} onChange={(documents) => s.patch({ documents })} />
      </Frame>
      <Frame title="Moving-out checklist">
        <CheckList items={s.moving} placeholder="A preparation step" onChange={(moving) => s.patch({ moving })} />
      </Frame>
    </div>
  );
}

export function FutureView() {
  const s = usePlanner();
  return (
    <div className="grid gap-4">
      <Frame kicker="the life you are building" title="Future life">
        <Field label="A picture in words" textarea value={s.lifestyle} onChange={(lifestyle) => s.patch({ lifestyle })} />
      </Frame>
      <Frame title="Places to visit">
        <CheckList items={s.places} placeholder="A city or landscape" onChange={(places) => s.patch({ places })} />
      </Frame>
      <Frame title="Where you might live">
        <CheckList items={s.liveIn} placeholder="A city or country to research later" onChange={(liveIn) => s.patch({ liveIn })} />
      </Frame>
      <Frame title="Experiences">
        <CheckList items={s.experiences} placeholder="Something you want to have done" onChange={(experiences) => s.patch({ experiences })} />
      </Frame>
    </div>
  );
}

export function FaithView() {
  const key = todayKey();
  const salah = usePlanner((s) => s.salah);
  const quranPages = usePlanner((s) => s.quranPages);
  const quranWhere = usePlanner((s) => s.quranWhere);
  const quranNote = usePlanner((s) => s.quranNote);
  const patch = usePlanner((s) => s.patch);
  const day = salah[key] ?? {};
  const toggle = (name: string) => {
    patch({ salah: { ...salah, [key]: { ...day, [name]: !day[name] } } });
  };
  return (
    <div className="grid gap-4">
      <Frame kicker={key} title="Salah">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          {SALAH.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => toggle(name)}
              className={`min-h-16 rounded-2xl border text-sm font-semibold ${
                day[name] ? "border-lilac bg-lavender text-night" : "border-line bg-paper text-muted"
              }`}
            >
              {name}
              <span className="mt-1 block text-xs font-normal">{day[name] ? "Kept" : "Open"}</span>
            </button>
          ))}
        </div>
      </Frame>
      <Frame title="Quran">
        <div className="grid gap-3 sm:grid-cols-2">
          <Field
            label="Pages or portion today"
            type="number"
            value={quranPages[key] ?? 0}
            onChange={(v) => patch({ quranPages: { ...quranPages, [key]: Number(v) || 0 } })}
          />
          <Field label="Where you are" value={quranWhere} onChange={(quranWhere) => patch({ quranWhere })} />
        </div>
        <div className="mt-3">
          <Field label="A line that stayed" textarea value={quranNote} onChange={(quranNote) => patch({ quranNote })} />
        </div>
      </Frame>
    </div>
  );
}

export function CareView() {
  const key = todayKey();
  const s = usePlanner();
  const skin = s.skin[key] ?? {
    night: "" as SkinNight,
    cleanser: false,
    shave: false,
    moisturizer: false,
    sunscreen: false,
    extra: "",
  };
  const hint = suggestSkin(s.skin, key);
  const plan = workoutPlan(key);
  const sets = setsFor(s.workoutStart, key);
  const log = s.workoutLog[key] ?? { done: false, sets, note: "" };
  const sleep = s.sleep[key] ?? { hours: 0, note: "" };

  const saveSkin = (partial: Partial<typeof skin>) =>
    s.patch({ skin: { ...s.skin, [key]: { ...skin, ...partial } } });

  const nights = lastNights(s.skin, 14);

  return (
    <div className="grid gap-4">
      <Frame kicker="gentle on purpose" title="Tonight's skin">
        <p className="mb-3 text-sm text-muted">
          Suggested: {hint === "acretin" ? "Acretin 0.05% if skin is calm" : "a recovery night"}. Do not stack active nights. Skipping is allowed.
        </p>
        <div className="mb-3 flex flex-wrap gap-2">
          {(
            [
              ["acretin", "Acretin 0.05%"],
              ["recovery", "Recovery"],
              ["off", "Skip"],
            ] as const
          ).map(([id, label]) => (
            <Pill key={id} on={skin.night === id} onClick={() => saveSkin({ night: id })}>
              {label}
            </Pill>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {(
            [
              ["cleanser", "Dermaelle Oil Control Cleanser"],
              ["moisturizer", "Moisturizer"],
              ["sunscreen", "Sunscreen"],
              ["shave", "Shaving day"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => saveSkin({ [id]: !skin[id] })}
              className={`min-h-12 rounded-2xl border px-3 text-left text-sm ${
                skin[id] ? "border-rose bg-blush" : "border-line bg-paper"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="mt-3">
          <Field label="Anything else tonight" value={skin.extra} onChange={(extra) => saveSkin({ extra })} />
        </div>
      </Frame>

      <Frame title="Two-week skin calendar">
        <div className="grid grid-cols-7 gap-1">
          {nights.map((n) => (
            <div key={n.date} className="rounded-xl bg-ivory p-1 text-center">
              <p className="text-[10px] text-muted">{n.date.slice(8)}</p>
              <p className="font-display text-xs text-night">
                {n.night === "acretin" ? "A" : n.night === "recovery" ? "R" : n.night === "off" ? "—" : "·"}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-muted">A is Acretin, R is recovery. The pattern should breathe.</p>
      </Frame>

      <Frame title="Products you add later">
        <CheckList items={s.extraProducts} placeholder="A product name" onChange={(extraProducts) => s.patch({ extraProducts })} />
      </Frame>

      <Frame title="Hair">
        <Field label="Wash days, products, notes" textarea value={s.hair} onChange={(hair) => s.patch({ hair })} />
      </Frame>

      <Frame title="Sleep and energy">
        <div className="grid gap-3 sm:grid-cols-2">
          <Field
            label="Hours slept"
            type="number"
            value={sleep.hours}
            onChange={(v) => s.patch({ sleep: { ...s.sleep, [key]: { ...sleep, hours: Number(v) || 0 } } })}
          />
          <Field
            label="How the night felt"
            value={sleep.note}
            onChange={(note) => s.patch({ sleep: { ...s.sleep, [key]: { ...sleep, note } } })}
          />
        </div>
      </Frame>

      <Frame title="Wellness habits">
        <CheckList items={s.wellness} placeholder="Water, a walk, a quiet hour" onChange={(wellness) => s.patch({ wellness })} />
      </Frame>

      <Frame title="Workout">
        <p className="mb-2 text-sm text-ink">
          Plan began {s.workoutStart}. This phase uses {sets} set{sets > 1 ? "s" : ""}. Move to two sets only after two comfortable weeks — change the start date if you need to stay at one.
        </p>
        <Field label="Routine start date" type="date" value={s.workoutStart} onChange={(workoutStart) => s.patch({ workoutStart })} />
        {plan ? (
          <div className="mt-3">
            <p className="font-display text-lg">{plan.name}</p>
            <p className="text-sm text-muted">About {plan.minutes} minutes. Rest between moves. Stop if something hurts.</p>
            <ul className="mt-2 list-disc pl-5 text-sm">
              {plan.moves.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              <Pill
                on={log.done}
                onClick={() =>
                  s.patch({
                    workoutLog: { ...s.workoutLog, [key]: { ...log, done: !log.done, sets } },
                  })
                }
              >
                {log.done ? "Session kept" : "Mark session kept"}
              </Pill>
            </div>
            <div className="mt-3">
              <Field
                label="How it felt"
                value={log.note}
                onChange={(note) => s.patch({ workoutLog: { ...s.workoutLog, [key]: { ...log, sets, note } } })}
              />
            </div>
          </div>
        ) : (
          <p className="mt-3 text-sm text-ink">
            Today is a rest day. Monday and Saturday are glutes, core, and calves. Wednesday is arms and core. The other days are for recovery, and that still counts.
          </p>
        )}
      </Frame>
    </div>
  );
}

function lastNights(skin: ReturnType<typeof usePlanner.getState>["skin"], n: number) {
  const out: { date: string; night: SkinNight | "" }[] = [];
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const date = todayKey(d);
    out.push({ date, night: skin[date]?.night || "" });
  }
  return out;
}

export function HabitsView() {
  const s = usePlanner();
  const key = todayKey();
  const done = new Set(s.habitLog[key] ?? []);
  const [name, setName] = useState("");
  const [edit, setEdit] = useState<string | null>(null);
  const [draft, setDraft] = useState("");

  return (
    <div className="grid gap-4">
      <Frame kicker="small and repeatable" title="Habits">
        <ul className="space-y-2">
          {s.habits.map((h) => (
            <li key={h.id} className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  const next = new Set(done);
                  if (next.has(h.id)) next.delete(h.id);
                  else next.add(h.id);
                  s.patch({ habitLog: { ...s.habitLog, [key]: [...next] } });
                }}
                className={`grid size-7 place-items-center rounded-lg border-2 ${done.has(h.id) ? "border-lilac bg-lilac" : "border-rose"}`}
              >
                {done.has(h.id) ? <span className="size-2.5 rounded-sm bg-paper" /> : null}
              </button>
              {edit === h.id ? (
                <input
                  className="flex-1 rounded-lg border border-line bg-ivory px-2 py-1 text-sm"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  onBlur={() => {
                    if (draft.trim()) s.patch({ habits: s.habits.map((x) => (x.id === h.id ? { ...x, name: draft.trim() } : x)) });
                    setEdit(null);
                  }}
                />
              ) : (
                <button type="button" className="flex-1 text-left text-sm" onClick={() => { setEdit(h.id); setDraft(h.name); }}>
                  {h.name}
                </button>
              )}
              <button
                type="button"
                className="text-xs text-muted"
                onClick={() => s.patch({ habits: s.habits.filter((x) => x.id !== h.id) })}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <form
          className="mt-3 flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            if (!name.trim()) return;
            s.patch({ habits: [...s.habits, { id: newId(), name: name.trim() }] });
            setName("");
          }}
        >
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="New habit" className="min-h-11 flex-1 rounded-xl border border-line bg-ivory px-3 text-sm" />
          <button className="min-h-11 rounded-xl bg-night px-4 text-sm font-semibold text-ivory">Add</button>
        </form>
        <p className="mt-2 text-xs text-muted">Tap a name to rename it.</p>
      </Frame>
      <div className="grid gap-4 lg:grid-cols-2">
        <Frame title="Morning">
          <CheckList items={s.morning} placeholder="A morning step" onChange={(morning) => s.patch({ morning })} />
        </Frame>
        <Frame title="Evening">
          <CheckList items={s.evening} placeholder="An evening step" onChange={(evening) => s.patch({ evening })} />
        </Frame>
      </div>
    </div>
  );
}

export function ResetView() {
  const s = usePlanner();
  return (
    <div className="grid gap-4">
      <Frame title="Weekly reset">
        <CheckList items={s.resetSteps} placeholder="A reset step" onChange={(resetSteps) => s.patch({ resetSteps })} />
        <div className="mt-3 grid gap-3">
          <Field label="Wins" textarea value={s.weekWins} onChange={(weekWins) => s.patch({ weekWins })} />
          <Field label="Focus next" textarea value={s.weekFocus} onChange={(weekFocus) => s.patch({ weekFocus })} />
        </div>
      </Frame>
      <Frame title="Monthly review">
        <Field label="What to carry, what to drop" textarea value={s.monthReview} onChange={(monthReview) => s.patch({ monthReview })} />
      </Frame>
    </div>
  );
}

export function NotesView() {
  const s = usePlanner();
  return (
    <div className="grid gap-4">
      <Frame title="Brain dump">
        <Field label="Unsorted thoughts" textarea value={s.brain} onChange={(brain) => s.patch({ brain })} />
      </Frame>
      <Frame title="Ideas worth keeping">
        <CheckList items={s.ideas} placeholder="An idea" onChange={(ideas) => s.patch({ ideas })} />
      </Frame>
      <Frame title="Reading">
        <CheckList items={s.reading} placeholder="A book or essay" onChange={(reading) => s.patch({ reading })} />
      </Frame>
      <Frame title="Confidence and self-improvement">
        <Field label="What is getting steadier" textarea value={s.confidence} onChange={(confidence) => s.patch({ confidence })} />
      </Frame>
      <Frame title="Skills outside the degree">
        <CheckList items={s.skills} placeholder="A skill" onChange={(skills) => s.patch({ skills })} />
      </Frame>
      <Frame title="Personal projects">
        <CheckList items={s.personalProjects} placeholder="Something you are making" onChange={(personalProjects) => s.patch({ personalProjects })} />
      </Frame>
    </div>
  );
}

export function ProgressView() {
  const s = usePlanner();
  const key = todayKey();
  const prayers = SALAH.filter((n) => s.salah[key]?.[n]).length;
  const road = s.roadmap.filter((r) => r.status === "done").length;
  const gCourses = s.courses.filter((c) => c.grade);
  return (
    <div className="grid gap-4">
      <Frame kicker="quietly" title="What is already moving">
        <ul className="space-y-2 text-sm">
          <li>Graded courses on record: {gCourses.length}</li>
          <li>Roadmap steps marked done: {road} / {s.roadmap.length}</li>
          <li>Salah kept today: {prayers} / 5</li>
          <li>Habits kept today: {(s.habitLog[key] ?? []).length} / {s.habits.length}</li>
          <li>Workouts logged: {Object.values(s.workoutLog).filter((w) => w.done).length}</li>
          <li>Moving checklist: {s.moving.filter((m) => m.done).length} / {s.moving.length}</li>
        </ul>
        <p className="mt-3 text-sm text-muted">Consistency is the repeated ordinary day, not a perfect one.</p>
      </Frame>
    </div>
  );
}
