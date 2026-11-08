import { CheckList, Field, Frame } from "./bits";
import {
  GRADES,
  WEEKDAYS,
  cgpa,
  newId,
  todayKey,
  usePlanner,
  type Course,
  type StudyBlock,
  type Task,
} from "./store";

export function UniversityView() {
  const courses = usePlanner((s) => s.courses);
  const tasks = usePlanner((s) => s.tasks);
  const study = usePlanner((s) => s.study);
  const gradNotes = usePlanner((s) => s.gradNotes);
  const semesterNote = usePlanner((s) => s.semesterNote);
  const patch = usePlanner((s) => s.patch);
  const g = cgpa(courses);
  const credits = courses.reduce((n, c) => n + (Number(c.credits) || 0), 0);
  const backlog = courses.filter((c) => c.backlog);

  return (
    <div className="grid gap-4">
      <Frame kicker="alexandria university" title="Semester overview">
        <div className="mb-4 grid grid-cols-3 gap-3">
          <Mini label="CGPA" value={g ? g.toFixed(2) : "—"} />
          <Mini label="Target" value="3.33" />
          <Mini label="Credits listed" value={String(credits)} />
        </div>
        <p className="mb-3 text-sm text-muted">
          Computer Science, Statistics minor. Graduation aimed at 2028. Grades use a 4.0 scale; blank grades stay out of the average.
        </p>
        <Field label="This semester" textarea value={semesterNote} onChange={(semesterNote) => patch({ semesterNote })} />
      </Frame>

      <Frame title="Courses">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="text-muted">
              <tr>
                <th className="py-2 font-medium">Course</th>
                <th className="font-medium">Cr</th>
                <th className="font-medium">Term</th>
                <th className="font-medium">Grade</th>
                <th className="font-medium">Lectures</th>
                <th className="font-medium">Hard</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {courses.map((c) => (
                <CourseRow key={c.id} course={c} />
              ))}
            </tbody>
          </table>
        </div>
        <AddCourse />
      </Frame>

      <Frame title="Backlog — subjects that need patience">
        {backlog.length === 0 ? (
          <p className="text-sm text-muted">Mark a course as hard and it will sit here.</p>
        ) : (
          <ul className="space-y-3">
            {backlog.map((c) => (
              <li key={c.id} className="rounded-2xl bg-lavender/50 p-3">
                <p className="font-display text-lg">{c.name}</p>
                <p className="text-sm text-muted">{c.lectures || "Add lecture times on the course row."}</p>
                <p className="mt-1 text-sm">
                  Short sessions beat long guilt. One problem set or one lecture recap is a real win.
                </p>
              </li>
            ))}
          </ul>
        )}
      </Frame>

      <Frame title="Assignments, exams, deadlines">
        <ul className="mb-3 space-y-2">
          {tasks.length === 0 ? <li className="text-sm text-muted">No deadlines yet.</li> : null}
          {tasks
            .slice()
            .sort((a, b) => a.due.localeCompare(b.due))
            .map((t) => (
              <TaskRow key={t.id} task={t} />
            ))}
        </ul>
        <AddTask />
      </Frame>

      <Frame title="Weekly study timetable">
        <ul className="mb-3 space-y-2">
          {study.map((b) => (
            <StudyRow key={b.id} block={b} />
          ))}
        </ul>
        <AddStudy />
        <p className="mt-3 text-sm text-muted">
          A realistic week leaves evenings for Salah, work, and rest. Protect the blocks you can actually keep.
        </p>
      </Frame>

      <Frame title="Graduation requirements">
        <Field label="Notes" textarea value={gradNotes} onChange={(gradNotes) => patch({ gradNotes })} />
      </Frame>
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-gold-soft px-3 py-2">
      <p className="text-xs text-muted">{label}</p>
      <p className="font-display text-xl text-night">{value}</p>
    </div>
  );
}

