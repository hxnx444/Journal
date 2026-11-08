import { createFileRoute } from "@tanstack/react-router";
import { PlannerApp } from "@/planner/App";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <PlannerApp />;
}
