import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

///경로에따라 언어결정 / url처리는 next-intl라이브러리 기능이고 이 처리를 페이지 진입 전에 제어하기 위해 미들웨어에서 코드작성 어떤 조건에서 미들웨어 적용할지는 matcher로 제한
// matcher : api, _next, 그리고 “확장자 있는 모든 요청(파일)”을 제외한 나머지 경로에만 적용