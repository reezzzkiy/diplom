import React, { useContext } from 'react';
import { Route,  Routes } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '..';


const AppRouter = () => {
    // const isAuth = true
    const {user} = useContext(Context)
    const {object} = useContext(Context)
    console.log(object)
    console.log(user)
    return (
        <Routes>
            {user.isAuth  && authRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component/>} exact/>
            )}
            { publicRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component/>} exact/>
            )} 
            {/* <Redirect to={SHOP_ROUTE} /> */}
        </Routes>
            
    );
};

export default AppRouter;