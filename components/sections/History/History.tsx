import classNames from "classnames/bind";
import styles from "./History.module.scss";
import Heading from "@/components/common/Heading/Heading";

const cx = classNames.bind(styles);

export default function History() {
  return (
    <section id="history" className={cx("history", "ly-main", "ly-section")}>
      <h2>history</h2>
      <div>
        <h3>이력사항</h3>
        <ul>
          <li>
            <em>2024. 07 ~</em>
            <span>
              (주)포위즈시스템 <strong>웹 퍼블리셔</strong>
            </span>
          </li>
          <li>
            <em>2024. 07 ~</em>
            <span>
              (주)포위즈시스템 <strong>웹 퍼블리셔</strong>
            </span>
          </li>
          <li>
            <em>2024. 07 ~</em>
            <span>
              (주)포위즈시스템 <strong>웹 퍼블리셔</strong>
            </span>
          </li>
          <li>
            <em>2024. 07 ~</em>
            <span>
              (주)포위즈시스템 <strong>웹 퍼블리셔</strong>
            </span>
          </li>
        </ul>
      </div>
      <div>
        <h3>이력사항</h3>
        <ul>
          <li>
            <em>2024. 07 ~</em>
            <span>
              (주)포위즈시스템 <strong>웹 퍼블리셔</strong>
            </span>
          </li>
          <li>
            <em>2024. 07 ~</em>
            <span>
              (주)포위즈시스템 <strong>웹 퍼블리셔</strong>
            </span>
          </li>
          <li>
            <em>2024. 07 ~</em>
            <span>
              (주)포위즈시스템 <strong>웹 퍼블리셔</strong>
            </span>
          </li>
          <li>
            <em>2024. 07 ~</em>
            <span>
              (주)포위즈시스템 <strong>웹 퍼블리셔</strong>
            </span>
          </li>
        </ul>
      </div>
      <div>
        <p>
          기본에 충실하되 유연한 사고를 가지고 업무에 임하고자 합니다. 함께
          작업하고 싶거나 궁금한 점이 있으시면 언제든지 연락주세요.
        </p>
        <div>
          <div>
            <span>최하혜</span>
            <span>웹 퍼블리셔 | UI개발자</span>
          </div>
          <ul>
            <li>
              <div>
                <img src="" alt="" />
              </div>
              <span>010-5914-0214</span>
            </li>
            <li>
              <div>
                <img src="" alt="" />
              </div>
              <span>010-5914-0214</span>
            </li>
            <li>
              <div>
                <img src="" alt="" />
              </div>
              <span>010-5914-0214</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
