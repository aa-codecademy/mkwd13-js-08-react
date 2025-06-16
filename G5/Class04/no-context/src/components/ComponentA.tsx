import { ComponentB } from "./ComponentB";

interface ComponentAProps {
  title: string;
  handleChangeTitle: (value: string) => void;
}

export const ComponentA = (props: ComponentAProps) => {
  return (
    <>
      <h3>ComponentA</h3>
      <ComponentB
        title={props.title}
        handleChangeTitle={props.handleChangeTitle}
      />
    </>
  );
};
