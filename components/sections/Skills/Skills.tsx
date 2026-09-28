import classNames from "classnames/bind";
import styles from "./Skills.module.scss";
import Heading from "@/components/common/Heading/Heading";
import IconLogo from "@/components/common/IconLogo/IconLogo";

const cx = classNames.bind(styles);

export default function Skills() {
  return (
    <section id="skills" className={cx("skills", "ly-section")}>
      <div className={cx("ly-main")}>
        <Heading title="핵심 역량" subTitle="SKILL" position="center" />
        <ul className={cx("skills__lists", "grid__wrapper")}>
          <li className={cx("skills__list", "grid")}>
            <h3 className={cx("skills__ttl")}>프론트엔드 기술</h3>
            <ul>
              <li className={cx("skills__txt")}>
                SCSS, Tailwind CSS 적용 경험
              </li>
              <li className={cx("skills__txt")}>
                JavaScript를 활용한 인터렉션 및 UI 라이브러리 적용
              </li>
              <li className={cx("skills__txt")}>
                Vue·React 환경에서 컴포넌트 UI 구현
              </li>
              <li className={cx("skills__txt")}>
                API 데이터 연동 및 화면 매핑
              </li>
            </ul>
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
                img={"/images/icons/icon_tailwind.png"}
                imgAlt={"Tailwind CSS"}
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
          <li className={cx("skills__list", " grid")}>
            <h3 className={cx("skills__ttl")}>협업 및 개발 도구</h3>
            <ul>
              <li className={cx("skills__txt")}>Git/Github 기반 형상 관리</li>
              <li className={cx("skills__txt")}>
                Figma, Zeplin 등을 활용한 디자인 협업
              </li>
              <li className={cx("skills__txt")}>
                VSCode 사용 및 확장 기능 활용
              </li>
              <li className={cx("skills__txt")}>
                Postman을 활용한 API 확인 및 테스트
              </li>
              <li className={cx("skills__txt")}>
                Photoshop, Illustrator 등 디자인 리소스 작업
              </li>
            </ul>
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
          <li className={cx("skills__list", " grid")}>
            <h3 className={cx("skills__ttl")}>웹 UI 설계 및 품질</h3>
            <ul>
              <li className={cx("skills__txt")}>
                w3c에서 권장하는 웹표준 준수
              </li>
              <li className={cx("skills__txt")}>
                시맨틱 태그를 사용한 구조 설계 및 명확한 마크업
              </li>
              <li className={cx("skills__txt")}>
                OpenWAX를 활용한 접근성 오류 분석 및개선
              </li>
              <li className={cx("skills__txt")}>
                웹 접근성 품질인증(WA 마크) 기준을 고려한 코드 개선 경험
              </li>
              <li className={cx("skills__txt")}>
                웹 성능과 사용자 경험을 고려한 UI 최적화
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
