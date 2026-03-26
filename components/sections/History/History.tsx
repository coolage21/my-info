import classNames from "classnames/bind";
import styles from "./History.module.scss";
import Heading from "@/components/common/Heading/Heading";

const cx = classNames.bind(styles);

export default function History() {
  return (
    <div id="history" className={cx("history", "ly-main", "ly-section")}>
      <section>
        <Heading title="이력사항" size="small"/>
        <ul>
          <li>
            <em>2024. 07 ~</em>
            <span>
              (주)포위즈시스템 <strong>웹 퍼블리셔</strong>
            </span>
            <ul>
              <li>페이지 UI 개발: 화면 레이아웃과 인터페이스 요소를 설계·구현</li>
              <li>컴포넌트 적용: 공통 UI 컴포넌트를 활용하여 디자인 일관성 유지</li>
              <li>웹 접근성 검사: WCAG 기준에 맞춰 접근성 점검 및 개선</li>
              <li>반응형 작업: 다양한 화면 크기에 최적화된 레이아웃 적용</li>
            </ul>
          </li>
          <li>
            <em>2021. 09 ~ 2024. 12</em>
            <span>
              (주)인터비젼 <strong>웹 퍼블리셔</strong>
            </span>
          </li>
          <li>
            <em>2020. 07 ~</em>
            <span>
              (주)와우프레스 <strong>웹 템플릿 제작</strong>
            </span>
          </li>
          <li>
            <em>2016. 02 ~ 2017. 11</em>
            <span>
               <strong>편집 디자이너</strong>
            </span>
          </li>
        </ul>
      </section>
      <section>
        <Heading title="교육 및 자격증" size="small"/>
        <ul>
          <li>
            <em>2025. 09. 12</em>
            <span>
              자격증 <strong>정보처리기사</strong>
            </span>
          </li>
          <li>
            <em>2024.01</em>
            <span>
              부스트코스 <strong>웹 접근성 이해</strong>
            </span>
          </li>
          <li>
            <em>2020. 11 ~ 2021. 03</em>
            <span>
              (주)포위즈시스템 <strong>웹 퍼블리셔</strong>
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
