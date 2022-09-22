import React from "react";

const Compare = ({ object }) => {
  console.log(object);
  const compare1 = () => {
    if (object.id !== 1) {
      // ==:값만 비교 , ===: type까지 비교
      return "정답입니다.";
    } else {
      return "틀렸습니다.";
    }
  };

  const compare2 = () => {
    switch (object.id) {
      case 1: //switch문에서 return없으면 return이 있는 곳에서 실행 종료
      case 2:
        return "2입니다.";
      case 3:
        return "3입니다.";
      default:
        return "일치하는 숫자가 없습니다.";
    }
  };
  return (
    <>
      {/* if문 */}
      {compare1()}
      <br />
      {/* swith문 */}
      {compare2()}
      <br />
      {/* **삼항연산자** */}
      {object.id === 5 ? "1이 맞습니다." : "다른 숫자입니다."}
      <br />
      {/* true조건에서만 값이 출력됨 */}
      {object.id === 3 && alert("1이 맞습니다.")}
      <br />
      {/* 값이 존재하지 않을 때 출력해줌 */}
      {object.id === null ?? "값이 없습니다."}
      <br />
      {/* {object.array[2] === 3 ? alert("3이 맞습니다.") : alert("3이 아닙니다.")} */}
      <br />
      {/* 값이 false일때 !붙이면 true로 바뀜 */}
      {!object.completed && "3입니다."}
      <br />
      {/* object.array[7] === null -> 비교연산자가 아니기때문에 인식못함 */}
      {object.array[7] ?? "값이 존재하지 않습니다."}
      <br />
      {/* !붙이면 false가 true로 바뀌는 것 뿐만 아니라 null,undefined,Nan,0도 바뀜 */}
      {/* object.array[7]이 null 이기때문에 false값이 나옴 => !를 붙이면 true로 바뀌면서 true값나옴 */}
      {!object.array[7] ? "값이 존재하지 않습니다." : "값이 존재합니다."}
      <br />
      {object.id !== 1
        ? "1이 맞습니다."
        : object.array[0] === 1
        ? "1이 맞네요"
        : "1이 아닙니다."}
      <br />
    </>
  );
};

export default Compare;
