import React from "react";

/* -------------------- Section 01 -------------------- */
// import UseState from "./components/Section 01/02_UseState";
// import UseReducer from "./components/Section 01/03_UseReducer";
import ArrayUseState from "./components/Section 01/04_ArrayUseState";
import ObjectUseState from "./components/Section 01/04_ObjectUseState";

function App() {
  return (
    <div className="App">
      <h1>React JS Render - Codevolution</h1>

      {/* -------------------- Section 01 -------------------- */}
      <>
        {/* <UseState /> */}
        
        {/* <UseReducer /> */}

        <ArrayUseState />
        <ObjectUseState />
      </>
    </div>
  );
}

export default App;