function CourseRow({ course }: { course: Course }) {
  const courses = usePlanner((s) => s.courses);
  const patch = usePlanner((s) => s.patch);
  const update = (partial: Partial<Course>) =>
    patch({ courses: courses.map((c) => (c.id === course.id ? { ...c, ...partial } : c)) });
  return (
    <tr className="border-t border-line align-top">
      <td className="py-2 pr-2">
        <input className="w-full rounded-lg border border-line bg-ivory px-2 py-1" value={course.name} onChange={(e) => update({ name: e.target.value })} />
      </td>
      <td className="pr-2">
        <input className="w-14 rounded-lg border border-line bg-ivory px-2 py-1" type="number" min={0} value={course.credits} onChange={(e) => update({ credits: Number(e.target.value) })} />
      </td>
      <td className="pr-2">
        <input className="w-24 rounded-lg border border-line bg-ivory px-2 py-1" value={course.semester} onChange={(e) => update({ semester: e.target.value })} />
      </td>
      <td className="pr-2">
        <select className="rounded-lg border border-line bg-ivory px-2 py-1" value={course.grade} onChange={(e) => update({ grade: e.target.value })}>
          <option value="">—</option>
          {GRADES.map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>
      </td>
      <td className="pr-2">
        <input className="w-36 rounded-lg border border-line bg-ivory px-2 py-1" value={course.lectures} placeholder="When" onChange={(e) => update({ lectures: e.target.value })} />
      </td>
      <td>
        <input type="checkbox" checked={course.backlog} onChange={(e) => update({ backlog: e.target.checked })} />
      </td>
      <td>
        <button type="button" className="text-xs text-muted" onClick={() => patch({ courses: courses.filter((c) => c.id !== course.id) })}>
          Remove
        </button>
      </td>
    </tr>
  );
}

function AddCourse() {
  const courses = usePlanner((s) => s.courses);
  const patch = usePlanner((s) => s.patch);
  return (
    <form
      className="mt-3 flex flex-wrap gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const name = String(fd.get("name") || "").trim();
        if (!name) return;
        const row: Course = {
          id: newId(),
          name,
          credits: Number(fd.get("credits") || 3),
          semester: String(fd.get("semester") || "Current"),
          grade: "",
          lectures: "",
          backlog: false,
        };
        patch({ courses: [...courses, row] });
        e.currentTarget.reset();
      }}
    >
      <input name="name" required placeholder="Course name" className="min-h-11 flex-1 rounded-xl border border-line bg-ivory px-3 text-sm" />
      <input name="credits" type="number" defaultValue={3} className="min-h-11 w-20 rounded-xl border border-line bg-ivory px-3 text-sm" />
      <input name="semester" placeholder="Semester" className="min-h-11 w-32 rounded-xl border border-line bg-ivory px-3 text-sm" />
      <button className="min-h-11 rounded-xl bg-night px-4 text-sm font-semibold text-ivory">Add course</button>
    </form>
  );
}

function TaskRow({ task }: { task: Task }) {
  const tasks = usePlanner((s) => s.tasks);
  const patch = usePlanner((s) => s.patch);
  return (
    <li className={`flex flex-wrap items-center gap-2 rounded-xl px-2 py-2 ${task.done ? "opacity-60" : ""}`}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => patch({ tasks: tasks.map((t) => (t.id === task.id ? { ...t, done: !t.done } : t)) })}
      />
      <span className="text-xs uppercase tracking-wide text-rose-deep">{task.kind}</span>
      <span className="text-sm">{task.title}</span>
      <span className="text-sm text-muted">{task.course}</span>
      <span className="text-sm text-muted">{task.due}</span>
      <button type="button" className="ml-auto text-xs text-muted" onClick={() => patch({ tasks: tasks.filter((t) => t.id !== task.id) })}>
        Remove
      </button>
    </li>
  );
}

