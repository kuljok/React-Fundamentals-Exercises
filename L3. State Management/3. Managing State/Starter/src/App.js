import {useState} from "react";
import corgi from "./corgi.jpg";
import "./App.css";
import MyButton from "./MyButton";

const App = () => {
    const [count, setCount] = useState(0);

    const likeHandler = () => {
        setCount(count+1);
    }

    return (
      <div className="container">
        <h2>Like this photo!</h2>
        <img src={corgi} alt="Corgi"></img>
        <p>Amount of likes: {count}</p>
        <MyButton title="Like Me" onLike={likeHandler} />
      </div>
    );
};

export default App;
