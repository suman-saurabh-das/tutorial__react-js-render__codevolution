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
import Parent3 from "./components/Section 01/07_Parent3";

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

        <Parent3 />
      </>
    </div>
  );
}

export default App;
