import classNames from "classnames/bind";
import styles from "./Strength.module.scss";
import Heading from "@/components/common/Heading/Heading";

const cx = classNames.bind(styles);

export default function Strength() {
  return (
    <section id="strength" className={cx("strength", "ly-main", "ly-section")}>
      <Heading title="핵심역량" size="medium" />
      <ul className={cx("strength__cards")}>
        <li className={cx("strength__card")}>
          <h3 className={cx("strength__ttl", "sub-ttl")}>웹표준 준수</h3>
          <p className={cx("strength__desc")}>
            W3C에서 권장하는 웹표준을 준수하여 코딩합니다.
          </p>
          <p className={cx("strength__desc")}>
            시맨틱 태그를 사용하여 구조를 설계하고 의미를 명확하게 전달합니다.
          </p>
        </li>
        <li className={cx("strength__card")}>
          <h3 className={cx("strength__ttl", "sub-ttl")}>웹접근성 준수</h3>
          <p className={cx("strength__desc")}>
            웹 접근성 검사 도구를 활용하여 오류를 분석하고 개선합니다.
          </p>
          <p className={cx("strength__desc")}>
            웹 접근성 품질인증(WA 마크) 갱신/획득 프로젝트에 참여하여
          </p>
          <p className={cx("strength__desc")}>코드를 개선한 경험이 있습니다.</p>
        </li>
        <li className={cx("strength__card")}>
          <h3 className={cx("strength__ttl", "sub-ttl")}>웹 호환성 고려</h3>
          <p className={cx("strength__desc")}>
            다양한 디바이스에 최적화된 반응형 웹 퍼블리싱을 진행합니다.
          </p>
          <p className={cx("strength__desc")}>
            크로스 브라우징 이슈에 대응하여 안정적으로 웹사이트를 구축한 경험이
            있습니다.
          </p>
        </li>
        <li className={cx("strength__card")}>
          <h3 className={cx("strength__ttl", "sub-ttl")}>
            컴포넌트 기반 UI 구현
          </h3>
          <p className={cx("strength__desc")}>
            스타일가이드를 기준으로 폰트·컬러·레이아웃을 표준화합니다.
          </p>
          <p className={cx("strength__desc")}>
            프론트엔드 프레임워크 사용 시 컴포넌트로 UI를 분리하여 코딩합니다.
          </p>
        </li>
      </ul>
    </section>
  );
}
