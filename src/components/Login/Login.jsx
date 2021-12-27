import { useState, useContext } from 'react'
import UserContext from '../Context/userContext.jsx'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const {login} = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogin = (event) =>{
        event.preventDefault()

        const objUser = {username,password}

        login(objUser)
        navigate('/')

    }


return(

    <form className='container' onSubmit={handleLogin}>
        <h1>Iniciar Sesión</h1>
        <div className="mb-3">
            <label htmlFor="text" className="form-label">Usuario</label>
            <input type='text' className="form-control" id="exampleInputUser" aria-describedby="emailHelp" value={username} onChange={({target}) => setUsername(target.value)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={({target})=>setPassword(target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Ingresar</button>
    </form>
)
}

export default Login