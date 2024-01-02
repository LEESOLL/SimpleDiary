import { useState, useRef } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current, //useRef(0) 의 객체이므로 current 는 0이 들어있음.
    };
    dataId.current += 1;
    setData([newItem, ...data]); // 추가된 일기가 상단에 보여야 하므로, newItem 을 먼저 써주고 ...data 추가해줌
  };

  const onDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onDelete={onDelete} />
    </div>
  );
}

export default App;
