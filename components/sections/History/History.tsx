import classNames from "classnames/bind";
import styles from "./History.module.scss";
import Heading from "@/components/common/Heading/Heading";

const cx = classNames.bind(styles);

export default function History() {
  return (
    <div id="history" className={cx("history", "ly-main", "ly-section")}>
      <div className={cx("history__inner")}>
        <section>
          <Heading title="이력사항" size="small" />
          <ul>
            <li className={cx("history__list")}>
              <em>2024. 07 ~</em>
              <div>
                <span>
                  (주)포위즈시스템 <strong>웹 퍼블리셔</strong>
                </span>
                <h3 className={cx("history__main")}>주요 업무</h3>
                <ul className={cx("history__main-cont")}>
                  <li>
                    {/* 페이지 UI 개발:  */}
                    화면 레이아웃과 UI 구현
                  </li>
                  <li>
                    {/* 컴포넌트 적용:  */}
                    공통 UI 컴포넌트 활용
                  </li>
                  <li>KWCAG 기준에 맞춰 접근성 점검 및 개선</li>
                  <li>다양한 디바이스 별 최적화를 위한 반응형 작업</li>
                </ul>
              </div>
            </li>
            <li className={cx("history__list")}>
              <em>2021. 09 ~ 2023. 12</em>
              <span>
                (주)인터비젼 <strong>웹 퍼블리셔</strong>
              </span>
            </li>
            <li className={cx("history__list")}>
              <em>2020. 01 ~ 2020. 08</em>
              <span>
                (주)와우프레스 <strong>웹 템플릿 제작</strong>
              </span>
            </li>
            <li className={cx("history__list")}>
              <em>2016. 02 ~ 2017. 11</em>
              <span>
                (주)한빛 <strong>편집 디자이너</strong>
              </span>
            </li>
          </ul>
        </section>
        <section>
          <Heading title="교육 및 자격증" size="small" />
          <ul>
            <li className={cx("history__list")}>
              <em>2025. 09</em>
              <span>
                <strong>정보처리기사</strong> 자격증 취득
              </span>
            </li>
            <li className={cx("history__list")}>
              <em>2024. 01</em>
              <span>
                부스트코스 <strong>웹 접근성 이해</strong> 과정 수료
              </span>
            </li>
            <li className={cx("history__list")}>
              <em>2020. 11 ~ 2021. 04</em>
              <span>
                코리아IT학원 <strong>프론트엔드</strong> 과정 수료
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
