import { OrbitControls } from "@react-three/drei"
import { useState } from "react";
const Scene = () => {
  const [active, setActive] = useState(false);
  const clickHandler = () => {
setActive(!active);
  };
  return (
    <>
    <OrbitControls />
      <mesh onClick={clickHandler} position-x={1}>
        <boxGeometry />
        <meshBasicMaterial color={active? "red" : "blue"} />
      </mesh>

      <mesh onClick={(e)=>{e.stopPropagation()}} position-x={-1}>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>
    </>
  );
};

export default Scene;