function AddTask() {
  const tasks = usePlanner((s) => s.tasks);
  const patch = usePlanner((s) => s.patch);
  return (
    <form
      className="grid gap-2 sm:grid-cols-5"
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const title = String(fd.get("title") || "").trim();
        if (!title) return;
        const row: Task = {
          id: newId(),
          title,
          course: String(fd.get("course") || ""),
          due: String(fd.get("due") || todayKey()),
          kind: String(fd.get("kind") || "assignment") as Task["kind"],
          done: false,
        };
        patch({ tasks: [...tasks, row] });
        e.currentTarget.reset();
      }}
    >
      <input name="title" placeholder="Title" className="min-h-11 rounded-xl border border-line bg-ivory px-3 text-sm sm:col-span-2" />
      <input name="course" placeholder="Course" className="min-h-11 rounded-xl border border-line bg-ivory px-3 text-sm" />
      <input name="due" type="date" className="min-h-11 rounded-xl border border-line bg-ivory px-3 text-sm" />
      <div className="flex gap-2">
        <select name="kind" className="min-h-11 flex-1 rounded-xl border border-line bg-ivory px-2 text-sm">
          <option value="assignment">Assignment</option>
          <option value="exam">Exam</option>
          <option value="quiz">Quiz</option>
          <option value="project">Project</option>
        </select>
        <button className="min-h-11 rounded-xl bg-night px-3 text-sm font-semibold text-ivory">Add</button>
      </div>
    </form>
  );
}

function StudyRow({ block }: { block: StudyBlock }) {
  const study = usePlanner((s) => s.study);
  const patch = usePlanner((s) => s.patch);
  const update = (partial: Partial<StudyBlock>) =>
    patch({ study: study.map((b) => (b.id === block.id ? { ...b, ...partial } : b)) });
  return (
    <li className="grid gap-2 rounded-xl bg-ivory p-2 sm:grid-cols-4">
      <select className="min-h-11 rounded-lg border border-line bg-paper px-2 text-sm" value={block.day} onChange={(e) => update({ day: e.target.value })}>
        {WEEKDAYS.map((d) => (
          <option key={d}>{d}</option>
        ))}
      </select>
      <input className="min-h-11 rounded-lg border border-line bg-paper px-2 text-sm" value={block.time} onChange={(e) => update({ time: e.target.value })} />
      <input className="min-h-11 rounded-lg border border-line bg-paper px-2 text-sm sm:col-span-1" value={block.focus} onChange={(e) => update({ focus: e.target.value })} />
      <button type="button" className="text-sm text-muted" onClick={() => patch({ study: study.filter((b) => b.id !== block.id) })}>
        Remove
      </button>
    </li>
  );
}

function AddStudy() {
  const study = usePlanner((s) => s.study);
  const patch = usePlanner((s) => s.patch);
  return (
    <form
      className="mt-2 flex flex-wrap gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const focus = String(fd.get("focus") || "").trim();
        if (!focus) return;
        patch({
          study: [
            ...study,
            { id: newId(), day: String(fd.get("day")), time: String(fd.get("time") || ""), focus },
          ],
        });
        e.currentTarget.reset();
      }}
    >
      <select name="day" className="min-h-11 rounded-xl border border-line bg-ivory px-2 text-sm">
        {WEEKDAYS.map((d) => (
          <option key={d}>{d}</option>
        ))}
      </select>
      <input name="time" placeholder="Time" className="min-h-11 w-28 rounded-xl border border-line bg-ivory px-3 text-sm" />
      <input name="focus" placeholder="What you will study" className="min-h-11 flex-1 rounded-xl border border-line bg-ivory px-3 text-sm" />
      <button className="min-h-11 rounded-xl bg-night px-4 text-sm font-semibold text-ivory">Add</button>
    </form>
  );
}

