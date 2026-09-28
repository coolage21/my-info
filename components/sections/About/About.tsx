import classNames from "classnames/bind";
import styles from "./About.module.scss";
import Heading from "@/components/common/Heading/Heading";
import Image from "next/image";
const cx = classNames.bind(styles);

export default function About() {
  return (
    <section
      id="about"
      className={cx("about", "ly-main", "ly-section", "grid__wrapper")}
    >
      <div className={cx("about__inner", "grid--lg")}>
        <em className={cx("badge")}>ABOUT</em>
        <h2 className={cx("heading")}>
          탄탄한 구조 위에 완성도를 쌓아가는,
          <br />
          프론트엔드 개발자
        </h2>
        <div className={cx("about__desc")}>
          <p>
            4년 6개월 동안 웹 퍼블리셔로서 웹 표준과 웹 접근성을 바탕으로 다양한
            디바이스 환경을 고려한 반응형 웹 UI를 구현해 왔습니다. 시맨틱
            마크업과 UI 라이브러리를 적용하고, 반복되는 요소는 컴포넌트 단위로
            구조화하여 재사용성을 높이는 데 집중했습니다.
          </p>
          <p>
            프로젝트 진행 과정에서 프론트엔드 개발 영역까지 업무를 경험할 기회가
            있었습니다. 일부 페이지의 데이터 매핑과 상태 관리 업무에 투입되어
            화면과 기능이 연결되는 과정을 직접 경험했고 이를 계기로 웹 개발
            전반에 관심을 가지게 되었습니다.
          </p>
          <p>
            현재는 화면을 그대로 구현하는 것을 넘어 웹 개발로 영역을 확장하여
            프론트엔드 개발 역량을 키우고 있습니다. 퍼블리싱 작업에서 쌓은 UI에
            대한 이해를 바탕으로 기능을 적용하는 것에 더하여 웹 최적화와 사용자
            경험을 고려하는 프론트엔드 개발자를 목표로 합니다.
          </p>
        </div>
        <History></History>
      </div>
      <Experience></Experience>
    </section>
  );
}

export function History() {
  return (
    <div className={cx("history")}>
      <div className={cx("history__item")}>
        <div className={cx("history__heading")}>
          <h3 className={cx("sub-ttl")}>
            <span className={cx("icon__wrapper")}>
              <Image
                className={cx("icon")}
                src="/images/icons/icon_check.png"
                alt=""
                width={16}
                height={16}
              />
            </span>
            경력사항
          </h3>
          <em className={cx("badge badge--v2")}>WEB PUBLISHER</em>
        </div>
        <div className={cx("history__box", "flex")}>
          <div className={cx("history__left")}>
            <h4 className={cx("history__company")}>(주)포위즈시스템</h4>
            <span className={cx("history__date")}>2024. 07 ~ 재직중</span>
          </div>
          <ul>
            <li className={cx("history__list")}>
              {/* 페이지 UI 개발:  */}
              웹표준 기반의 마크업 및 화면 레이아웃 설계
            </li>
            <li className={cx("history__list")}>
              {/* 컴포넌트 적용:  */}
              재사용성을 고려한 공통 UI 컴포넌트 모듈화
            </li>
            <li className={cx("history__list")}>
              {" "}
              다양한 디바이스에 최적화된 반응형 웹 구현
            </li>
            <li className={cx("history__list")}>
              WA마크 갱신을 위한 접근성 점검 및 개선
            </li>
          </ul>
        </div>
        <div className={cx("history__box", " flex")}>
          <div className={cx("history__left")}>
            <h4 className={cx("history__company")}>(주)인터비젼</h4>
            <span className={cx("history__date")}>2021. 09 ~ 2023. 12</span>
          </div>
          <ul>
            <li className={cx("history__list")}>
              자사 홈페이지·쇼핑몰·CMS의 퍼블리싱 및 유지보수
            </li>
            <li className={cx("history__list")}>
              협력 업체 웹사이트 퍼블리싱 및 프론트엔드 기능 유지보수
            </li>
          </ul>
        </div>
      </div>
      <div className={cx("history__item")}>
        <div className={cx("history__heading")}>
          <h3 className={cx("sub-ttl")}>
            {" "}
            <span className={cx("icon__wrapper")}>
              <Image
                className={cx("icon")}
                src="/images/icons/icon_check.png"
                alt=""
                width={16}
                height={16}
              />
            </span>
            교육 및 자격증
          </h3>
        </div>
        <div className={cx("history__box")}>
          <div className={cx("history__box-inner")}>
            <span className={cx("history__date", "history__left")}>
              2025. 09
            </span>
            <span className={cx("history__list")}>
              정보처리기사 자격증 취득
            </span>
          </div>
          <div className={cx("history__box-inner")}>
            <span className={cx("history__date", "history__left")}>
              2024. 01
            </span>
            <span className={cx("history__list")}>
              부스트코스 웹 접근성 이해 과정 수료
            </span>
          </div>
          <div className={cx("history__box-inner")}>
            <span className={cx("history__date", "history__left")}>
              2020. 11 ~ 2021. 04
            </span>
            <span className={cx("history__list")}>
              코리아IT학원 프론트엔드 과정 수료
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export function Experience() {
  return (
    <div className={cx("experience", "grid")}>
      <h3 className={cx("sub-ttl")}>
        <span className={cx("icon__wrapper")}>
          <Image
            className={cx("icon")}
            src="/images/icons/icon_chart.png"
            alt=""
            width={16}
            height={16}
          />
        </span>
        경력 및 프로젝트 경험
      </h3>
      <ul className={cx("experience__items")}>
        <li className={cx("experience__item")}>
          <b className={cx("experience__ttl")}>10+개</b>
          <span>프로젝트 수행</span>
        </li>
        <li className={cx("experience__item")}>
          <b className={cx("experience__ttl")}>4+년</b>
          <span>퍼블리싱 경력</span>
        </li>
        <li className={cx("experience__item")}>
          <b className={cx("experience__ttl")}>4개</b>
          <span>Vue.js 프로젝트 경험</span>
        </li>
        <li className={cx("experience__item")}>
          <b className={cx("experience__ttl", "text-16")}>
            PUBLISHER → FRONTEND
          </b>
          <span>프론트엔드 역량 확장</span>
        </li>
      </ul>
    </div>
  );
}
