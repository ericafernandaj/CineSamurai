import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children}) => {

    
function isLoggedIn(){
    const token = localStorage.getItem("token")
    if (token) {
        return true
    }
    else{
        return false
    }
}
  return isLoggedIn() ? children : 
  <Navigate to="/login" />;
};

export default PrivateRoute;
