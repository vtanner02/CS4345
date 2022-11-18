import { Navigate, useRoutes } from 'react-router-dom';
import Login from './components/login'
import Register from './components/register'
import Dashboard from './components/dashboard'
import PostJobForm from './components/postjobform';
import ViewApps from './components/viewapps';
export default function Router(){
    return useRoutes([
        {
            path:'/',
            children:[
                { path:'/', element: <Navigate to="/login"/>},
                { path: 'login', element: <Login />},
                { path: 'register', element: <Register /> },
                { path: 'dashboard', element: <Dashboard />},
                { path: 'postjob/:userID', element: <PostJobForm />},
                { path: 'viewapps', element: <ViewApps />}
            ]
        },
        
    ]);
}