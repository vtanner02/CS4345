import { Navigate, useRoutes } from 'react-router-dom';
import Login from './components/login'
import Register from './components/register'
export default function Router(){
    return useRoutes([
        {
            path:'/',
            children:[
                { path:'/', element: <Navigate to="/login"/>},
                { path: 'login', element: <Login />},
                { path: 'register', element: <Register /> }
            ]
        },
        
    ]);
}