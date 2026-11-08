import { useEffect, useState } from "react";
import { TodayView } from "./Today";
import { CalendarViews, UniversityView } from "./Study";
import { AiView, TeachView, WorkView } from "./Path";
import {
  CareView,
  FaithView,
  FutureView,
  HabitsView,
  IndependenceView,
  MoneyView,
  NotesView,
  ProgressView,
  ResetView,
} from "./Life";
import { usePlanner, type PlannerData } from "./store";

const NAV = [
  ["today", "Today"],
  ["week", "Week"],
  ["month", "Month"],
  ["uni", "University"],
  ["ai", "AI path"],
  ["teach", "Teaching"],
  ["work", "Work"],
  ["money", "Money"],
  ["move", "Independence"],
  ["future", "Future"],
  ["faith", "Faith"],
  ["care", "Care"],
  ["habits", "Habits"],
  ["reset", "Reset"],
  ["notes", "Notes"],
  ["progress", "Progress"],
] as const;

type Tab = (typeof NAV)[number][0];

export function PlannerApp() {
  const [tab, setTab] = useState<Tab>("today");
  const hydrated = usePlanner((s) => s.hydrated);
  const [toast, setToast] = useState("");

  useEffect(() => {
    const t = setTimeout(() => usePlanner.setState({ hydrated: true }), 400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 1800);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <div className="mx-auto min-h-screen max-w-5xl px-3 pb-24 pt-4 sm:px-5">
      <header className="card mb-4 flex flex-wrap items-center justify-between gap-3 px-4 py-3">
        <div>
          <p className="kicker">a little journal</p>
          <h1 className="font-display text-3xl font-medium text-night">My Little Life</h1>
          <p className="text-sm text-muted">Graduate in 2028. Learn the work. Keep your money. Leave room to live.</p>
        </div>
        <div className="flex gap-2">
          <button type="button" className="min-h-11 rounded-full border border-line bg-paper px-4 text-sm" onClick={() => download()}>
            Backup
          </button>
          <label className="min-h-11 cursor-pointer rounded-full border border-line bg-blush px-4 py-2.5 text-sm">
            Restore
            <input
              type="file"
              accept="application/json"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = () => {
                  try {
                    const data = JSON.parse(String(reader.result)) as PlannerData;
                    if (!data || !data.courses || !data.roadmap) throw new Error("bad");
                    usePlanner.getState().replaceAll(data);
                    setToast("Restored");
                  } catch {
                    setToast("That file could not be read");
                  }
                };
                reader.readAsText(file);
                e.target.value = "";
              }}
            />
          </label>
        </div>
      </header>

      <nav className="mb-4 flex gap-2 overflow-x-auto pb-1">
        {NAV.map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={`shrink-0 rounded-full px-3 py-2 text-sm ${
              tab === id ? "bg-night text-ivory" : "bg-paper text-ink border border-line"
            }`}
          >
            {label}
          </button>
        ))}
      </nav>

      {!hydrated ? <p className="text-sm text-muted">Opening your pages…</p> : <Body tab={tab} />}

      {toast ? (
        <p className="fixed bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-night px-4 py-2 text-sm text-ivory">{toast}</p>
      ) : null}
    </div>
  );
}

function Body({ tab }: { tab: Tab }) {
  if (tab === "today") return <TodayView />;
  if (tab === "week") return <CalendarViews mode="week" />;
  if (tab === "month") return <CalendarViews mode="month" />;
  if (tab === "uni") return <UniversityView />;
  if (tab === "ai") return <AiView />;
  if (tab === "teach") return <TeachView />;
  if (tab === "work") return <WorkView />;
  if (tab === "money") return <MoneyView />;
  if (tab === "move") return <IndependenceView />;
  if (tab === "future") return <FutureView />;
  if (tab === "faith") return <FaithView />;
  if (tab === "care") return <CareView />;
  if (tab === "habits") return <HabitsView />;
  if (tab === "reset") return <ResetView />;
  if (tab === "notes") return <NotesView />;
  return <ProgressView />;
}

function download() {
  const s = usePlanner.getState();
  const {
    hydrated: _h,
    patch: _p,
    replaceAll: _r,
    reset: _x,
    ...data
  } = s;
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "my-little-life-backup.json";
  a.click();
  URL.revokeObjectURL(url);
}
