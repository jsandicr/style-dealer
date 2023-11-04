import { useAuth0 } from '@auth0/auth0-react';
import { LogOut } from 'lucide-react';

export const LogOutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      className="btn btn-danger btn-block flex"
      onClick={() => {
        logout();
        window.location.href = window.location.origin;
      }}
    >
      <LogOut className="mr-2 h-4 w-4" />
      Log Out
    </button>
  )
}