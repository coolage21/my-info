export type Category = "project" | "sideProject";

export interface Project {
  type: Category;
  id: number;
  title: string;
  date: string;
  count: number;
  tool: string[];
  sub_desc: string;
  main_desc: string;
  role: string;
  link?: { link: string; linkttl: string }[];
  cont_list: string[];
  strength: string[];
  image: string;
  image_list: string[];
  image_alt: string;
}
