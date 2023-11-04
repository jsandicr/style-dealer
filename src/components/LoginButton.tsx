import { useAuth0 } from '@auth0/auth0-react'
import { Button } from './ui/button';

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return(
        <Button className="whitespace-nowrap" onClick={() => loginWithRedirect()}>
            Iniciar Sesion
        </Button>
    )
}