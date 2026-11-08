import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BrQvxVCE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var uid = () => Math.random().toString(36).slice(2, 10);
var POINTS = {
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
	"F": 0
};
var GRADES = Object.keys(POINTS);
function todayKey(d = /* @__PURE__ */ new Date()) {
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function emptyDaily() {
	return {
		priorities: [],
		todos: [],
		uni: [],
		work: [],
		appointments: [],
		notes: "",
		mood: 0,
		energy: 0
	};
}
function seed() {
	return {
		daily: {},
		courses: [{
			id: uid(),
			name: "Operating Systems",
			credits: 3,
			semester: "Current",
			grade: "",
			lectures: "",
			backlog: true
		}, {
			id: uid(),
			name: "Statistical Methods",
			credits: 3,
			semester: "Current",
			grade: "",
			lectures: "",
			backlog: true
		}],
		tasks: [],
		study: [
			{
				id: uid(),
				day: "Sunday",
				time: "Evening",
				focus: "Hard course first, 50 minutes"
			},
			{
				id: uid(),
				day: "Tuesday",
				time: "Afternoon",
				focus: "Statistics practice"
			},
			{
				id: uid(),
				day: "Thursday",
				time: "Evening",
				focus: "Review + assignments"
			}
		],
		gradNotes: "Alexandria University, Computer Science, Statistics minor. Target graduation 2028. Raise CGPA to at least 3.33.",
		semesterNote: "",
		roadmap: [
			{
				id: uid(),
				area: "Foundations",
				title: "Python for data and scripts",
				status: "now",
				notes: ""
			},
			{
				id: uid(),
				area: "Foundations",
				title: "Mathematics for ML (linear algebra, calculus)",
				status: "later",
				notes: ""
			},
			{
				id: uid(),
				area: "Foundations",
				title: "Statistics and probability",
				status: "now",
				notes: "Ties into the minor"
			},
			{
				id: uid(),
				area: "CS core",
				title: "Data structures and algorithms",
				status: "later",
				notes: ""
			},
			{
				id: uid(),
				area: "Data",
				title: "SQL and tidy datasets",
				status: "later",
				notes: ""
			},
			{
				id: uid(),
				area: "Tools",
				title: "Git, GitHub, and a public repo habit",
				status: "now",
				notes: ""
			},
			{
				id: uid(),
				area: "ML",
				title: "Machine learning fundamentals",
				status: "later",
				notes: ""
			},
			{
				id: uid(),
				area: "ML",
				title: "Deep learning",
				status: "later",
				notes: ""
			},
			{
				id: uid(),
				area: "ML",
				title: "Natural language processing",
				status: "later",
				notes: ""
			},
			{
				id: uid(),
				area: "Build",
				title: "APIs and a small deployed model or app",
				status: "later",
				notes: ""
			},
			{
				id: uid(),
				area: "Course",
				title: "Xperience AI course (compare, then decide)",
				status: "later",
				notes: ""
			},
			{
				id: uid(),
				area: "Proof",
				title: "Portfolio of 3 finished projects",
				status: "later",
				notes: ""
			},
			{
				id: uid(),
				area: "Work",
				title: "Internship or first AI-adjacent role",
				status: "later",
				notes: ""
			}
		],
		courseCompare: "Xperience AI — note price, time per week, projects included, and whether it fits the semester.",
		portfolio: "",
		github: "",
		certs: [],
		projects: [],
		internships: [],
		jobs: [{
			id: uid(),
			place: "Sutherland",
			role: "Wayfair account (considering)",
			status: "Exploring",
			date: "",
			notes: "Must fit lectures and recovery."
		}],
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
			{
				id: uid(),
				text: "Keep an emergency cushion untouched",
				done: false
			},
			{
				id: uid(),
				text: "Grow the moving-out fund",
				done: false
			},
			{
				id: uid(),
				text: "Set aside a small travel fund",
				done: false
			}
		],
		livingCosts: "Estimate rent, food, transport, internet, and a buffer after graduation.",
		documents: "National ID, university papers, CV, bank details, contracts.",
		housing: "",
		incomeNeed: "",
		moving: [
			{
				id: uid(),
				text: "Know a realistic monthly cost",
				done: false
			},
			{
				id: uid(),
				text: "Save before signing anything",
				done: false
			},
			{
				id: uid(),
				text: "Visit areas in daylight",
				done: false
			},
			{
				id: uid(),
				text: "List what must move with me",
				done: false
			}
		],
		places: [],
		liveIn: [],
		experiences: [],
		lifestyle: "A quiet place of my own, steady income, room to study, and travel when it is affordable.",
		habits: [
			{
				id: uid(),
				name: "One focused study block"
			},
			{
				id: uid(),
				name: "Skincare, gently"
			},
			{
				id: uid(),
				name: "Lights out on time"
			}
		],
		habitLog: {},
		morning: [
			{
				id: uid(),
				text: "Water",
				done: false
			},
			{
				id: uid(),
				text: "Fajr",
				done: false
			},
			{
				id: uid(),
				text: "Three priorities",
				done: false
			}
		],
		evening: [
			{
				id: uid(),
				text: "Skincare",
				done: false
			},
			{
				id: uid(),
				text: "Tomorrow's first task",
				done: false
			},
			{
				id: uid(),
				text: "Isha",
				done: false
			}
		],
		resetSteps: [
			{
				id: uid(),
				text: "Glance at unfinished tasks",
				done: false
			},
			{
				id: uid(),
				text: "Set three weekly goals",
				done: false
			},
			{
				id: uid(),
				text: "Check money, briefly",
				done: false
			},
			{
				id: uid(),
				text: "Protect one rest evening",
				done: false
			}
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
		weeklyGoals: []
	};
}
var usePlanner = create()(persist((set) => ({
	...seed(),
	hydrated: false,
	patch: (partial) => set(partial),
	replaceAll: (data) => set({
		...data,
		hydrated: true
	}),
	reset: () => set({
		...seed(),
		hydrated: true
	})
}), {
	name: "my-little-life-v1",
	partialize: (s) => {
		const { hydrated: _h, patch: _p, replaceAll: _r, reset: _x, ...data } = s;
		return data;
	},
	onRehydrateStorage: () => () => {
		usePlanner.setState({ hydrated: true });
	}
}));
function cgpa(courses) {
	let pts = 0;
	let cr = 0;
	for (const c of courses) if (c.grade && POINTS[c.grade] !== void 0 && c.credits > 0) {
		pts += POINTS[c.grade] * c.credits;
		cr += c.credits;
	}
	if (!cr) return null;
	return pts / cr;
}
function newId() {
	return uid();
}
var SALAH = [
	"Fajr",
	"Dhuhr",
	"Asr",
	"Maghrib",
	"Isha"
];
var WEEKDAYS = [
	"Saturday",
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday"
];
function workoutPlan(dateStr) {
	const day = (/* @__PURE__ */ new Date(dateStr + "T12:00:00")).getDay();
	if (day === 1 || day === 6) return {
		name: "Glutes, core, calves",
		minutes: "15–25",
		moves: [
			"Glute bridges",
			"Seated band abductions",
			"Heel slides",
			"Dead bugs",
			"Seated calf raises"
		]
	};
	if (day === 3) return {
		name: "Arms and core",
		minutes: "15–25",
		moves: [
			"Seated dumbbell curls",
			"Seated shoulder raises",
			"Triceps extensions",
			"Supported kickbacks",
			"Gentle core work"
		]
	};
	return null;
}
function setsFor(start, dateStr) {
	const a = (/* @__PURE__ */ new Date(start + "T12:00:00")).getTime();
	const b = (/* @__PURE__ */ new Date(dateStr + "T12:00:00")).getTime();
	return Math.floor((b - a) / 864e5) >= 14 ? 2 : 1;
}
function suggestSkin(log, dateStr) {
	const d = /* @__PURE__ */ new Date(dateStr + "T12:00:00");
	d.setDate(d.getDate() - 1);
	const prev = log[todayKey(d)]?.night;
	if (prev === "acretin") return "recovery";
	if (prev === "recovery") return "acretin";
	return "recovery";
}
function Frame({ kicker, title, children, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "card p-4 sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker mb-1",
				children: kicker
			}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-medium text-ink",
				children: title
			})] }), action]
		}), children]
	});
}
function Field({ label, value, onChange, textarea, type = "text", placeholder }) {
	const cls = "mt-1 w-full rounded-xl border border-line bg-ivory px-3 py-2.5 text-sm outline-none focus:border-rose";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-sm text-muted",
		children: [label, textarea ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			className: `${cls} min-h-24`,
			value,
			placeholder,
			onChange: (e) => onChange(e.target.value)
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: cls,
			type,
			value,
			placeholder,
			onChange: (e) => onChange(e.target.value)
		})]
	});
}
function CheckList({ items, onChange, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
		className: "divide-y divide-line",
		children: [items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "py-3 text-sm text-muted",
			children: "Nothing here yet."
		}) : null, items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-center gap-3 py-2.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": item.done,
					onClick: () => onChange(items.map((x) => x.id === item.id ? {
						...x,
						done: !x.done
					} : x)),
					className: `grid size-7 shrink-0 place-items-center rounded-lg border-2 ${item.done ? "border-lilac bg-lilac" : "border-rose bg-paper"}`,
					children: item.done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block size-2.5 rounded-sm bg-paper" }) : null
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `flex-1 text-sm ${item.done ? "text-muted line-through" : "text-ink"}`,
					children: item.text
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "px-2 text-sm text-muted",
					onClick: () => onChange(items.filter((x) => x.id !== item.id)),
					children: "Remove"
				})
			]
		}, item.id))]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "mt-2 flex gap-2",
		onSubmit: (e) => {
			e.preventDefault();
			const data = new FormData(e.currentTarget);
			const text = String(data.get("text") || "").trim();
			if (!text) return;
			onChange([...items, {
				id: newId(),
				text,
				done: false
			}]);
			e.currentTarget.reset();
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name: "text",
			placeholder,
			className: "min-h-11 flex-1 rounded-xl border border-line bg-ivory px-3 text-sm outline-none focus:border-rose"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "submit",
			className: "min-h-11 rounded-xl bg-night px-4 text-sm font-semibold text-ivory",
			children: "Add"
		})]
	})] });
}
function Bar({ value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-2 overflow-hidden rounded-full bg-lavender",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full rounded-full bg-rose",
			style: { width: `${Math.max(0, Math.min(100, value))}%` }
		})
	});
}
function Pill({ children, on, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: `min-h-11 rounded-full border px-3 text-sm ${on ? "border-rose bg-blush text-ink" : "border-line bg-paper text-muted"}`,
		children
	});
}
function TodayView() {
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
	const save = (next) => patch({ daily: {
		...dailyMap,
		[key]: next
	} });
	const scoreParts = [
		day.priorities.length ? day.priorities.filter((p) => p.done).length / day.priorities.length : 0,
		habits.length ? habitDone / habits.length : 0,
		prayers / 5
	];
	const score = Math.round(scoreParts.reduce((a, b) => a + b, 0) / scoreParts.length * 100);
	const dateLabel = (/* @__PURE__ */ new Date()).toLocaleDateString("en-GB", {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
				kicker: "today",
				title: dateLabel,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Today",
							value: `${score}%`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "CGPA",
							value: g ? g.toFixed(2) : "—",
							hint: "aim 3.33"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Salah",
							value: `${prayers}/5`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Open uni work",
							value: String(openUni)
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, { value: score }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Only what is in front of you. The rest can wait."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
						title: "Three priorities",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
							items: day.priorities,
							placeholder: "One thing that matters today",
							onChange: (priorities) => save({
								...day,
								priorities: priorities.slice(0, 3)
							})
						}), day.priorities.length >= 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-muted",
							children: "Three is enough. Finish one before adding another day."
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
						title: "To-do",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
							items: day.todos,
							placeholder: "A small task",
							onChange: (todos) => save({
								...day,
								todos
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
						title: "University",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
							items: day.uni,
							placeholder: "Lecture, revision, deadline",
							onChange: (uni) => save({
								...day,
								uni
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
						title: "Work",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
							items: day.work,
							placeholder: "Shift, application, follow-up",
							onChange: (work) => save({
								...day,
								work
							})
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Appointments",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
					items: day.appointments,
					placeholder: "Time and place",
					onChange: (appointments) => save({
						...day,
						appointments
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
					title: "Notes",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						className: "min-h-28 w-full rounded-xl border border-line bg-ivory px-3 py-2 text-sm outline-none focus:border-rose",
						value: day.notes,
						placeholder: "A line for later.",
						onChange: (e) => save({
							...day,
							notes: e.target.value
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
					title: "Mood and energy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-sm text-muted",
							children: "Mood"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3 flex flex-wrap gap-2",
							children: [
								1,
								2,
								3,
								4,
								5
							].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
								on: day.mood === n,
								onClick: () => save({
									...day,
									mood: n
								}),
								children: n
							}, n))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 text-sm text-muted",
							children: "Energy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								1,
								2,
								3,
								4,
								5
							].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
								on: day.energy === n,
								onClick: () => save({
									...day,
									energy: n
								}),
								children: n
							}, n))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-ink",
							children: plan ? `Workout window: ${plan.name}, about ${plan.minutes} minutes, ${setsFor(usePlanner.getState().workoutStart, key)} set. Rest days are part of the plan.` : "Rest day. Missing a workout is not a failure."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted",
							children: [
								"Skincare suggestion for tonight: ",
								skinHint === "acretin" ? "Acretin 0.05%, if skin feels calm" : "Recovery night",
								"."
							]
						})
					]
				})]
			})
		]
	});
}
function Stat({ label, value, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-blush/70 px-3 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl text-night",
				children: value
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-rose-deep",
				children: hint
			}) : null
		]
	});
}
function UniversityView() {
	const courses = usePlanner((s) => s.courses);
	const tasks = usePlanner((s) => s.tasks);
	const study = usePlanner((s) => s.study);
	const gradNotes = usePlanner((s) => s.gradNotes);
	const semesterNote = usePlanner((s) => s.semesterNote);
	const patch = usePlanner((s) => s.patch);
	const g = cgpa(courses);
	const credits = courses.reduce((n, c) => n + (Number(c.credits) || 0), 0);
	const backlog = courses.filter((c) => c.backlog);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
				kicker: "alexandria university",
				title: "Semester overview",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 grid grid-cols-3 gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini$1, {
								label: "CGPA",
								value: g ? g.toFixed(2) : "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini$1, {
								label: "Target",
								value: "3.33"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini$1, {
								label: "Credits listed",
								value: String(credits)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-sm text-muted",
						children: "Computer Science, Statistics minor. Graduation aimed at 2028. Grades use a 4.0 scale; blank grades stay out of the average."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "This semester",
						textarea: true,
						value: semesterNote,
						onChange: (semesterNote) => patch({ semesterNote })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
				title: "Courses",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[640px] text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "text-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 font-medium",
									children: "Course"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "font-medium",
									children: "Cr"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "font-medium",
									children: "Term"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "font-medium",
									children: "Grade"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "font-medium",
									children: "Lectures"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "font-medium",
									children: "Hard"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: courses.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseRow, { course: c }, c.id)) })]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddCourse, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Backlog — subjects that need patience",
				children: backlog.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Mark a course as hard and it will sit here."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-3",
					children: backlog.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl bg-lavender/50 p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg",
								children: c.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: c.lectures || "Add lecture times on the course row."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm",
								children: "Short sessions beat long guilt. One problem set or one lecture recap is a real win."
							})
						]
					}, c.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
				title: "Assignments, exams, deadlines",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mb-3 space-y-2",
					children: [tasks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "text-sm text-muted",
						children: "No deadlines yet."
					}) : null, tasks.slice().sort((a, b) => a.due.localeCompare(b.due)).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaskRow, { task: t }, t.id))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddTask, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
				title: "Weekly study timetable",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mb-3 space-y-2",
						children: study.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StudyRow, { block: b }, b.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddStudy, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "A realistic week leaves evenings for Salah, work, and rest. Protect the blocks you can actually keep."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Graduation requirements",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Notes",
					textarea: true,
					value: gradNotes,
					onChange: (gradNotes) => patch({ gradNotes })
				})
			})
		]
	});
}
function Mini$1({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-gold-soft px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-xl text-night",
			children: value
		})]
	});
}
function CourseRow({ course }) {
	const courses = usePlanner((s) => s.courses);
	const patch = usePlanner((s) => s.patch);
	const update = (partial) => patch({ courses: courses.map((c) => c.id === course.id ? {
		...c,
		...partial
	} : c) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
		className: "border-t border-line align-top",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "py-2 pr-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "w-full rounded-lg border border-line bg-ivory px-2 py-1",
					value: course.name,
					onChange: (e) => update({ name: e.target.value })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "pr-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "w-14 rounded-lg border border-line bg-ivory px-2 py-1",
					type: "number",
					min: 0,
					value: course.credits,
					onChange: (e) => update({ credits: Number(e.target.value) })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "pr-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "w-24 rounded-lg border border-line bg-ivory px-2 py-1",
					value: course.semester,
					onChange: (e) => update({ semester: e.target.value })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "pr-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: "rounded-lg border border-line bg-ivory px-2 py-1",
					value: course.grade,
					onChange: (e) => update({ grade: e.target.value }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "—"
					}), GRADES.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: g }, g))]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "pr-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "w-36 rounded-lg border border-line bg-ivory px-2 py-1",
					value: course.lectures,
					placeholder: "When",
					onChange: (e) => update({ lectures: e.target.value })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "checkbox",
				checked: course.backlog,
				onChange: (e) => update({ backlog: e.target.checked })
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "text-xs text-muted",
				onClick: () => patch({ courses: courses.filter((c) => c.id !== course.id) }),
				children: "Remove"
			}) })
		]
	});
}
function AddCourse() {
	const courses = usePlanner((s) => s.courses);
	const patch = usePlanner((s) => s.patch);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "mt-3 flex flex-wrap gap-2",
		onSubmit: (e) => {
			e.preventDefault();
			const fd = new FormData(e.currentTarget);
			const name = String(fd.get("name") || "").trim();
			if (!name) return;
			const row = {
				id: newId(),
				name,
				credits: Number(fd.get("credits") || 3),
				semester: String(fd.get("semester") || "Current"),
				grade: "",
				lectures: "",
				backlog: false
			};
			patch({ courses: [...courses, row] });
			e.currentTarget.reset();
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				name: "name",
				required: true,
				placeholder: "Course name",
				className: "min-h-11 flex-1 rounded-xl border border-line bg-ivory px-3 text-sm"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				name: "credits",
				type: "number",
				defaultValue: 3,
				className: "min-h-11 w-20 rounded-xl border border-line bg-ivory px-3 text-sm"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				name: "semester",
				placeholder: "Semester",
				className: "min-h-11 w-32 rounded-xl border border-line bg-ivory px-3 text-sm"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "min-h-11 rounded-xl bg-night px-4 text-sm font-semibold text-ivory",
				children: "Add course"
			})
		]
	});
}
function TaskRow({ task }) {
	const tasks = usePlanner((s) => s.tasks);
	const patch = usePlanner((s) => s.patch);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: `flex flex-wrap items-center gap-2 rounded-xl px-2 py-2 ${task.done ? "opacity-60" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "checkbox",
				checked: task.done,
				onChange: () => patch({ tasks: tasks.map((t) => t.id === task.id ? {
					...t,
					done: !t.done
				} : t) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs uppercase tracking-wide text-rose-deep",
				children: task.kind
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm",
				children: task.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm text-muted",
				children: task.course
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm text-muted",
				children: task.due
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "ml-auto text-xs text-muted",
				onClick: () => patch({ tasks: tasks.filter((t) => t.id !== task.id) }),
				children: "Remove"
			})
		]
	});
}
function AddTask() {
	const tasks = usePlanner((s) => s.tasks);
	const patch = usePlanner((s) => s.patch);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "grid gap-2 sm:grid-cols-5",
		onSubmit: (e) => {
			e.preventDefault();
			const fd = new FormData(e.currentTarget);
			const title = String(fd.get("title") || "").trim();
			if (!title) return;
			const row = {
				id: newId(),
				title,
				course: String(fd.get("course") || ""),
				due: String(fd.get("due") || todayKey()),
				kind: String(fd.get("kind") || "assignment"),
				done: false
			};
			patch({ tasks: [...tasks, row] });
			e.currentTarget.reset();
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				name: "title",
				placeholder: "Title",
				className: "min-h-11 rounded-xl border border-line bg-ivory px-3 text-sm sm:col-span-2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				name: "course",
				placeholder: "Course",
				className: "min-h-11 rounded-xl border border-line bg-ivory px-3 text-sm"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				name: "due",
				type: "date",
				className: "min-h-11 rounded-xl border border-line bg-ivory px-3 text-sm"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					name: "kind",
					className: "min-h-11 flex-1 rounded-xl border border-line bg-ivory px-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "assignment",
							children: "Assignment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "exam",
							children: "Exam"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "quiz",
							children: "Quiz"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "project",
							children: "Project"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "min-h-11 rounded-xl bg-night px-3 text-sm font-semibold text-ivory",
					children: "Add"
				})]
			})
		]
	});
}
function StudyRow({ block }) {
	const study = usePlanner((s) => s.study);
	const patch = usePlanner((s) => s.patch);
	const update = (partial) => patch({ study: study.map((b) => b.id === block.id ? {
		...b,
		...partial
	} : b) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "grid gap-2 rounded-xl bg-ivory p-2 sm:grid-cols-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				className: "min-h-11 rounded-lg border border-line bg-paper px-2 text-sm",
				value: block.day,
				onChange: (e) => update({ day: e.target.value }),
				children: WEEKDAYS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: d }, d))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "min-h-11 rounded-lg border border-line bg-paper px-2 text-sm",
				value: block.time,
				onChange: (e) => update({ time: e.target.value })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "min-h-11 rounded-lg border border-line bg-paper px-2 text-sm sm:col-span-1",
				value: block.focus,
				onChange: (e) => update({ focus: e.target.value })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "text-sm text-muted",
				onClick: () => patch({ study: study.filter((b) => b.id !== block.id) }),
				children: "Remove"
			})
		]
	});
}
function AddStudy() {
	const study = usePlanner((s) => s.study);
	const patch = usePlanner((s) => s.patch);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "mt-2 flex flex-wrap gap-2",
		onSubmit: (e) => {
			e.preventDefault();
			const fd = new FormData(e.currentTarget);
			const focus = String(fd.get("focus") || "").trim();
			if (!focus) return;
			patch({ study: [...study, {
				id: newId(),
				day: String(fd.get("day")),
				time: String(fd.get("time") || ""),
				focus
			}] });
			e.currentTarget.reset();
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				name: "day",
				className: "min-h-11 rounded-xl border border-line bg-ivory px-2 text-sm",
				children: WEEKDAYS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: d }, d))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				name: "time",
				placeholder: "Time",
				className: "min-h-11 w-28 rounded-xl border border-line bg-ivory px-3 text-sm"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				name: "focus",
				placeholder: "What you will study",
				className: "min-h-11 flex-1 rounded-xl border border-line bg-ivory px-3 text-sm"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "min-h-11 rounded-xl bg-night px-4 text-sm font-semibold text-ivory",
				children: "Add"
			})
		]
	});
}
function CalendarViews({ mode }) {
	const events = usePlanner((s) => s.events);
	const weeklyGoals = usePlanner((s) => s.weeklyGoals);
	const monthlyGoals = usePlanner((s) => s.monthlyGoals);
	const importantDates = usePlanner((s) => s.importantDates);
	const monthReview = usePlanner((s) => s.monthReview);
	const patch = usePlanner((s) => s.patch);
	const anchor = /* @__PURE__ */ new Date();
	const days = [];
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				kicker: mode,
				title: mode === "week" ? "This week" : anchor.toLocaleDateString("en-GB", {
					month: "long",
					year: "numeric"
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `grid gap-2 ${mode === "week" ? "sm:grid-cols-7" : "grid-cols-2 sm:grid-cols-7"}`,
					children: days.map((d) => {
						const key = todayKey(d);
						const list = events.filter((e) => e.date === key);
						const today = key === todayKey();
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `rounded-2xl border p-2 ${today ? "border-rose bg-blush" : "border-line bg-paper"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: d.toLocaleDateString("en-GB", { weekday: "short" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg",
									children: d.getDate()
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-1 space-y-1",
									children: list.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "text-xs leading-snug",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-rose-deep",
												children: e.kind
											}),
											" ",
											e.time,
											" ",
											e.title
										]
									}, e.id))
								})
							]
						}, key);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
				title: "Add to the calendar",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-2 sm:grid-cols-5",
					onSubmit: (e) => {
						e.preventDefault();
						const fd = new FormData(e.currentTarget);
						const title = String(fd.get("title") || "").trim();
						const date = String(fd.get("date") || "");
						if (!title || !date) return;
						patch({ events: [...events, {
							id: newId(),
							date,
							title,
							kind: String(fd.get("kind") || "personal"),
							time: String(fd.get("time") || "")
						}] });
						e.currentTarget.reset();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "date",
							type: "date",
							required: true,
							className: "min-h-11 rounded-xl border border-line bg-ivory px-3 text-sm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "time",
							placeholder: "Time",
							className: "min-h-11 rounded-xl border border-line bg-ivory px-3 text-sm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "title",
							placeholder: "What",
							className: "min-h-11 rounded-xl border border-line bg-ivory px-3 text-sm sm:col-span-2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								name: "kind",
								className: "min-h-11 flex-1 rounded-xl border border-line bg-ivory px-2 text-sm",
								children: [
									"study",
									"work",
									"workout",
									"salah",
									"quran",
									"personal",
									"deadline",
									"uni"
								].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: k }, k))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "rounded-xl bg-night px-3 text-sm font-semibold text-ivory",
								children: "Add"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-1",
					children: events.slice().sort((a, b) => a.date.localeCompare(b.date)).slice(0, 12).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							e.date,
							" · ",
							e.kind,
							" · ",
							e.title
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "text-muted",
							onClick: () => patch({ events: events.filter((x) => x.id !== e.id) }),
							children: "Remove"
						})]
					}, e.id))
				})]
			}),
			mode === "week" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Weekly goals",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
					items: weeklyGoals,
					placeholder: "A goal for this week",
					onChange: (weeklyGoals) => patch({ weeklyGoals })
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
					title: "Monthly goals",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
						items: monthlyGoals,
						placeholder: "A goal for this month",
						onChange: (monthlyGoals) => patch({ monthlyGoals })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
					title: "Important dates",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
						items: importantDates,
						placeholder: "Date and why it matters",
						onChange: (importantDates) => patch({ importantDates })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
					title: "Reflection",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "What stayed with you",
						textarea: true,
						value: monthReview,
						onChange: (monthReview) => patch({ monthReview })
					})
				})
			] })
		]
	});
}
var STATUSES = [
	"later",
	"now",
	"done"
];
function AiView() {
	const s = usePlanner();
	const done = s.roadmap.filter((r) => r.status === "done").length;
	const pct = s.roadmap.length ? Math.round(done / s.roadmap.length * 100) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
				kicker: "toward an ai engineer",
				title: "Roadmap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-3 text-sm text-muted",
						children: [
							"From where you are now: Python, mathematics, statistics, algorithms, machine learning, deep learning, NLP, SQL, Git, APIs, and something you can show. ",
							done,
							" of ",
							s.roadmap.length,
							" marked done (",
							pct,
							"%)."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2",
						children: s.roadmap.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-2xl border border-line p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-rose-deep",
										children: step.area
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "min-w-40 flex-1 rounded-lg border border-line bg-ivory px-2 py-1 text-sm",
										value: step.title,
										onChange: (e) => updateStep(step.id, { title: e.target.value })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										className: "rounded-lg border border-line bg-paper px-2 py-1 text-sm",
										value: step.status,
										onChange: (e) => updateStep(step.id, { status: e.target.value }),
										children: STATUSES.map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: st,
											children: st
										}, st))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "text-xs text-muted",
										onClick: () => s.patch({ roadmap: s.roadmap.filter((r) => r.id !== step.id) }),
										children: "Remove"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "mt-2 w-full rounded-lg border border-line bg-ivory px-2 py-1 text-sm",
								placeholder: "Notes",
								value: step.notes,
								onChange: (e) => updateStep(step.id, { notes: e.target.value })
							})]
						}, step.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-3 flex flex-wrap gap-2",
						onSubmit: (e) => {
							e.preventDefault();
							const fd = new FormData(e.currentTarget);
							const title = String(fd.get("title") || "").trim();
							if (!title) return;
							s.patch({ roadmap: [...s.roadmap, {
								id: newId(),
								area: String(fd.get("area") || "Custom"),
								title,
								status: "later",
								notes: ""
							}] });
							e.currentTarget.reset();
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "area",
								placeholder: "Area",
								className: "min-h-11 w-32 rounded-xl border border-line bg-ivory px-3 text-sm"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "title",
								placeholder: "Next skill or milestone",
								className: "min-h-11 flex-1 rounded-xl border border-line bg-ivory px-3 text-sm"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "min-h-11 rounded-xl bg-night px-4 text-sm font-semibold text-ivory",
								children: "Add"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Courses to compare",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Xperience AI and anything else you are considering",
					textarea: true,
					value: s.courseCompare,
					onChange: (courseCompare) => s.patch({ courseCompare })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
					title: "Projects",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
						items: s.projects,
						placeholder: "Project and where it stands",
						onChange: (projects) => s.patch({ projects })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
					title: "Certifications",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
						items: s.certs,
						placeholder: "Certificate or course finished",
						onChange: (certs) => s.patch({ certs })
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Portfolio and GitHub",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "GitHub",
						value: s.github,
						onChange: (github) => s.patch({ github }),
						placeholder: "github.com/you"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Portfolio notes",
						textarea: true,
						value: s.portfolio,
						onChange: (portfolio) => s.patch({ portfolio })
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Internships",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Apps, {
					rows: s.internships,
					onChange: (internships) => s.patch({ internships })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Job applications",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Apps, {
					rows: s.jobs,
					onChange: (jobs) => s.patch({ jobs })
				})
			})
		]
	});
}
function updateStep(id, partial) {
	const { roadmap, patch } = usePlanner.getState();
	patch({ roadmap: roadmap.map((r) => r.id === id ? {
		...r,
		...partial
	} : r) });
}
function Apps({ rows, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-2",
		children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "grid gap-2 rounded-xl bg-ivory p-2 sm:grid-cols-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "rounded-lg border border-line bg-paper px-2 py-1 text-sm",
					value: r.place,
					onChange: (e) => onChange(rows.map((x) => x.id === r.id ? {
						...x,
						place: e.target.value
					} : x))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "rounded-lg border border-line bg-paper px-2 py-1 text-sm",
					value: r.role,
					onChange: (e) => onChange(rows.map((x) => x.id === r.id ? {
						...x,
						role: e.target.value
					} : x))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "rounded-lg border border-line bg-paper px-2 py-1 text-sm",
					value: r.status,
					onChange: (e) => onChange(rows.map((x) => x.id === r.id ? {
						...x,
						status: e.target.value
					} : x))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "date",
					className: "rounded-lg border border-line bg-paper px-2 py-1 text-sm",
					value: r.date,
					onChange: (e) => onChange(rows.map((x) => x.id === r.id ? {
						...x,
						date: e.target.value
					} : x))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-sm text-muted",
					onClick: () => onChange(rows.filter((x) => x.id !== r.id)),
					children: "Remove"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "rounded-lg border border-line bg-paper px-2 py-1 text-sm sm:col-span-5",
					placeholder: "Notes",
					value: r.notes,
					onChange: (e) => onChange(rows.map((x) => x.id === r.id ? {
						...x,
						notes: e.target.value
					} : x))
				})
			]
		}, r.id))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "mt-3 min-h-11 rounded-xl bg-night px-4 text-sm font-semibold text-ivory",
		onClick: () => onChange([...rows, {
			id: newId(),
			place: "",
			role: "",
			status: "Draft",
			date: "",
			notes: ""
		}]),
		children: "Add row"
	})] });
}
function TeachView() {
	const s = usePlanner();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				kicker: "a longer path",
				title: "Teaching and academic future",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Tutoring now can become teaching later. Keep it light beside the degree."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
				title: "Lesson notes and tutoring",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "How you like to explain things",
					textarea: true,
					value: s.teachingNotes,
					onChange: (teachingNotes) => s.patch({ teachingNotes })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
						items: s.tutoring,
						placeholder: "Student, subject, or hour logged",
						onChange: (tutoring) => s.patch({ tutoring })
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Research interests",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "What you might want to study more deeply",
					textarea: true,
					value: s.research,
					onChange: (research) => s.patch({ research })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Postgraduate possibilities",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Programs, countries, timing after 2028",
					textarea: true,
					value: s.postgrad,
					onChange: (postgrad) => s.patch({ postgrad })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Academic milestones",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
					items: s.academicMiles,
					placeholder: "A step toward teaching or research",
					onChange: (academicMiles) => s.patch({ academicMiles })
				})
			})
		]
	});
}
function WorkView() {
	const s = usePlanner();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				kicker: "income while studying",
				title: "Sutherland and other work",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Where things stand",
					textarea: true,
					value: s.workStatus,
					onChange: (workStatus) => s.patch({ workStatus })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
						title: "Shifts",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Pattern",
							textarea: true,
							value: s.shifts,
							onChange: (shifts) => s.patch({ shifts })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
						title: "Pay",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Salary or hourly notes",
							textarea: true,
							value: s.salary,
							onChange: (salary) => s.patch({ salary })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
						title: "Attendance",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Days kept, days needed off",
							textarea: true,
							value: s.attendance,
							onChange: (attendance) => s.patch({ attendance })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
						title: "Performance and KPIs",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "What they measure",
							textarea: true,
							value: s.kpis,
							onChange: (kpis) => s.patch({ kpis })
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Does the schedule fit university?",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Lectures, exams, recovery",
					textarea: true,
					value: s.workFit,
					onChange: (workFit) => s.patch({ workFit })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Work goals",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
					items: s.workGoals,
					placeholder: "A work goal that does not swallow study",
					onChange: (workGoals) => s.patch({ workGoals })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Applications and interviews",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Apps, {
					rows: s.jobs,
					onChange: (jobs) => s.patch({ jobs })
				})
			})
		]
	});
}
function MoneyView() {
	const s = usePlanner();
	const month = todayKey().slice(0, 7);
	const monthRows = s.ledger.filter((r) => r.date.startsWith(month));
	const spent = monthRows.filter((r) => r.kind === "expense" && r.currency === "EGP").reduce((n, r) => n + r.amount, 0);
	const earned = monthRows.filter((r) => r.kind === "income" && r.currency === "EGP").reduce((n, r) => n + r.amount, 0);
	const fund = (name) => s.ledger.filter((r) => r.fund === name && r.currency === "EGP").reduce((n, r) => n + (r.kind === "income" ? r.amount : -r.amount), 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
				kicker: "protect what you save",
				title: "Balances",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "EGP on hand / saved",
							type: "number",
							value: s.egp,
							onChange: (v) => s.patch({ egp: Number(v) || 0 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "USD",
							type: "number",
							value: s.usd,
							onChange: (v) => s.patch({ usd: Number(v) || 0 })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
								label: "EGP in this month",
								value: `${earned - spent}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
								label: "Emergency ledger",
								value: String(fund("emergency"))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
								label: "Moving-out ledger",
								value: String(fund("moving"))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
								label: "Travel ledger",
								value: String(fund("travel"))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "Balances are what you type. The ledger is a running note of movements, not a bank."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
				title: "Add a movement",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-2 sm:grid-cols-6",
					onSubmit: (e) => {
						e.preventDefault();
						const fd = new FormData(e.currentTarget);
						const label = String(fd.get("label") || "").trim();
						const amount = Number(fd.get("amount") || 0);
						if (!label || !amount) return;
						const row = {
							id: newId(),
							kind: String(fd.get("kind")),
							amount,
							currency: String(fd.get("currency")),
							label,
							date: String(fd.get("date") || todayKey()),
							fund: String(fd.get("fund"))
						};
						s.patch({ ledger: [row, ...s.ledger] });
						e.currentTarget.reset();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							name: "kind",
							className: "min-h-11 rounded-xl border border-line bg-ivory px-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "income",
								children: "Income"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "expense",
								children: "Expense"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "amount",
							type: "number",
							step: "0.01",
							placeholder: "Amount",
							className: "min-h-11 rounded-xl border border-line bg-ivory px-3 text-sm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							name: "currency",
							className: "min-h-11 rounded-xl border border-line bg-ivory px-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "EGP" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "USD" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							name: "fund",
							className: "min-h-11 rounded-xl border border-line bg-ivory px-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "daily",
									children: "Daily"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "emergency",
									children: "Emergency"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "moving",
									children: "Moving"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "travel",
									children: "Travel"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "date",
							type: "date",
							defaultValue: todayKey(),
							className: "min-h-11 rounded-xl border border-line bg-ivory px-2 text-sm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "label",
							placeholder: "What",
							className: "min-h-11 rounded-xl border border-line bg-ivory px-3 text-sm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "min-h-11 rounded-xl bg-night px-4 text-sm font-semibold text-ivory sm:col-span-6 sm:w-fit",
							children: "Save movement"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-1",
					children: s.ledger.slice(0, 8).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							r.date,
							" · ",
							r.kind,
							" · ",
							r.fund,
							" · ",
							r.label
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							r.amount,
							" ",
							r.currency,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "text-muted",
								onClick: () => s.patch({ ledger: s.ledger.filter((x) => x.id !== r.id) }),
								children: "Remove"
							})
						] })]
					}, r.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Monthly budget notes",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "What is fixed, what can wait",
					textarea: true,
					value: s.budgetNote,
					onChange: (budgetNote) => s.patch({ budgetNote })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Financial milestones",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
					items: s.moneyGoals,
					placeholder: "A number or a habit",
					onChange: (moneyGoals) => s.patch({ moneyGoals })
				})
			})
		]
	});
}
function Mini({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-blush px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-lg text-night",
			children: value
		})]
	});
}
function IndependenceView() {
	const s = usePlanner();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				kicker: "after graduation",
				title: "A place of your own",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Moving out waits until income and savings can carry it. The list is preparation, not pressure."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Estimated living costs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Monthly picture",
					textarea: true,
					value: s.livingCosts,
					onChange: (livingCosts) => s.patch({ livingCosts })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Income you would need",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Before you sign a lease",
					textarea: true,
					value: s.incomeNeed,
					onChange: (incomeNeed) => s.patch({ incomeNeed })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Housing research",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Areas, rents, transport",
					textarea: true,
					value: s.housing,
					onChange: (housing) => s.patch({ housing })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Documents",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "What to keep ready",
					textarea: true,
					value: s.documents,
					onChange: (documents) => s.patch({ documents })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Moving-out checklist",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
					items: s.moving,
					placeholder: "A preparation step",
					onChange: (moving) => s.patch({ moving })
				})
			})
		]
	});
}
function FutureView() {
	const s = usePlanner();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				kicker: "the life you are building",
				title: "Future life",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "A picture in words",
					textarea: true,
					value: s.lifestyle,
					onChange: (lifestyle) => s.patch({ lifestyle })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Places to visit",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
					items: s.places,
					placeholder: "A city or landscape",
					onChange: (places) => s.patch({ places })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Where you might live",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
					items: s.liveIn,
					placeholder: "A city or country to research later",
					onChange: (liveIn) => s.patch({ liveIn })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Experiences",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
					items: s.experiences,
					placeholder: "Something you want to have done",
					onChange: (experiences) => s.patch({ experiences })
				})
			})
		]
	});
}
function FaithView() {
	const key = todayKey();
	const salah = usePlanner((s) => s.salah);
	const quranPages = usePlanner((s) => s.quranPages);
	const quranWhere = usePlanner((s) => s.quranWhere);
	const quranNote = usePlanner((s) => s.quranNote);
	const patch = usePlanner((s) => s.patch);
	const day = salah[key] ?? {};
	const toggle = (name) => {
		patch({ salah: {
			...salah,
			[key]: {
				...day,
				[name]: !day[name]
			}
		} });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
			kicker: key,
			title: "Salah",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2 sm:grid-cols-5",
				children: SALAH.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => toggle(name),
					className: `min-h-16 rounded-2xl border text-sm font-semibold ${day[name] ? "border-lilac bg-lavender text-night" : "border-line bg-paper text-muted"}`,
					children: [name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-xs font-normal",
						children: day[name] ? "Kept" : "Open"
					})]
				}, name))
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			title: "Quran",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Pages or portion today",
					type: "number",
					value: quranPages[key] ?? 0,
					onChange: (v) => patch({ quranPages: {
						...quranPages,
						[key]: Number(v) || 0
					} })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Where you are",
					value: quranWhere,
					onChange: (quranWhere) => patch({ quranWhere })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "A line that stayed",
					textarea: true,
					value: quranNote,
					onChange: (quranNote) => patch({ quranNote })
				})
			})]
		})]
	});
}
function CareView() {
	const key = todayKey();
	const s = usePlanner();
	const skin = s.skin[key] ?? {
		night: "",
		cleanser: false,
		shave: false,
		moisturizer: false,
		sunscreen: false,
		extra: ""
	};
	const hint = suggestSkin(s.skin, key);
	const plan = workoutPlan(key);
	const sets = setsFor(s.workoutStart, key);
	const log = s.workoutLog[key] ?? {
		done: false,
		sets,
		note: ""
	};
	const sleep = s.sleep[key] ?? {
		hours: 0,
		note: ""
	};
	const saveSkin = (partial) => s.patch({ skin: {
		...s.skin,
		[key]: {
			...skin,
			...partial
		}
	} });
	const nights = lastNights(s.skin, 14);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
				kicker: "gentle on purpose",
				title: "Tonight's skin",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-3 text-sm text-muted",
						children: [
							"Suggested: ",
							hint === "acretin" ? "Acretin 0.05% if skin is calm" : "a recovery night",
							". Do not stack active nights. Skipping is allowed."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 flex flex-wrap gap-2",
						children: [
							["acretin", "Acretin 0.05%"],
							["recovery", "Recovery"],
							["off", "Skip"]
						].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
							on: skin.night === id,
							onClick: () => saveSkin({ night: id }),
							children: label
						}, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2",
						children: [
							["cleanser", "Dermaelle Oil Control Cleanser"],
							["moisturizer", "Moisturizer"],
							["sunscreen", "Sunscreen"],
							["shave", "Shaving day"]
						].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => saveSkin({ [id]: !skin[id] }),
							className: `min-h-12 rounded-2xl border px-3 text-left text-sm ${skin[id] ? "border-rose bg-blush" : "border-line bg-paper"}`,
							children: label
						}, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Anything else tonight",
							value: skin.extra,
							onChange: (extra) => saveSkin({ extra })
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
				title: "Two-week skin calendar",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-7 gap-1",
					children: nights.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-ivory p-1 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-muted",
							children: n.date.slice(8)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xs text-night",
							children: n.night === "acretin" ? "A" : n.night === "recovery" ? "R" : n.night === "off" ? "—" : "·"
						})]
					}, n.date))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-muted",
					children: "A is Acretin, R is recovery. The pattern should breathe."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Products you add later",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
					items: s.extraProducts,
					placeholder: "A product name",
					onChange: (extraProducts) => s.patch({ extraProducts })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Hair",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Wash days, products, notes",
					textarea: true,
					value: s.hair,
					onChange: (hair) => s.patch({ hair })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Sleep and energy",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Hours slept",
						type: "number",
						value: sleep.hours,
						onChange: (v) => s.patch({ sleep: {
							...s.sleep,
							[key]: {
								...sleep,
								hours: Number(v) || 0
							}
						} })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "How the night felt",
						value: sleep.note,
						onChange: (note) => s.patch({ sleep: {
							...s.sleep,
							[key]: {
								...sleep,
								note
							}
						} })
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Wellness habits",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
					items: s.wellness,
					placeholder: "Water, a walk, a quiet hour",
					onChange: (wellness) => s.patch({ wellness })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
				title: "Workout",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-2 text-sm text-ink",
						children: [
							"Plan began ",
							s.workoutStart,
							". This phase uses ",
							sets,
							" set",
							sets > 1 ? "s" : "",
							". Move to two sets only after two comfortable weeks — change the start date if you need to stay at one."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Routine start date",
						type: "date",
						value: s.workoutStart,
						onChange: (workoutStart) => s.patch({ workoutStart })
					}),
					plan ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg",
								children: plan.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: [
									"About ",
									plan.minutes,
									" minutes. Rest between moves. Stop if something hurts."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-2 list-disc pl-5 text-sm",
								children: plan.moves.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: m }, m))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex flex-wrap gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
									on: log.done,
									onClick: () => s.patch({ workoutLog: {
										...s.workoutLog,
										[key]: {
											...log,
											done: !log.done,
											sets
										}
									} }),
									children: log.done ? "Session kept" : "Mark session kept"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "How it felt",
									value: log.note,
									onChange: (note) => s.patch({ workoutLog: {
										...s.workoutLog,
										[key]: {
											...log,
											sets,
											note
										}
									} })
								})
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-ink",
						children: "Today is a rest day. Monday and Saturday are glutes, core, and calves. Wednesday is arms and core. The other days are for recovery, and that still counts."
					})
				]
			})
		]
	});
}
function lastNights(skin, n) {
	const out = [];
	for (let i = n - 1; i >= 0; i--) {
		const d = /* @__PURE__ */ new Date();
		d.setDate(d.getDate() - i);
		const date = todayKey(d);
		out.push({
			date,
			night: skin[date]?.night || ""
		});
	}
	return out;
}
function HabitsView() {
	const s = usePlanner();
	const key = todayKey();
	const done = new Set(s.habitLog[key] ?? []);
	const [name, setName] = (0, import_react.useState)("");
	const [edit, setEdit] = (0, import_react.useState)(null);
	const [draft, setDraft] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			kicker: "small and repeatable",
			title: "Habits",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2",
					children: s.habits.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									const next = new Set(done);
									if (next.has(h.id)) next.delete(h.id);
									else next.add(h.id);
									s.patch({ habitLog: {
										...s.habitLog,
										[key]: [...next]
									} });
								},
								className: `grid size-7 place-items-center rounded-lg border-2 ${done.has(h.id) ? "border-lilac bg-lilac" : "border-rose"}`,
								children: done.has(h.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-sm bg-paper" }) : null
							}),
							edit === h.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "flex-1 rounded-lg border border-line bg-ivory px-2 py-1 text-sm",
								value: draft,
								onChange: (e) => setDraft(e.target.value),
								onBlur: () => {
									if (draft.trim()) s.patch({ habits: s.habits.map((x) => x.id === h.id ? {
										...x,
										name: draft.trim()
									} : x) });
									setEdit(null);
								}
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "flex-1 text-left text-sm",
								onClick: () => {
									setEdit(h.id);
									setDraft(h.name);
								},
								children: h.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "text-xs text-muted",
								onClick: () => s.patch({ habits: s.habits.filter((x) => x.id !== h.id) }),
								children: "Remove"
							})
						]
					}, h.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-3 flex gap-2",
					onSubmit: (e) => {
						e.preventDefault();
						if (!name.trim()) return;
						s.patch({ habits: [...s.habits, {
							id: newId(),
							name: name.trim()
						}] });
						setName("");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: name,
						onChange: (e) => setName(e.target.value),
						placeholder: "New habit",
						className: "min-h-11 flex-1 rounded-xl border border-line bg-ivory px-3 text-sm"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "min-h-11 rounded-xl bg-night px-4 text-sm font-semibold text-ivory",
						children: "Add"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-muted",
					children: "Tap a name to rename it."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Morning",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
					items: s.morning,
					placeholder: "A morning step",
					onChange: (morning) => s.patch({ morning })
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Evening",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
					items: s.evening,
					placeholder: "An evening step",
					onChange: (evening) => s.patch({ evening })
				})
			})]
		})]
	});
}
function ResetView() {
	const s = usePlanner();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			title: "Weekly reset",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
				items: s.resetSteps,
				placeholder: "A reset step",
				onChange: (resetSteps) => s.patch({ resetSteps })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Wins",
					textarea: true,
					value: s.weekWins,
					onChange: (weekWins) => s.patch({ weekWins })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Focus next",
					textarea: true,
					value: s.weekFocus,
					onChange: (weekFocus) => s.patch({ weekFocus })
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
			title: "Monthly review",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "What to carry, what to drop",
				textarea: true,
				value: s.monthReview,
				onChange: (monthReview) => s.patch({ monthReview })
			})
		})]
	});
}
function NotesView() {
	const s = usePlanner();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Brain dump",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Unsorted thoughts",
					textarea: true,
					value: s.brain,
					onChange: (brain) => s.patch({ brain })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Ideas worth keeping",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
					items: s.ideas,
					placeholder: "An idea",
					onChange: (ideas) => s.patch({ ideas })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Reading",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
					items: s.reading,
					placeholder: "A book or essay",
					onChange: (reading) => s.patch({ reading })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Confidence and self-improvement",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "What is getting steadier",
					textarea: true,
					value: s.confidence,
					onChange: (confidence) => s.patch({ confidence })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Skills outside the degree",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
					items: s.skills,
					placeholder: "A skill",
					onChange: (skills) => s.patch({ skills })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
				title: "Personal projects",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckList, {
					items: s.personalProjects,
					placeholder: "Something you are making",
					onChange: (personalProjects) => s.patch({ personalProjects })
				})
			})
		]
	});
}
function ProgressView() {
	const s = usePlanner();
	const key = todayKey();
	const prayers = SALAH.filter((n) => s.salah[key]?.[n]).length;
	const road = s.roadmap.filter((r) => r.status === "done").length;
	const gCourses = s.courses.filter((c) => c.grade);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
			kicker: "quietly",
			title: "What is already moving",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "space-y-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Graded courses on record: ", gCourses.length] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Roadmap steps marked done: ",
						road,
						" / ",
						s.roadmap.length
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Salah kept today: ",
						prayers,
						" / 5"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Habits kept today: ",
						(s.habitLog[key] ?? []).length,
						" / ",
						s.habits.length
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Workouts logged: ", Object.values(s.workoutLog).filter((w) => w.done).length] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Moving checklist: ",
						s.moving.filter((m) => m.done).length,
						" / ",
						s.moving.length
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "Consistency is the repeated ordinary day, not a perfect one."
			})]
		})
	});
}
var NAV = [
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
	["progress", "Progress"]
];
function PlannerApp() {
	const [tab, setTab] = (0, import_react.useState)("today");
	const hydrated = usePlanner((s) => s.hydrated);
	const [toast, setToast] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => usePlanner.setState({ hydrated: true }), 400);
		return () => clearTimeout(t);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!toast) return;
		const t = setTimeout(() => setToast(""), 1800);
		return () => clearTimeout(t);
	}, [toast]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto min-h-screen max-w-5xl px-3 pb-24 pt-4 sm:px-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "card mb-4 flex flex-wrap items-center justify-between gap-3 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "a little journal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl font-medium text-night",
						children: "My Little Life"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Graduate in 2028. Learn the work. Keep your money. Leave room to live."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-full border border-line bg-paper px-4 text-sm",
						onClick: () => download(),
						children: "Backup"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "min-h-11 cursor-pointer rounded-full border border-line bg-blush px-4 py-2.5 text-sm",
						children: ["Restore", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "file",
							accept: "application/json",
							className: "hidden",
							onChange: (e) => {
								const file = e.target.files?.[0];
								if (!file) return;
								const reader = new FileReader();
								reader.onload = () => {
									try {
										const data = JSON.parse(String(reader.result));
										if (!data || !data.courses || !data.roadmap) throw new Error("bad");
										usePlanner.getState().replaceAll(data);
										setToast("Restored");
									} catch {
										setToast("That file could not be read");
									}
								};
								reader.readAsText(file);
								e.target.value = "";
							}
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mb-4 flex gap-2 overflow-x-auto pb-1",
				children: NAV.map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTab(id),
					className: `shrink-0 rounded-full px-3 py-2 text-sm ${tab === id ? "bg-night text-ivory" : "bg-paper text-ink border border-line"}`,
					children: label
				}, id))
			}),
			!hydrated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Opening your pages…"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Body, { tab }),
			toast ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "fixed bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-night px-4 py-2 text-sm text-ivory",
				children: toast
			}) : null
		]
	});
}
function Body({ tab }) {
	if (tab === "today") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TodayView, {});
	if (tab === "week") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarViews, { mode: "week" });
	if (tab === "month") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarViews, { mode: "month" });
	if (tab === "uni") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UniversityView, {});
	if (tab === "ai") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiView, {});
	if (tab === "teach") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeachView, {});
	if (tab === "work") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkView, {});
	if (tab === "money") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoneyView, {});
	if (tab === "move") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndependenceView, {});
	if (tab === "future") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FutureView, {});
	if (tab === "faith") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaithView, {});
	if (tab === "care") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareView, {});
	if (tab === "habits") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HabitsView, {});
	if (tab === "reset") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResetView, {});
	if (tab === "notes") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesView, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressView, {});
}
function download() {
	const { hydrated: _h, patch: _p, replaceAll: _r, reset: _x, ...data } = usePlanner.getState();
	const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = "my-little-life-backup.json";
	a.click();
	URL.revokeObjectURL(url);
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlannerApp, {});
}
//#endregion
export { Home as component };
