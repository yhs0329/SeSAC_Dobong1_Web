import style1 from "../styles/style.module.css";
import classNames from "classnames";
import Names from "classnames/bind";

export default function ModuleCSS() {
  const setting = Names.bind(style1);
  return (
    <div className={style1.container}>
      <h4>.module.css 적용</h4>
      <div className={style1.box2}>
        <div>안녕하세요</div>
      </div>
      <br />
      <div className={`${style1.first} ${style1.second}`}>
        클래스 여러 개 지정(백틱사용)
      </div>
      <div className={[style1.first, style1.second].join(" ")}>
        클래스 여러 개 지정(join 함수 이용)
      </div>
      <div className={classNames(style1.first, style1.second)}>
        classNames 메소드 이용(install 필요)
      </div>
      <div className={setting("first", "second")}>classnames 모듈 사용1</div>
      <div>classnames 모듈 사용2</div>
    </div>
  );
}
