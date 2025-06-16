import { useContext } from "react";
import { ComponentC } from "./ComponentC";
import { AppContext } from "../context/app.context";

export const ComponentB = () => {
  const context = useContext(AppContext);
  console.log("Context logged in ComponentB", context);
  return (
    <>
      <h3>ComponentB</h3>
      <ComponentC>
        <h4>Content send as children in between ComponentC tags</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, sequi.
        </p>
        <p>Lorem ipsum dolor sit amet.</p>
        {/* Some other component */}
      </ComponentC>
    </>
  );
};
