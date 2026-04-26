import { NextResponse } from "next/server";
import { createServerSupabase } from "@/lib/supabase/server";
import { increaseProjectView } from "@/lib/queries/project";

export async function POST(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "id 없음" }, { status: 400 });
    }

    const supabase = createServerSupabase();

    const { error } = await increaseProjectView(supabase, Number(id));

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "서버 에러" }, { status: 500 });
  }
}
