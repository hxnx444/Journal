import { CheckList, Field, Frame } from "./bits";
import { newId, usePlanner, type AppRow, type Step } from "./store";

const STATUSES = ["later", "now", "done"] as const;

export function AiView() {
  const s = usePlanner();
  const done = s.roadmap.filter((r) => r.status === "done").length;
  const pct = s.roadmap.length ? Math.round((done / s.roadmap.length) * 100) : 0;
  return (
    <div className="grid gap-4">
      <Frame kicker="toward an ai engineer" title="Roadmap">
        <p className="mb-3 text-sm text-muted">
          From where you are now: Python, mathematics, statistics, algorithms, machine learning, deep learning, NLP, SQL, Git, APIs, and something you can show. {done} of {s.roadmap.length} marked done ({pct}%).
        </p>
        <ul className="space-y-2">
          {s.roadmap.map((step) => (
            <li key={step.id} className="rounded-2xl border border-line p-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-rose-deep">{step.area}</span>
                <input
                  className="min-w-40 flex-1 rounded-lg border border-line bg-ivory px-2 py-1 text-sm"
                  value={step.title}
                  onChange={(e) => updateStep(step.id, { title: e.target.value })}
                />
                <select
                  className="rounded-lg border border-line bg-paper px-2 py-1 text-sm"
                  value={step.status}
                  onChange={(e) => updateStep(step.id, { status: e.target.value as Step["status"] })}
                >
                  {STATUSES.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
                <button type="button" className="text-xs text-muted" onClick={() => s.patch({ roadmap: s.roadmap.filter((r) => r.id !== step.id) })}>
                  Remove
                </button>
              </div>
              <input
                className="mt-2 w-full rounded-lg border border-line bg-ivory px-2 py-1 text-sm"
                placeholder="Notes"
                value={step.notes}
                onChange={(e) => updateStep(step.id, { notes: e.target.value })}
              />
            </li>
          ))}
        </ul>
        <form
          className="mt-3 flex flex-wrap gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const title = String(fd.get("title") || "").trim();
            if (!title) return;
            s.patch({
              roadmap: [...s.roadmap, { id: newId(), area: String(fd.get("area") || "Custom"), title, status: "later", notes: "" }],
            });
            e.currentTarget.reset();
          }}
        >
          <input name="area" placeholder="Area" className="min-h-11 w-32 rounded-xl border border-line bg-ivory px-3 text-sm" />
          <input name="title" placeholder="Next skill or milestone" className="min-h-11 flex-1 rounded-xl border border-line bg-ivory px-3 text-sm" />
          <button className="min-h-11 rounded-xl bg-night px-4 text-sm font-semibold text-ivory">Add</button>
        </form>
      </Frame>

      <Frame title="Courses to compare">
        <Field
          label="Xperience AI and anything else you are considering"
          textarea
          value={s.courseCompare}
          onChange={(courseCompare) => s.patch({ courseCompare })}
        />
      </Frame>

      <div className="grid gap-4 lg:grid-cols-2">
        <Frame title="Projects">
          <CheckList items={s.projects} placeholder="Project and where it stands" onChange={(projects) => s.patch({ projects })} />
        </Frame>
        <Frame title="Certifications">
          <CheckList items={s.certs} placeholder="Certificate or course finished" onChange={(certs) => s.patch({ certs })} />
        </Frame>
      </div>

      <Frame title="Portfolio and GitHub">
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="GitHub" value={s.github} onChange={(github) => s.patch({ github })} placeholder="github.com/you" />
          <Field label="Portfolio notes" textarea value={s.portfolio} onChange={(portfolio) => s.patch({ portfolio })} />
        </div>
      </Frame>

      <Frame title="Internships">
        <Apps rows={s.internships} onChange={(internships) => s.patch({ internships })} />
      </Frame>
      <Frame title="Job applications">
        <Apps rows={s.jobs} onChange={(jobs) => s.patch({ jobs })} />
      </Frame>
    </div>
  );
}

function updateStep(id: string, partial: Partial<Step>) {
  const { roadmap, patch } = usePlanner.getState();
  patch({ roadmap: roadmap.map((r) => (r.id === id ? { ...r, ...partial } : r)) });
}

