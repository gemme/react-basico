    import { Navigate, Outlet } from 'react-router';


    interface ProtectedRouteProps {
        isAuthenticated: boolean;
    }

    export const ProtectedRoute = ({ isAuthenticated }:ProtectedRouteProps) => {
      if (!isAuthenticated) {
        // Redirect to login page if not authenticated
        return <Navigate to="/login" replace />;
      }
      // Render child routes if authenticated
      return <Outlet />;
    };