import styles from "./App.module.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Display  from "./component/Display";
import ButtonsContainer  from "./component/ButtonsContainer";
import { useState } from "react";

function App() {

  const [calVal, setCalVal]  = useState("");
  const onButtonClick = (buttonText) =>  {
      if (buttonText === "C") {
          setCalVal("");
      }else if(buttonText === "=") {
        const result = eval(calVal);
        setCalVal(result)
      }else {

        const newDisplayValue = calVal + buttonText;
        setCalVal(newDisplayValue);

      }
  }

  return (
    <center>
    <div className = {styles.calculator}>
    <Display DisplayValue={calVal}/>
    <ButtonsContainer onButtonClick = {onButtonClick}></ButtonsContainer>
 
   </div>
   </center>
  );
}

export default App;
