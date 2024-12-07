import { NextResponse } from "next/server";
import { projects } from "@/lib/db";

export async function GET(request, params) {
  const project = projects.filter(
    (item) => item.projectId == params.params.projectId
  );
  if (project.length == 0) {
    return NextResponse.json({ message: "Project Details Not Found" });
  }
  return NextResponse.json(project);
}