function Apps({ rows, onChange }: { rows: AppRow[]; onChange: (rows: AppRow[]) => void }) {
  return (
    <div>
      <ul className="space-y-2">
        {rows.map((r) => (
          <li key={r.id} className="grid gap-2 rounded-xl bg-ivory p-2 sm:grid-cols-5">
            <input className="rounded-lg border border-line bg-paper px-2 py-1 text-sm" value={r.place} onChange={(e) => onChange(rows.map((x) => (x.id === r.id ? { ...x, place: e.target.value } : x)))} />
            <input className="rounded-lg border border-line bg-paper px-2 py-1 text-sm" value={r.role} onChange={(e) => onChange(rows.map((x) => (x.id === r.id ? { ...x, role: e.target.value } : x)))} />
            <input className="rounded-lg border border-line bg-paper px-2 py-1 text-sm" value={r.status} onChange={(e) => onChange(rows.map((x) => (x.id === r.id ? { ...x, status: e.target.value } : x)))} />
            <input type="date" className="rounded-lg border border-line bg-paper px-2 py-1 text-sm" value={r.date} onChange={(e) => onChange(rows.map((x) => (x.id === r.id ? { ...x, date: e.target.value } : x)))} />
            <button type="button" className="text-sm text-muted" onClick={() => onChange(rows.filter((x) => x.id !== r.id))}>
              Remove
            </button>
            <input className="rounded-lg border border-line bg-paper px-2 py-1 text-sm sm:col-span-5" placeholder="Notes" value={r.notes} onChange={(e) => onChange(rows.map((x) => (x.id === r.id ? { ...x, notes: e.target.value } : x)))} />
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="mt-3 min-h-11 rounded-xl bg-night px-4 text-sm font-semibold text-ivory"
        onClick={() => onChange([...rows, { id: newId(), place: "", role: "", status: "Draft", date: "", notes: "" }])}
      >
        Add row
      </button>
    </div>
  );
}

export function TeachView() {
  const s = usePlanner();
  return (
    <div className="grid gap-4">
      <Frame kicker="a longer path" title="Teaching and academic future">
        <p className="text-sm text-muted">Tutoring now can become teaching later. Keep it light beside the degree.</p>
      </Frame>
      <Frame title="Lesson notes and tutoring">
        <Field label="How you like to explain things" textarea value={s.teachingNotes} onChange={(teachingNotes) => s.patch({ teachingNotes })} />
        <div className="mt-3">
          <CheckList items={s.tutoring} placeholder="Student, subject, or hour logged" onChange={(tutoring) => s.patch({ tutoring })} />
        </div>
      </Frame>
      <Frame title="Research interests">
        <Field label="What you might want to study more deeply" textarea value={s.research} onChange={(research) => s.patch({ research })} />
      </Frame>
      <Frame title="Postgraduate possibilities">
        <Field label="Programs, countries, timing after 2028" textarea value={s.postgrad} onChange={(postgrad) => s.patch({ postgrad })} />
      </Frame>
      <Frame title="Academic milestones">
        <CheckList items={s.academicMiles} placeholder="A step toward teaching or research" onChange={(academicMiles) => s.patch({ academicMiles })} />
      </Frame>
    </div>
  );
}

export function WorkView() {
  const s = usePlanner();
  return (
    <div className="grid gap-4">
      <Frame kicker="income while studying" title="Sutherland and other work">
        <Field label="Where things stand" textarea value={s.workStatus} onChange={(workStatus) => s.patch({ workStatus })} />
      </Frame>
      <div className="grid gap-4 sm:grid-cols-2">
        <Frame title="Shifts">
          <Field label="Pattern" textarea value={s.shifts} onChange={(shifts) => s.patch({ shifts })} />
        </Frame>
        <Frame title="Pay">
          <Field label="Salary or hourly notes" textarea value={s.salary} onChange={(salary) => s.patch({ salary })} />
        </Frame>
        <Frame title="Attendance">
          <Field label="Days kept, days needed off" textarea value={s.attendance} onChange={(attendance) => s.patch({ attendance })} />
        </Frame>
        <Frame title="Performance and KPIs">
          <Field label="What they measure" textarea value={s.kpis} onChange={(kpis) => s.patch({ kpis })} />
        </Frame>
      </div>
      <Frame title="Does the schedule fit university?">
        <Field label="Lectures, exams, recovery" textarea value={s.workFit} onChange={(workFit) => s.patch({ workFit })} />
      </Frame>
      <Frame title="Work goals">
        <CheckList items={s.workGoals} placeholder="A work goal that does not swallow study" onChange={(workGoals) => s.patch({ workGoals })} />
      </Frame>
      <Frame title="Applications and interviews">
        <Apps rows={s.jobs} onChange={(jobs) => s.patch({ jobs })} />
      </Frame>
    </div>
  );
}
