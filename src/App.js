import Home from "./components/Home";
import "./App.css";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import AddUser from "./components/AddUser";
import store from "./redux/store";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/update/:id" element={<AddUser />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
