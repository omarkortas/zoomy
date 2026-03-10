import { Navigate } from "react-router-dom";
import { useAuth } from "../state/AuthContext";

const ProtectedRoutes = ({ element, allowedRoles }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }
 if (allowedRoles) {
  const rolesLower = allowedRoles.map(r => r.toLowerCase());
  if (!user.role || !rolesLower.includes(user.role.toLowerCase())) {
    return <Navigate to="/unauthorized" />;
  }
}

  return element;
}; 
export default ProtectedRoutes;
