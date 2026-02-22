
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
    const user = localStorage.getItem("userId");

    if(!user){
        return <Navigate to={"/login"} />
    }
  return children
}

export default ProtectedRoutes
