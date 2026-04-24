import { NextResponse } from 'next/server'
import { projects } from './../data'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
 const { id } = await params; // 여기서 await를 추가합니다.

  const project = projects.find(
    (item) => item.id === Number(id)
  )

  if (!project) {
    return NextResponse.json(
      { message: 'Not found' },
      { status: 404 }
    )
  }

  return NextResponse.json(project)
}