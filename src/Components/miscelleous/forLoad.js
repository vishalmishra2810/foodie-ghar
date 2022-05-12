import React from "react";
import Spinner from "./spinner/spinner";

const forLoad = () => {
  return (
    <div
      style={{
        height: "50vh",
        width: "100vw",
        color: "#000",
        fontWeight: "bold",
        margin: "0 auto",
        padding: "0 auto",
      }}
    >
      <h1>Foodie Ghar</h1>
      <h3>Bhookho ka Adda</h3>
      <Spinner />
    </div>
  );
};

export default forLoad;
