import React from "react";
import { Dropdown } from "./components/Dropdown";
import { DataType } from "./utils/types"
import classes from './App.module.scss'

const App:React.FC<{data:DataType}> = ({data}) => {

  return (
    <div className={classes.app}>
      <Dropdown data={data} theme ='book'/>
    </div>
  );
}

export default App;
