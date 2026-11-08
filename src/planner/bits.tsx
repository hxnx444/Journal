import type { ReactNode } from "react";
import { newId, type Row } from "./store";

export function Frame({
  kicker,
  title,
  children,
  action,
}: {
  kicker?: string;
  title: string;
  children: ReactNode;
  action?: ReactNode;
}) {
  return (
    <section className="card p-4 sm:p-5">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          {kicker ? <p className="kicker mb-1">{kicker}</p> : null}
          <h2 className="font-display text-xl font-medium text-ink">{title}</h2>
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

export function Field({
  label,
  value,
  onChange,
  textarea,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string | number;
  onChange: (v: string) => void;
  textarea?: boolean;
  type?: string;
  placeholder?: string;
}) {
  const cls =
    "mt-1 w-full rounded-xl border border-line bg-ivory px-3 py-2.5 text-sm outline-none focus:border-rose";
  return (
    <label className="block text-sm text-muted">
      {label}
      {textarea ? (
        <textarea
          className={`${cls} min-h-24`}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          className={cls}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </label>
  );
}

export function CheckList({
  items,
  onChange,
  placeholder,
}: {
  items: Row[];
  onChange: (next: Row[]) => void;
  placeholder: string;
}) {
  return (
    <div>
      <ul className="divide-y divide-line">
        {items.length === 0 ? <li className="py-3 text-sm text-muted">Nothing here yet.</li> : null}
        {items.map((item) => (
          <li key={item.id} className="flex items-center gap-3 py-2.5">
            <button
              type="button"
              aria-pressed={item.done}
              onClick={() =>
                onChange(items.map((x) => (x.id === item.id ? { ...x, done: !x.done } : x)))
              }
              className={`grid size-7 shrink-0 place-items-center rounded-lg border-2 ${
                item.done ? "border-lilac bg-lilac" : "border-rose bg-paper"
              }`}
            >
              {item.done ? <span className="block size-2.5 rounded-sm bg-paper" /> : null}
            </button>
            <span className={`flex-1 text-sm ${item.done ? "text-muted line-through" : "text-ink"}`}>
              {item.text}
            </span>
            <button
              type="button"
              className="px-2 text-sm text-muted"
              onClick={() => onChange(items.filter((x) => x.id !== item.id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <form
        className="mt-2 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          const text = String(data.get("text") || "").trim();
          if (!text) return;
          onChange([...items, { id: newId(), text, done: false }]);
          e.currentTarget.reset();
        }}
      >
        <input
          name="text"
          placeholder={placeholder}
          className="min-h-11 flex-1 rounded-xl border border-line bg-ivory px-3 text-sm outline-none focus:border-rose"
        />
        <button type="submit" className="min-h-11 rounded-xl bg-night px-4 text-sm font-semibold text-ivory">
          Add
        </button>
      </form>
    </div>
  );
}

export function Bar({ value }: { value: number }) {
  const v = Math.max(0, Math.min(100, value));
  return (
    <div className="h-2 overflow-hidden rounded-full bg-lavender">
      <div className="h-full rounded-full bg-rose" style={{ width: `${v}%` }} />
    </div>
  );
}

export function Pill({ children, on, onClick }: { children: ReactNode; on?: boolean; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-11 rounded-full border px-3 text-sm ${
        on ? "border-rose bg-blush text-ink" : "border-line bg-paper text-muted"
      }`}
    >
      {children}
    </button>
  );
}
