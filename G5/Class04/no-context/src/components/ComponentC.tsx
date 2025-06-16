interface ComponentCProps {
  title: string;
  handleChangeTitle: (value: string) => void;
}

export const ComponentC = (props: ComponentCProps) => {
  const { title, handleChangeTitle } = props;
  return (
    <>
      <h3>{title}</h3>
      <input
        type="text"
        onChange={(event) => handleChangeTitle(event.target.value)}
      />
    </>
  );
};
