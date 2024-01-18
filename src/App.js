import "./App.css";
import Header from "./component/Header";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Blog from "./component/Blog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
