import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
// import styles from "./index.module.css";

function Square(props) {
  const [value, setValue] = useState([]);
  const [color, setColor] = useState("Red");

  useEffect(() => {
    const intervalID = setInterval(() => {
      setValue(value + 1);
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  });
  return (
    <button className={styles.square} onClick={() => setValue(value + 1)}>
      {value}
    </button>
  );
}
// class Square extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       value: parseInt(this.props.value)
//     };
//   }

//   render() {
//     return (
//       <button className={styles.square} onClick={() => this.props.onClick()}>
//         {this.state.value}
//       </button>
//     );
//   }

//   componentDidMount() {
//     this.intervalID = setInterval(() => {
//       this.setState({ value: this.state.value + 1 });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalID);
//   }
// }

export default Square;
// function Square(props) {
//   const [value, setValue] = useState(parseInt(props.value));

//   useEffect(() => {
//     const intervalID = setInterval(() => {
//       setValue(value + 1);
//     }, 1000);
//     return () => {
//       clearInterval(intervalID);
//     };
//   });
//   return (
//     <button className={styles.square} onClick={() => setValue(value + 1)}>
//       {value}
//     </button>
//   );
// }

// export default Square;
