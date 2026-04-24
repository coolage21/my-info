import { NextRequest, NextResponse } from "next/server";
import { projects } from './../data'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> } 
) {

  const { id } = await params;


  const project = projects.find((item) => item.id === Number(id));

  if (!project) {
    return NextResponse.json({ message: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}