export function CalendarViews({ mode }: { mode: "week" | "month" }) {
  const events = usePlanner((s) => s.events);
  const weeklyGoals = usePlanner((s) => s.weeklyGoals);
  const monthlyGoals = usePlanner((s) => s.monthlyGoals);
  const importantDates = usePlanner((s) => s.importantDates);
  const monthReview = usePlanner((s) => s.monthReview);
  const patch = usePlanner((s) => s.patch);
  const anchor = new Date();

  const days: Date[] = [];
  if (mode === "week") {
    const start = new Date(anchor);
    const dow = (start.getDay() + 1) % 7;
    start.setDate(start.getDate() - dow);
    for (let i = 0; i < 7; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      days.push(d);
    }
  } else {
    const start = new Date(anchor.getFullYear(), anchor.getMonth(), 1);
    const end = new Date(anchor.getFullYear(), anchor.getMonth() + 1, 0).getDate();
    for (let i = 1; i <= end; i++) days.push(new Date(start.getFullYear(), start.getMonth(), i));
  }

  return (
    <div className="grid gap-4">
      <Frame kicker={mode} title={mode === "week" ? "This week" : anchor.toLocaleDateString("en-GB", { month: "long", year: "numeric" })}>
        <div className={`grid gap-2 ${mode === "week" ? "sm:grid-cols-7" : "grid-cols-2 sm:grid-cols-7"}`}>
          {days.map((d) => {
            const key = todayKey(d);
            const list = events.filter((e) => e.date === key);
            const today = key === todayKey();
            return (
              <div key={key} className={`rounded-2xl border p-2 ${today ? "border-rose bg-blush" : "border-line bg-paper"}`}>
                <p className="text-xs text-muted">{d.toLocaleDateString("en-GB", { weekday: "short" })}</p>
                <p className="font-display text-lg">{d.getDate()}</p>
                <ul className="mt-1 space-y-1">
                  {list.map((e) => (
                    <li key={e.id} className="text-xs leading-snug">
                      <span className="text-rose-deep">{e.kind}</span> {e.time} {e.title}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Frame>

      <Frame title="Add to the calendar">
        <form
          className="grid gap-2 sm:grid-cols-5"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const title = String(fd.get("title") || "").trim();
            const date = String(fd.get("date") || "");
            if (!title || !date) return;
            patch({
              events: [
                ...events,
                {
                  id: newId(),
                  date,
                  title,
                  kind: String(fd.get("kind") || "personal"),
                  time: String(fd.get("time") || ""),
                },
              ],
            });
            e.currentTarget.reset();
          }}
        >
          <input name="date" type="date" required className="min-h-11 rounded-xl border border-line bg-ivory px-3 text-sm" />
          <input name="time" placeholder="Time" className="min-h-11 rounded-xl border border-line bg-ivory px-3 text-sm" />
          <input name="title" placeholder="What" className="min-h-11 rounded-xl border border-line bg-ivory px-3 text-sm sm:col-span-2" />
          <div className="flex gap-2">
            <select name="kind" className="min-h-11 flex-1 rounded-xl border border-line bg-ivory px-2 text-sm">
              {["study", "work", "workout", "salah", "quran", "personal", "deadline", "uni"].map((k) => (
                <option key={k}>{k}</option>
              ))}
            </select>
            <button className="rounded-xl bg-night px-3 text-sm font-semibold text-ivory">Add</button>
          </div>
        </form>
        <ul className="mt-3 space-y-1">
          {events
            .slice()
            .sort((a, b) => a.date.localeCompare(b.date))
            .slice(0, 12)
            .map((e) => (
              <li key={e.id} className="flex justify-between text-sm">
                <span>
                  {e.date} · {e.kind} · {e.title}
                </span>
                <button type="button" className="text-muted" onClick={() => patch({ events: events.filter((x) => x.id !== e.id) })}>
                  Remove
                </button>
              </li>
            ))}
        </ul>
      </Frame>

      {mode === "week" ? (
        <Frame title="Weekly goals">
          <CheckList items={weeklyGoals} placeholder="A goal for this week" onChange={(weeklyGoals) => patch({ weeklyGoals })} />
        </Frame>
      ) : (
        <>
          <Frame title="Monthly goals">
            <CheckList items={monthlyGoals} placeholder="A goal for this month" onChange={(monthlyGoals) => patch({ monthlyGoals })} />
          </Frame>
          <Frame title="Important dates">
            <CheckList items={importantDates} placeholder="Date and why it matters" onChange={(importantDates) => patch({ importantDates })} />
          </Frame>
          <Frame title="Reflection">
            <Field label="What stayed with you" textarea value={monthReview} onChange={(monthReview) => patch({ monthReview })} />
          </Frame>
        </>
      )}
    </div>
  );
}
