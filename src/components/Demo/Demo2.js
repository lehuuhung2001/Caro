import data from "../../mockData";
import Test from "./Demo";

function Demo(props) {
  console.log(props);
  return (
    <div className="App">
      {props.children}
      {data.map((item, index) => (
        <Test
          key={item.id}
          name={item.name}
          className={index < 3 && index >= 1 ? "demo" : ""}

        ></Test>
      ))}
      dds
    </div>
  );
}

export default Demo;
