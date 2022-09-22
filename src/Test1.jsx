import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Test1 = () => {
  const [array, setArray] = useState([]);
  const [text, setText] = useState("안녕하세요");
  useEffect(() => {
    console.log(text);
    console.log(text[0]);
    //문자열을 구분자로 나눔 -> 배열 / 빈값은 공백(,)을 기준으로 구분
    const text2 = text.split("");
    console.log(text2);
    //인덱스 2번째의 문자열을 바꿈
    text2[2] = "히";
    console.log(text2);
    //배열의 요소들을 문자열로 합침
    const text3 = text2.join("");
    console.log(text3);
    //문자열을 찾아서 첫번째에 해당하는 값을 바꿈
    const text4 = text3.replace("히", "하");
    console.log(text4);
    //문자열을 찾아서 해당되는 모든 값을 바꿈
    console.log("히히히히히".replaceAll("히", "하"));
    //문자열에서 특정부분을 추출 -> (시작인덱스번호,끝인덱스번호)
    const text5 = text4.substring(2, 5);
    console.log(text5);

    const text6 = text.split("");
    setArray(text6);
  }, []);

  console.log(array);

  return (
    <>
      {text} {/*js쓸땐 {}로 씀 */}
      <ul>
        {array.map((res, idx) => {
          //고유의 key값을 넣어줘야함
          return <li key={idx}>{res}</li>;
        })}
      </ul>
    </>
  );
};

export default Test1;
