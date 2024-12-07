import { NextResponse } from "next/server";
import { projects } from "@/lib/db";

export async function GET() {
  return NextResponse.json(projects);
}
