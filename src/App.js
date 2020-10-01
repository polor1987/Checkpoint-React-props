import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Profile from "./profile/Profile";

function App() {
  const handelName = () => {
    alert("Bonjour Mohamed");
  };
  return (
    <div className="App">
      <Profile
        handelName={handelName}
        fullName="Mohamed Belgherbi"
        img="./img/photo.jpg"
        bio="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quisquam temporibus nobis veritatis rem, facilis aut iusto, ab animi fugiat perspiciatis asperiores pariatur, veniam in!"
        profession="Web Developer"
        handelName={handelName}
      />
    </div>
  );
}
export default App;
