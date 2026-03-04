export type Category = "data" | "network";

export interface User {
  type: Category;
  id: number;
  title: string;
  desc: string;
  date: string;
  count: number;
  link: string;
  image: string;
  imageAlt: string;
  tool: string[];
  contList: string[];
}