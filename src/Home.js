// import React from "react";

// const Home = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "90vh",
//       }}
//     >
//       <h1> Home </h1>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import computer from "./computer.png";
import { SplitImg, Split, SplitTitle } from "./styles/Split";

export default function Home() {
  return (
    <Split>
      <div>
        <SplitTitle>Cool, Catchy Slogan</SplitTitle>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, fugit
          provident. Fugit, distinctio dolor nesciunt natus quidem laborum
          beatae ratione accusantium hic illo quas id numquam possimus,
          similique odit alias.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, fugit
          provident. Fugit, distinctio dolor nesciunt natus quidem laborum
          beatae ratione accusantium hic illo quas id numquam possimus,
          similique odit alias.
        </p>
      </div>
      <div>
        <SplitImg src={computer} alt="" />
      </div>
    </Split>
  );
}
