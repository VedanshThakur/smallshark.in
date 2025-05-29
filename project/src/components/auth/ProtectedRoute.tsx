import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRole: 'investor' | 'startup';
}

const ProtectedRoute = ({ children, allowedRole }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();
  
  // Show loading indicator while auth state is being checked
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  // Redirect to appropriate dashboard if role doesn't match
  if (user.role !== allowedRole) {
    return <Navigate to={`/dashboard/${user.role}`} replace />;
  }
  
  // Render the protected component
  return <>{children}</>;
};

export default ProtectedRoute;