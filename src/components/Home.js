import React from "react";
import toDo from "../img/toDo.avif";
import "./Home.module.css";
import { Link } from "react-router-dom";
// import { FaBeer } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section className="alert alert-light text-center" role="alert">
        <h1>
          Welcome to the website to create tasks <span>toDo</span>!
        </h1>
        <p>Start managing your tasks right now!</p>
        {/* <a href="/newproject">Criar projeto</a>*/}
        <br />
        <Link to="/newtask">Create task</Link>
        <br />
        <img src={toDo} alt="toDo" />
        <br />
      </section>
    </>
  );
};

export default Home;
