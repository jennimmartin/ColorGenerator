import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";

const ColorList = ({ colors }) => {
  return (
    <sections className="colors">
      {colors.map((color, index) => {
        return <SingleColor key={nanoid()} color={color} index={index} />;
      })}
    </sections>
  );
};
export default ColorList;
