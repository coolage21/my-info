import classNames from "classnames/bind";
import styles from "./Skills.module.scss";
import Heading from "@/components/common/Heading/Heading";
import IconLogo from "@/components/common/IconLogo/IconLogo";

const cx = classNames.bind(styles);

export default function Skills() {
  return (
    <section id="skills" className={cx("skills", "ly-main", "ly-section")}>
      <Heading title="기술스택" size="medium" />
      <ul className={cx("skills__lists")}>
        <li className={cx("skills__list")}>
          <h3 className={cx("skills__ttl")}>프론트엔드</h3>
          <div className={cx("skills__txt")}>
            <p>SCSS 기반 프로젝트 진행</p>
            <p>JavaScript를 활용한 동적 UI 구현 및 플러그인 적용</p>
            <p>Vue·React 환경 퍼블리싱 및 API 연동, 데이터 바인딩</p>
          </div>
          <div className={cx("icon__wrapper")}>
            <IconLogo img={'/images/icons/icon_html.png'} imgAlt={'HTML'} />
            
            <li className={cx("icon")}>
              <img src="/images/icons/icon_html.png" alt="HTML" />
              {/* <span className={cx("sc-only")}>HTML</span> */}
            </li>
            <li className={cx("icon")}>
              <img src="/images/icons/icon_css.png" alt="CSS" />
              {/* <span className={cx("sc-only")}>CSS</span> */}
            </li>
            <li className={cx("icon")}>
              <img src="/images/icons/icon_js.png" alt="Javascript" />
              {/* <span className={cx("sc-only")}>Javascript</span> */}
            </li>
            <li className={cx("icon")}>
              <img src="/images/icons/icon_vue.png" alt="VUE" />
              {/* <span className={cx("sc-only")}>VUE</span> */}
            </li>
            <li className={cx("icon")}>
              <img src="/images/icons/icon_react.png" alt="REACT" />
              {/* <span className={cx("sc-only")}>REACT</span> */}
            </li>
          </div>
        </li>
        <li className={cx("skills__list")}>
          <h3 className={cx("skills__ttl")}>협업 및 개발 도구</h3>
          <div className={cx("skills__txt")}>
            <p>git 기반 형상 관리 및 협업</p>
            <p>VSCode 에디터 사용 및 다양한 확장 기능 활용</p>
          </div>
          <ul className={cx("icon__wrapper")}>
            <li className={cx("icon")}>
              <img src="/images/icons/icon_html.png" alt="" />
              <span className={cx("sc-only")}>HTML</span>
            </li>
            <li className={cx("icon")}>
              <img src="/images/icons/icon_html.png" alt="" />
              <span className={cx("sc-only")}>HTML</span>
            </li>
            <li className={cx("icon")}>
              <img src="/images/icons/icon_html.png" alt="" />
              <span className={cx("sc-only")}>HTML</span>
            </li>
            <li className={cx("icon")}>
              <img src="/images/icons/icon_html.png" alt="" />
              <span className={cx("sc-only")}>HTML</span>
            </li>
            <li className={cx("icon")}>
              <img src="/images/icons/icon_html.png" alt="" />
              <span className={cx("sc-only")}>HTML</span>
            </li>
          </ul>
        </li>
        <li className={cx("skills__list")}>
          <h3 className={cx("skills__list")}>디자인</h3>
          <div className={cx("skills__txt")}>
            <p>피그마를 활용한 디자인 시안 작업</p>
            <p>UI 리소스 추출·가공</p>
            <p>Zeplin 기반 디자이너와 협업딩</p>
          </div>
          <ul className={cx("icon__wrapper")}>
            <li className={cx("icon")}>
              <img src="/images/icons/icon_html.png" alt="HTML" />
              {/* <span className={cx("sc-only")}>HTML</span> */}
            </li>
            <li className={cx("icon")}>
              <img src="/images/icons/icon_css.png" alt="CSS" />
              {/* <span className={cx("sc-only")}>CSS</span> */}
            </li>
            <li className={cx("icon")}>
              <img src="/images/icons/icon_javascript.png" alt="Javascript" />
              {/* <span className={cx("sc-only")}>Javascript</span> */}
            </li>
            <li className={cx("icon")}>
              <img src="/images/icons/icon_html.png" alt="SCSS" />
              {/* <span className={cx("sc-only")}>SCSS</span> */}
            </li>
            <li className={cx("icon")}>
              <img src="/images/icons/icon_html.png" alt="VUE" />
              {/* <span className={cx("sc-only")}>VUE</span> */}
            </li>
            <li className={cx("icon")}>
              <img src="/images/icons/icon_html.png" alt="REACT" />
              {/* <span className={cx("sc-only")}>REACT</span> */}
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
