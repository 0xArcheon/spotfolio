import { NextResponse } from "next/server";
import { projects } from "@/lib/db";

export async function GET(request, params) {
  const project = projects.find(
    (item) => item.projectId == params.params.projectId
  );
  if (!project) {
    return NextResponse.json(
      { message: "Project Details Not Found" },
      { status: 404 }
    );
  }
  return NextResponse.json(project);
}
