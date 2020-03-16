import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import FormExample from "./form-example";
import Square from "./square";

function Main(){
  // return (<Square value="2" />)
  return (<FormExample />);
}
// ========================================

ReactDOM.render(<Main />, document.getElementById("root"));

