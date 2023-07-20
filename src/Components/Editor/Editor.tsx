import React from 'react'
import { useState } from "react";
import './editor.css'


export const Editor = () => {
  const [color] = useState("red");
  return (
    <div>
      <div><input type="text" defaultValue={"page title"}></input></div>
    </div>
  )
}
