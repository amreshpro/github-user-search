import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchBox, UserCard } from "./components";
import FollowerContainer from "./components/FollowerContainer";
import Title from "./components/mini/Title";
import LoginButton from "./pages/LoginButton";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./pages/PrivateRoute";
import { useAuth0 } from "@auth0/auth0-react";
import AuthCover from "./pages/AuthCover";


const App = () => {
  const {isAuthenticated} = useAuth0()
  return (
    <AuthCover>
      
    <div className="  bg-gradient-to-b from-primary-100   flex flex-col gap-12 justify-center items-center ">
      <BrowserRouter>
        <Title />
     
        <Routes>
          <Route
            path="/"
            element={
            
            <PrivateRoute>
                  <Dashboard />
            </PrivateRoute>
        
            }
          />
          <Route path="login" element={<LoginButton />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
    </AuthCover>
  );
};
export default App;
