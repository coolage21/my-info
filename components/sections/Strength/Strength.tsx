import classNames from "classnames/bind";
import styles from "./Strength.module.scss";
import Heading from "@/components/common/Heading/Heading";

const cx = classNames.bind(styles);

export default function Strength() {
  return (
    <section id="strength" className={cx("strength", "ly-main", "ly-section")}>
      <Heading title="Strength" size="medium" />
      <ul className={cx("strength__cards")}>
        <li className={cx("strength__card")}>
          <h3 className={cx("strength__ttl", "sub-ttl")}>웹표준 준수</h3>
          <p className={cx("strength__desc")}>
            w3c에서 권장하는 웹표준 마크업과 css, js 표준을 준수하여 코딩
          </p>
          <p className={cx("strength__desc")}>
            시맨틱 태그를 사용하여 구조를 설계하고 문서의 의미를 명확하게 전달
          </p>
        </li>
        <li className={cx("strength__card")}>
          <h3 className={cx("strength__ttl", "sub-ttl")}>웹접근성 준수</h3>
          <p className={cx("strength__desc")}>
            OpenWAX를 활용하여 접근성 오류를 분석하고 개선
          </p>
          <p className={cx("strength__desc")}>
            웹 접근성 품질인증(WA 마크) 갱신 프로젝트에 참여하여 인증 기준에
            맞는 마크업 구조 개선 작업을 진행
          </p>
        </li>
        <li className={cx("strength__card")}>
          <h3 className={cx("strength__ttl", "sub-ttl")}>웹 호환성 고려</h3>
          <p className={cx("strength__desc")}>
            크로스 브라우징을 위한 벤더 프리픽스에 대한 이해도 보유
          </p>
          <p className={cx("strength__desc")}>
            다양한 디바이스에 대응하는 반응형 웹 퍼블리싱 진행
          </p>
        </li>
        <li className={cx("strength__card")}>
          <h3 className={cx("strength__ttl", "sub-ttl")}>
            컴포넌트 기반 UI 구현
          </h3>
          <p className={cx("strength__desc")}>
            스타일가이드를 기반으로 폰트, 컬러, 레이아웃 표준화
          </p>
          <p className={cx("strength__desc")}>
            vue, react와 같은 프레임워크 사용 시 컴포넌트로 UI 분리
          </p>
        </li>
      </ul>
    </section>
  );
}
