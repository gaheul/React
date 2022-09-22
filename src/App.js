import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello";
import { useEffect, useState } from "react";
import axios from "axios";
import Test1 from "./Test1";
import Compare from "./Compare";

function App() {
  // const [data,setData] = useState([])

  const object = {
    //객체 안에는 뭐든지 가능
    userId: 1, //key : value 로 이루어짐
    id: 1,
    title: "delectus aut autem",
    completed: false,
    array: [1, 2, 3, 4, 5],
    method: () => {
      return 1 + 2;
    }, //함수
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    const api = axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data));
  }, []);

  // const api = axios
  //   .get("https://jsonplaceholder.typicode.com/users")
  //   .then((res) => {
  //     console.log(res.data);
  //   });
  // console.log(api);

  //useState : 상태관리
  //const [상태값 저장 변수, 상태값 갱신 함수] = useState(초기값)
  const [check, setCheck] = useState(false);
  const change = () => {
    setCheck(!check);
  };
  // console.log(check);

  useEffect(() => {
    sum();
  }, []);

  //useEffect : 컴포넌트가 렌더링 될때마다 특정작업을 실행함
  //useEffect(수행하고자하는작업->함수, 의존성(배열형태->검사하고자하는 특정값 또는 빈배열))
  useEffect(() => {}, []);

  const sum = () => {
    console.log(1 + 2);
  };

  // useEffect(() => {
  //   setData((item) => {
  //     return { ...item, title: "test" };
  //   });
  //   console.log(test1());
  //   console.log(test2(2, 3));
  // }, []);

  // console.log(data);

  // console.log(object); //객체 호출
  // console.log(object.userId); //객체의 key값 호출
  // console.log(object.title);
  // console.log(object.method()); //객체 안 함수 호출 -> ()붙여줘야함 * ()안붙이면 return 1+2로 나옴
  console.log(object["id"]); //[]를 이용한 호출은 key값이 string(문자열)
  // object.userId

  // console.log(Object.keys(object));

  //얕은복사 (불변성)
  const object2 = { ...object, id: 3 }; //object 복제후 id값만 변경
  // console.log(object2);

  const { userId, id, title, completed } = object;
  // console.log(title);

  //배열
  const array = [1, 2, 3, 4, 5]; //배열 -> 변수명 = [값]
  // console.log(array[0]); //배열 0번째 인덱스 호출
  // console.log(array);

  //function
  function test1(a, b) {
    //매개변수 받아올 수 있음
    //함수안에서 로직 가능
    if (a === undefined) {
      a = 1;
    }
    if (b === undefined) {
      b = 3;
    }
    return a + b;
  }

  //화살표 함수 : 매개변수(파라미터)  => {로직}
  //화살표 함수는 return값만있다면 매개변수의 ()와 {}, return 생략가능 => const test = () => test2
  const test2 = (e) => {
    console.log(e);
    return console.log(1 + 2);
  };

  //이벤트 : onClick,onChange.. -> 매개변수 e
  const [input, setInput] = useState("");
  const onChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value); //input 태그의 value값
  };

  const test5 = (e) => {
    console.log(e.target.id);
    console.log(e.target.name);
    console.log(e.target.type);
    // console.log(e.target.data_test);
  };

  return (
    <div className="App">
      <input type="checkbox" onChange={change} />
      dd
      <button onClick={test2}>test</button>
      <input value={test1()} onChange={onChange} />
      <button
        id="test3"
        name="test4"
        type="button"
        // data_test="야근하기싫다,퇴근하고싶다"
        onClick={test5}
      >
        btn
      </button>
      <Hello data={data} />
      <br />
      <Test1 />
      <br />
      <Compare object={object} />
    </div>
  );
}

export default App;
