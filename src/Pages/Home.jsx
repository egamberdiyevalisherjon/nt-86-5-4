import React, { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
// Rerender
// 1) State
// 2) Props
// 3) Parent rerender
const Home = () => {
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  function handleToggleSidebar() {
    setOpen(!open);
  }
  function handleIncrease() {
    setCount(count + 1);
  }
  function handleDecrease() {
    setCount(count - 1);
  }
  function handleChangeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
    // if (theme === "dark") setTheme("light");
    // else setTheme("dark");
  }
  return (
    <div className={theme}>
      Home
      <Header />
      <div>
        <button onClick={handleChangeTheme}>Toggle Theme</button>
      </div>
      <div>
        <button onClick={handleToggleSidebar}>Toggle Sidebar</button>
      </div>
      {open && <aside>Sidebar</aside>}
      <button onClick={handleDecrease}>-</button>
      {count}
      <button onClick={handleIncrease}>+</button>
      <Footer />
    </div>
  );
};

export default Home;
