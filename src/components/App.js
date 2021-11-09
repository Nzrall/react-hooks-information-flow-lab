import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header"
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  // function onDarkModeClick() {
  //   return (handleDarkModeClick(isDarkMode))
  // }

  return (
    <div>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
