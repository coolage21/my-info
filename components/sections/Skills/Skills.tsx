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
            <p>Vue·React 환경 퍼블리싱 및 API 연동, 데이터 바인딩 경험</p>
          </div>
          <div className={cx("icon__wrapper")}>
            <IconLogo
              img={"/images/icons/icon_html.png"}
              imgAlt={"HTML"}
              width={"25"}
              height={"34"}
            />
            <IconLogo
              img={"/images/icons/icon_css.png"}
              imgAlt={"css"}
              width={"25"}
              height={"35"}
            />
            <IconLogo
              img={"/images/icons/icon_js.png"}
              imgAlt={"javascriopt"}
              width={"29"}
              height={"29"}
            />
            <IconLogo
              img={"/images/icons/icon_vue.png"}
              imgAlt={"vue"}
              width={"35"}
              height={"30"}
            />
            <IconLogo
              img={"/images/icons/icon_react.png"}
              imgAlt={"react"}
              width={"33"}
              height={"29"}
            />
          </div>
        </li>
        <li className={cx("skills__list")}>
          <h3 className={cx("skills__ttl")}>협업 및 개발 도구</h3>
          <div className={cx("skills__txt")}>
            <p>git 기반 형상 관리 및 협업</p>
            <p>VSCode 에디터 사용 및 다양한 확장 기능 활용</p>
          </div>
          <ul className={cx("icon__wrapper")}>
            <IconLogo
              img={"/images/icons/icon_git.png"}
              imgAlt={"git"}
              width={"34"}
              height={"34"}
            />
            <IconLogo
              img={"/images/icons/icon_scss.png"}
              imgAlt={"scss"}
              width={"37"}
              height={"28"}
            />
            <IconLogo
              img={"/images/icons/icon_postman.png"}
              imgAlt={"postman"}
              width={"33"}
              height={"34"}
            />
            <IconLogo
              img={"/images/icons/icon_sourcetree.png"}
              imgAlt={"sourcetree"}
              width={"27"}
              height={"34"}
            />
            <IconLogo
              img={"/images/icons/icon_vs.png"}
              imgAlt={"vs"}
              width={"34"}
              height={"34"}
            />
          </ul>
        </li>
        <li className={cx("skills__list")}>
          <h3 className={cx("skills__ttl")}>디자인</h3>
          <div className={cx("skills__txt")}>
            <p>피그마를 활용한 디자인 작업</p>
            <p>UI 리소스 추출·가공</p>
            <p>Zeplin 기반 디자이너와 협업</p>
          </div>
          <ul className={cx("icon__wrapper")}>
            <IconLogo
              img={"/images/icons/icon_xd.png"}
              imgAlt={"xd"}
              width={"45"}
              height={"45"}
            />
            <IconLogo
              img={"/images/icons/icon_photoshop.png"}
              imgAlt={"photoshop"}
              width={"45"}
              height={"45"}
            />
            <IconLogo
              img={"/images/icons/icon_ai.png"}
              imgAlt={"ai"}
              width={"45"}
              height={"45"}
            />
            <IconLogo
              img={"/images/icons/icon_figma.png"}
              imgAlt={"figma"}
              width={"47"}
              height={"45"}
            />
            <IconLogo
              img={"/images/icons/icon_zeplin.png"}
              imgAlt={"zeplin"}
              width={"34"}
              height={"34"}
            />
          </ul>
        </li>
      </ul>
    </section>
  );
}
