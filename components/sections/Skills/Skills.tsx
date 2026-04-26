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
            <p>SCSS를 활용한 UI 개발</p>
            <p>JavaScript를 활용한 동적 UI 구현 및 라이브러리 적용</p>
            <p>Vue·React 환경 퍼블리싱 및 API 연동, 데이터 바인딩 경험</p>
          </div>
          <div className={cx("icon__wrapper")}>
            <IconLogo
              img={"/images/icons/icon_html.png"}
              imgAlt={"HTML"}
              width={25}
              height={34}
            />
            <IconLogo
              img={"/images/icons/icon_css.png"}
              imgAlt={"CSS"}
              width={25}
              height={35}
            />
            <IconLogo
              img={"/images/icons/icon_scss.png"}
              imgAlt={"SCSS"}
              width={37}
              height={28}
            />
            <IconLogo
              img={"/images/icons/icon_js.png"}
              imgAlt={"Javascript"}
              width={29}
              height={29}
            />
            <IconLogo
              img={"/images/icons/icon_vue.png"}
              imgAlt={"Vue.js"}
              width={35}
              height={30}
            />
            <IconLogo
              img={"/images/icons/icon_react.png"}
              imgAlt={"React.js"}
              width={33}
              height={29}
            />
          </div>
        </li>
        <li className={cx("skills__list")}>
          <h3 className={cx("skills__ttl")}>협업 및 개발 도구</h3>
          <div className={cx("skills__txt")}>
            <p>Git 기반 형상 관리</p>
            <p>Github, Postman, Zeplin을 통한 협업</p>
            <p>VSCode 에디터 사용 및 다양한 확장 기능 활용</p>
          </div>
          <div className={cx("icon__wrapper")}>
            <IconLogo
              img={"/images/icons/icon_git.png"}
              imgAlt={"Git"}
              width={34}
              height={34}
            />

            <IconLogo
              img={"/images/icons/icon_postman.png"}
              imgAlt={"Postman"}
              width={33}
              height={34}
            />
            <IconLogo
              img={"/images/icons/icon_zeplin.png"}
              imgAlt={"Zeplin"}
              width={34}
              height={34}
            />
            <IconLogo
              img={"/images/icons/icon_vs.png"}
              imgAlt={"VSCode"}
              width={34}
              height={34}
            />
            <IconLogo
              img={"/images/icons/icon_sourcetree.png"}
              imgAlt={"Sourcetree"}
              width={27}
              height={34}
            />
          </div>
        </li>
        <li className={cx("skills__list")}>
          <h3 className={cx("skills__ttl")}>디자인</h3>
          <div className={cx("skills__txt")}>
            <p>피그마를 활용한 디자인 작업</p>
            <p>UI 리소스 작업</p>
          </div>
          <div className={cx("icon__wrapper")}>
            <IconLogo
              img={"/images/icons/icon_figma.png"}
              imgAlt={"Figma"}
              width={47}
              height={45}
              fill={true}
            />
            <IconLogo
              img={"/images/icons/icon_xd.png"}
              imgAlt={"XD"}
              width={45}
              height={45}
              fill={true}
            />
            <IconLogo
              img={"/images/icons/icon_photoshop.png"}
              imgAlt={"Photoshop"}
              width={45}
              height={45}
              fill={true}
            />
            <IconLogo
              img={"/images/icons/icon_ai.png"}
              imgAlt={"Illustrator"}
              width={45}
              height={45}
              fill={true}
            />
          </div>
        </li>
      </ul>
    </section>
  );
}
