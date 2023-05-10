import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchBox, UserCard } from "./components";
import FollowerContainer from "./components/FollowerContainer";
import Title from "./components/mini/Title";
import LoginButton from "./pages/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./pages/PrivateRoute";

const App = () => {
  return (
    <div className="  bg-gradient-to-b from-primary-100   flex flex-col gap-12 justify-center items-center ">
      <BrowserRouter>
        <Title />
        <Routes>
          <Route path="/login" element={<LoginButton />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
