import { type ReactNode, useContext } from "react";
import { AppContext } from "../context/app.context";

interface ComponentCProps {
  children: ReactNode;
}

export const ComponentC = (props: ComponentCProps) => {
  const context = useContext(AppContext);

  console.log(context);
  return (
    <>
      <h3>{context.title}</h3>
      <input
        type="text"
        onChange={(e) => context.handleChangeTitle(e.target.value)}
      />
      {props.children}
    </>
  );
};
