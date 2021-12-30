import { useContext } from "react";
import { Navigate} from "react-router-dom";
import UserContext from '../Context/userContext'

const PrivateRoute = ({children, ...rest}) => {
    const {user} = useContext(UserContext)
    console.log(user)
// Me lleva a inicio y no puedo logeuarme nunca
    return user? {children}: <Navigate to={'/login'}/>
}

export default PrivateRoute