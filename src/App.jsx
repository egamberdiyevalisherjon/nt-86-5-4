import { Link, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { useState } from "react";
import { HashLink } from 'react-router-hash-link'

// Rerender
// 1) State
// 2) Props
// 3) Parent rerender
function App() {
  const [text, setText] = useState(false);

  return (
    <div>
      State + Props
      <div>
        <HashLink to="/#djdkj">Home</HashLink>
        <Link to="/about">About</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home title={text} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
