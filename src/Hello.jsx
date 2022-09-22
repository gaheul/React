import React, { useEffect, useState } from "react";

const Hello = ({ data }) => {
  console.log(data);

  const test = data[0];

  const test2 = data[4];

  const [test3, setTest3] = useState();

  //   data.forEach((element) => {
  //     console.log(element);
  //   });

  //map은 변수정의 가능  / 배열을 재정의
  //retrun 무조건 있어야함
  //filter : 조건을 통과한 요소만 모아서 새로운 배열 변환
  const a = data
    .map((i) => {
      return { idx: i.id, name: i.name };
    })
    .filter((i) => {
      return i.idx == 4;
    });

  console.log(a);

  return <></>;
};

export default Hello;
