import "./PersonInfo.css";

interface PersonInfoProps {
  firstName: string;
  lastName: string;
  bgColor?: string;
}

function PersonInfo({ firstName, lastName, bgColor }: PersonInfoProps) {
  return (
    <div
      className="PersonInfo"
      style={{ backgroundColor: bgColor || "lightblue" }}
    >
      <strong>{firstName}</strong> <strong>{lastName}</strong>
    </div>
  );
}

export default PersonInfo;
