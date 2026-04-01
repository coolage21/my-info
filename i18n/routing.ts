import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "cn", "ko"],
  defaultLocale: "ko",
  localePrefix: "as-needed", // ⭐ 이거 추가
});
