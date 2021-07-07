import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostsList } from "./redux/actions/action.getAllCoins";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.posts.postsList);

  useEffect(() => {
    getAllPostsData();
  }, [data]);

  const getAllPostsData = () => {
    dispatch(getAllPostsList());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ul
        style={{
          listStyleType: "none",
          textAlign: "left",
        }}
      >
        {data.map((item, index) => (
          <li
            key={index}
            style={{ border: "solid 1px black", padding: 10, marginRight: 30 }}
          >
            {index + 1}.{item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
