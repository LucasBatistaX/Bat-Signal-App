import { View } from "react-native";
import { Home } from "./src/screens/Home/Home";
import React, { useState }  from "react";
import { styles } from "./src/screens/Home/HomeStyle";
import  {BatForm}  from "./src/screens/BatForm/BatForm";


export default function App() {  
const [seeForm, setSeeForm] = useState(false)

let activeButton = false 

const enableForm = () => {
  let Form = setSeeForm(!seeForm);
  return Form;
}

  return (
    <>
      {
        !enableForm ? <Home /> : <BatForm />
      }
    </>
  );
}



