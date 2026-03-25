import classNames from "classnames/bind";
import styles from "./Skills.module.scss";

const cx = classNames.bind(styles);

export default function Skills() {
  return (
    <section id="skills" className={cx("skills")}>
      <h2 className="main-ttl">기술스택</h2>
      <ul className={cx("skills__lists")}>
        <li className={cx("skills__list")}>
          <h3 className="sub-ttl">프론트엔드</h3>
          <div>
            <p>SCSS 기반 프로젝트 진행</p>
            <p>JavaScript를 활용한 동적 UI 구현 및 플러그인 적용</p>
            <p>Vue·React 환경 퍼블리싱 및 API 연동, 데이터 바인딩</p>
          </div>
          <ul>
            <li>
              <img src="" alt="" />
              <span>HTML</span>
            </li>
            <li>
              <img src="" alt="" />
              <span>CSS</span>
            </li>
            <li>
              <img src="" alt="" />
              <span>Javascript</span>
            </li>
            <li>
              <img src="" alt="" />
              <span>Vue</span>
            </li>
            <li>
              <img src="" alt="" />
              <span>React</span>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
