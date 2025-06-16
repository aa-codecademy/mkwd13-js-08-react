import { ComponentC } from "./ComponentC";

interface ComponentBProps {
  title: string;
  handleChangeTitle: (value: string) => void;
}

export const ComponentB = (props: ComponentBProps) => {
  return (
    <>
      <h3>ComponentB</h3>
      <ComponentC
        title={props.title}
        handleChangeTitle={props.handleChangeTitle}
      />
    </>
  );
};
