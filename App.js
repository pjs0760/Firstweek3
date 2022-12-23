import React from "react";

function App() {
  // <---- 자바스크립트 영역 ---->
  const handleClick = () => {
    alert("제출 완료!");
  };

  return (
    /* <---- HTML/JSX 영역  ---->*/
    <form action="" onsubmit="submit();">
      <div
        style={{
          height: "100vh",
          display: " flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* 이곳에 퀴즈를 위한 html 코드를 작성해 주세요 */}
        First name : <input type="text" required />
        Last name : <input type="text" required />
        Email : <input type="text" required />
        <div>
          Gender : <input type="radio" name="gender" required />
          Male
          <input type="radio" name="gender" required />
          Female
        </div>
        <div>
          Favorite :
          <input type="checkbox" name="lang" value="html_box" />
          HTML
          <input type="checkbox" name="lang" value="java_box" />
          JAVA
          <input type="checkbox" name="lang" value="js_box" />
          JavaScript
        </div>
        <div>
          Browser :
          <select id="browsers" name="browsers" required>
            <option value="크롬" selected>
              크롬
            </option>
            <option value="사파리">사파리</option>
            <option value="엣지">엣지</option>
          </select>
        </div>
        <div>
          Birthday :
          <input type="date" name="birthday" />
        </div>
        <input
          type="submit"
          onClick={() => {
            handleClick(document.getElementByld(("txt".required = true)));
          }}
        />
      </div>
    </form>
  );
}

export default App;
