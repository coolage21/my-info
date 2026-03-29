export type Category = "project" | "sideProject";

export interface User {
  type: Category;
  id: number;
  title: string;
  date: string;
  count: number;
  tool: string[];
  subDesc: string; // ✅ "나 이거 쓸 거야!"라고 등록
  mainDesc: string;
  role: string;
  link?: { link: string; linkttl: string }[];
  contList: string[];
  strength: string[];
  image: string;
  imageList: string[];
  imageAlt: string;
}
