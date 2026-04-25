import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { createClient } from "@supabase/supabase-js";

console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

// 기존 하드코딩 데이터 import
import { projects } from "./../app/api/projects/data"; // 경로 맞게 수정

async function seedProjects() {
  const rows = projects.map((item) => ({
    // id는 자동 생성이면 넣지 않음
    type: item.type,
    title: item.title,
    date: item.date,
    count: item.count,

    tool: item.tool,

    sub_desc: item.subDesc,
    main_desc: item.mainDesc,

    role: item.role,

    link: item.link ?? [],

    cont_list: item.contList,
    strength: item.strength,

    image: item.image,
    image_list: item.imageList,
    image_alt: item.imageAlt,
  }));

  const { data, error } = await supabase.from("project").insert(rows).select();

  if (error) {
    console.error("❌ Insert 실패");
    console.error(error);
    return;
  }

  console.log("✅ Insert 성공");
  console.log(data);
}

seedProjects();
