import React from "react";

/* -------------------- Section 01 -------------------- */
// import UseState from "./components/Section 01/02_UseState";
// import UseReducer from "./components/Section 01/03_UseReducer";
// import ArrayUseState from "./components/Section 01/04_ArrayUseState";
// import ObjectUseState from "./components/Section 01/04_ObjectUseState";
// import Parent1 from "./components/Section 01/05_Parent1";
// import Parent2 from "./components/Section 01/06_Parent2";
// import Child2 from "./components/Section 01/06_Child2";
// import GrandParent2 from "./components/Section 01/06_GrandParent2";
// import Parent3 from "./components/Section 01/07_Parent3";

/* -------------------- Section 02 -------------------- */
// import Parent4 from "./components/Section 02/09_Parent4";
// import Parent5 from "./components/Section 02/10_Parent5";
// import Parent6 from "./components/Section 02/11_Parent6";
// import Parent7 from "./components/Section 02/12_Parent7";
// import ParentContext1 from "./components/Section 02/13_ParentContext1";
// import ParentContext2 from "./components/Section 02/14_ParentContext2";
import ParentContext3 from "./components/Section 02/15_ParentContext3";
import { ChildA } from "./components/Section 02/15_ChildContext3";

function App() {
  return (
    <div className="App">
      <h1>React JS Render - Codevolution</h1>

      {/* -------------------- Section 01 -------------------- */}
      <>
        {/* <UseState /> */}

        {/* <UseReducer /> */}

        {/* <ArrayUseState /> */}
        {/* <ObjectUseState /> */}

        {/* <Parent1 /> */}

        {/* <Parent2 /> */}
        {/* <Parent2>
          <Child2 />
        </Parent2> */}
        {/* <GrandParent2 /> */}

        {/* <Parent3 /> */}
      </>

      {/* -------------------- Section 02 -------------------- */}
      <>
        {/* <Parent4 /> */}

        {/* <Parent5 /> */}

        {/* <Parent6 /> */}

        {/* <Parent7 /> */}

        {/* <ParentContext1 /> */}

        {/* <ParentContext2 /> */}

        <ParentContext3>
          <ChildA />
        </ParentContext3>
      </>
    </div>
  );
}

export default App;
