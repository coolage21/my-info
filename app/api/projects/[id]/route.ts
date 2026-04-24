import { NextResponse } from 'next/server'
import { projects } from '../route'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params; // id가 promise라서 바로 접근이 안되어서 await 추가

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