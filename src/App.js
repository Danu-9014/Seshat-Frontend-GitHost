import Authors from "./pages/Authors";
import ChildBook from "./pages/ChildBook";
import ChildHome from "./pages/ChildHome";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Children from "./pages/Children";
import "./styles.css";
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    // <div className="App">
    //   {/* <Dashboard /> */}
    //   {/* <Login/> */}
    //   {/* <Register/> */}
    //   {/* <ChildHome/> */}
    //   <ChildBook/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" name="home" element={<ChildHome />} />
        <Route path="/login" name="login" element={<Login />} />
        <Route path="/register" name="register" element={<Register />} />
        <Route path="/dashboard" name="dashboard" element={<Dashboard />} />
        <Route path="/childbook" name="childbook" element={<ChildBook />} />
        <Route path="/children" name="children" element={<Children />} />
        <Route path="/authors" name="authors" element={<Authors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
