import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Row = { id: string; text: string; done: boolean; note?: string };

export type Course = {
  id: string;
  name: string;
  credits: number;
  semester: string;
  grade: string;
  lectures: string;
  backlog: boolean;
};

export type Task = {
  id: string;
  title: string;
  course: string;
  due: string;
  kind: "assignment" | "exam" | "quiz" | "project";
  done: boolean;
};

export type StudyBlock = { id: string; day: string; time: string; focus: string };

export type Step = {
  id: string;
  area: string;
  title: string;
  status: "later" | "now" | "done";
  notes: string;
};

export type AppRow = {
  id: string;
  place: string;
  role: string;
  status: string;
  date: string;
  notes: string;
};

export type Ledger = {
  id: string;
  kind: "income" | "expense";
  amount: number;
  currency: "EGP" | "USD";
  label: string;
  date: string;
  fund: "daily" | "emergency" | "moving" | "travel";
};

export type Habit = { id: string; name: string };

export type SkinNight = "acretin" | "recovery" | "off" | "";

export type Daily = {
  priorities: Row[];
  todos: Row[];
  uni: Row[];
  work: Row[];
  appointments: Row[];
  notes: string;
  mood: number;
  energy: number;
};

export type PlannerData = {
  daily: Record<string, Daily>;
  courses: Course[];
  tasks: Task[];
  study: StudyBlock[];
  gradNotes: string;
  semesterNote: string;
  roadmap: Step[];
  courseCompare: string;
  portfolio: string;
  github: string;
  certs: Row[];
  projects: Row[];
  internships: AppRow[];
  jobs: AppRow[];
  teachingNotes: string;
  tutoring: Row[];
  research: string;
  postgrad: string;
  academicMiles: Row[];
  workStatus: string;
  shifts: string;
  salary: string;
  attendance: string;
  kpis: string;
  workFit: string;
  workGoals: Row[];
  egp: number;
  usd: number;
  ledger: Ledger[];
  budgetNote: string;
  moneyGoals: Row[];
  livingCosts: string;
  documents: string;
  housing: string;
  incomeNeed: string;
  moving: Row[];
  places: Row[];
  liveIn: Row[];
  experiences: Row[];
  lifestyle: string;
  habits: Habit[];
  habitLog: Record<string, string[]>;
  morning: Row[];
  evening: Row[];
  resetSteps: Row[];
  weekWins: string;
  weekFocus: string;
  monthlyGoals: Row[];
  importantDates: Row[];
  monthReview: string;
  brain: string;
  ideas: Row[];
  reading: Row[];
  skills: Row[];
  personalProjects: Row[];
  confidence: string;
  salah: Record<string, Record<string, boolean>>;
  quranPages: Record<string, number>;
  quranWhere: string;
  quranNote: string;
  skin: Record<
    string,
    {
      night: SkinNight;
      cleanser: boolean;
      shave: boolean;
      moisturizer: boolean;
      sunscreen: boolean;
      extra: string;
    }
  >;
  extraProducts: Row[];
  hair: string;
  sleep: Record<string, { hours: number; note: string }>;
  wellness: Row[];
  workoutStart: string;
  workoutLog: Record<string, { done: boolean; sets: number; note: string }>;
  events: { id: string; date: string; title: string; kind: string; time: string }[];
  weeklyGoals: Row[];
};

const uid = () => Math.random().toString(36).slice(2, 10);

const POINTS: Record<string, number> = {
  "A": 4,
  "A-": 3.7,
  "B+": 3.3,
  "B": 3,
  "B-": 2.7,
  "C+": 2.3,
  "C": 2,
  "C-": 1.7,
  "D+": 1.3,
  "D": 1,
  "F": 0,
};

export const GRADES = Object.keys(POINTS);

export function todayKey(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function emptyDaily(): Daily {
  return {
    priorities: [],
    todos: [],
    uni: [],
    work: [],
    appointments: [],
    notes: "",
    mood: 0,
    energy: 0,
  };
}

function seed(): PlannerData {
  return {
    daily: {},
    courses: [
      {
        id: uid(),
        name: "Operating Systems",
        credits: 3,
        semester: "Current",
        grade: "",
        lectures: "",
        backlog: true,
      },
      {
        id: uid(),
        name: "Statistical Methods",
        credits: 3,
        semester: "Current",
        grade: "",
        lectures: "",
        backlog: true,
      },
    ],
    tasks: [],
    study: [
      { id: uid(), day: "Sunday", time: "Evening", focus: "Hard course first, 50 minutes" },
      { id: uid(), day: "Tuesday", time: "Afternoon", focus: "Statistics practice" },
      { id: uid(), day: "Thursday", time: "Evening", focus: "Review + assignments" },
    ],
    gradNotes:
      "Alexandria University, Computer Science, Statistics minor. Target graduation 2028. Raise CGPA to at least 3.33.",
    semesterNote: "",
    roadmap: [
      { id: uid(), area: "Foundations", title: "Python for data and scripts", status: "now", notes: "" },
      { id: uid(), area: "Foundations", title: "Mathematics for ML (linear algebra, calculus)", status: "later", notes: "" },
      { id: uid(), area: "Foundations", title: "Statistics and probability", status: "now", notes: "Ties into the minor" },
      { id: uid(), area: "CS core", title: "Data structures and algorithms", status: "later", notes: "" },
      { id: uid(), area: "Data", title: "SQL and tidy datasets", status: "later", notes: "" },
      { id: uid(), area: "Tools", title: "Git, GitHub, and a public repo habit", status: "now", notes: "" },
      { id: uid(), area: "ML", title: "Machine learning fundamentals", status: "later", notes: "" },
      { id: uid(), area: "ML", title: "Deep learning", status: "later", notes: "" },
      { id: uid(), area: "ML", title: "Natural language processing", status: "later", notes: "" },
      { id: uid(), area: "Build", title: "APIs and a small deployed model or app", status: "later", notes: "" },
      { id: uid(), area: "Course", title: "Xperience AI course (compare, then decide)", status: "later", notes: "" },
      { id: uid(), area: "Proof", title: "Portfolio of 3 finished projects", status: "later", notes: "" },
      { id: uid(), area: "Work", title: "Internship or first AI-adjacent role", status: "later", notes: "" },
    ],
    courseCompare: "Xperience AI — note price, time per week, projects included, and whether it fits the semester.",
    portfolio: "",
    github: "",
    certs: [],
    projects: [],
    internships: [],
    jobs: [
      {
        id: uid(),
        place: "Sutherland",
        role: "Wayfair account (considering)",
        status: "Exploring",
        date: "",
        notes: "Must fit lectures and recovery.",
      },
    ],
    teachingNotes: "",
    tutoring: [],
    research: "",
    postgrad: "",
    academicMiles: [],
    workStatus: "Considering Sutherland, possibly the Wayfair account, while studying.",
    shifts: "",
    salary: "",
    attendance: "",
    kpis: "",
    workFit: "",
    workGoals: [],
    egp: 0,
    usd: 0,
    ledger: [],
    budgetNote: "",
    moneyGoals: [
      { id: uid(), text: "Keep an emergency cushion untouched", done: false },
      { id: uid(), text: "Grow the moving-out fund", done: false },
      { id: uid(), text: "Set aside a small travel fund", done: false },
    ],
    livingCosts: "Estimate rent, food, transport, internet, and a buffer after graduation.",
    documents: "National ID, university papers, CV, bank details, contracts.",
    housing: "",
    incomeNeed: "",
    moving: [
      { id: uid(), text: "Know a realistic monthly cost", done: false },
      { id: uid(), text: "Save before signing anything", done: false },
      { id: uid(), text: "Visit areas in daylight", done: false },
      { id: uid(), text: "List what must move with me", done: false },
    ],
    places: [],
    liveIn: [],
    experiences: [],
    lifestyle: "A quiet place of my own, steady income, room to study, and travel when it is affordable.",
    habits: [
      { id: uid(), name: "One focused study block" },
      { id: uid(), name: "Skincare, gently" },
      { id: uid(), name: "Lights out on time" },
    ],
    habitLog: {},
    morning: [
      { id: uid(), text: "Water", done: false },
      { id: uid(), text: "Fajr", done: false },
      { id: uid(), text: "Three priorities", done: false },
    ],
    evening: [
      { id: uid(), text: "Skincare", done: false },
      { id: uid(), text: "Tomorrow's first task", done: false },
      { id: uid(), text: "Isha", done: false },
    ],
    resetSteps: [
      { id: uid(), text: "Glance at unfinished tasks", done: false },
      { id: uid(), text: "Set three weekly goals", done: false },
      { id: uid(), text: "Check money, briefly", done: false },
      { id: uid(), text: "Protect one rest evening", done: false },
    ],
    weekWins: "",
    weekFocus: "",
    monthlyGoals: [],
    importantDates: [],
    monthReview: "",
    brain: "",
    ideas: [],
    reading: [],
    skills: [],
    personalProjects: [],
    confidence: "",
    salah: {},
    quranPages: {},
    quranWhere: "",
    quranNote: "",
    skin: {},
    extraProducts: [],
    hair: "",
    sleep: {},
    wellness: [],
    workoutStart: todayKey(),
    workoutLog: {},
    events: [],
    weeklyGoals: [],
  };
}

type Store = PlannerData & {
  hydrated: boolean;
  patch: (partial: Partial<PlannerData>) => void;
  replaceAll: (data: PlannerData) => void;
  reset: () => void;
};

export const usePlanner = create<Store>()(
  persist(
    (set) => ({
      ...seed(),
      hydrated: false,
      patch: (partial) => set(partial),
      replaceAll: (data) => set({ ...data, hydrated: true }),
      reset: () => set({ ...seed(), hydrated: true }),
    }),
    {
      name: "my-little-life-v1",
      partialize: (s) => {
        const { hydrated: _h, patch: _p, replaceAll: _r, reset: _x, ...data } = s;
        return data;
      },
      onRehydrateStorage: () => () => {
        usePlanner.setState({ hydrated: true });
      },
    },
  ),
);

export function cgpa(courses: Course[]) {
  let pts = 0;
  let cr = 0;
  for (const c of courses) {
    if (c.grade && POINTS[c.grade] !== undefined && c.credits > 0) {
      pts += POINTS[c.grade] * c.credits;
      cr += c.credits;
    }
  }
  if (!cr) return null;
  return pts / cr;
}

export function newId() {
  return uid();
}

export const SALAH = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"] as const;

export const WEEKDAYS = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export function workoutPlan(dateStr: string) {
  const d = new Date(dateStr + "T12:00:00");
  const day = d.getDay();
  if (day === 1 || day === 6) {
    return {
      name: "Glutes, core, calves",
      minutes: "15–25",
      moves: [
        "Glute bridges",
        "Seated band abductions",
        "Heel slides",
        "Dead bugs",
        "Seated calf raises",
      ],
    };
  }
  if (day === 3) {
    return {
      name: "Arms and core",
      minutes: "15–25",
      moves: [
        "Seated dumbbell curls",
        "Seated shoulder raises",
        "Triceps extensions",
        "Supported kickbacks",
        "Gentle core work",
      ],
    };
  }
  return null;
}

export function setsFor(start: string, dateStr: string) {
  const a = new Date(start + "T12:00:00").getTime();
  const b = new Date(dateStr + "T12:00:00").getTime();
  const days = Math.floor((b - a) / 86400000);
  return days >= 14 ? 2 : 1;
}

export function suggestSkin(log: PlannerData["skin"], dateStr: string): SkinNight {
  const d = new Date(dateStr + "T12:00:00");
  d.setDate(d.getDate() - 1);
  const prev = log[todayKey(d)]?.night;
  if (prev === "acretin") return "recovery";
  if (prev === "recovery") return "acretin";
  return "recovery";
}
