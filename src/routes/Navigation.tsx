import { BrowserRouter, Navigate, NavLink, Routes,Route } from "react-router-dom"
import { routes } from "./routes";


import logo from '../logo.svg';

//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages"

export const Navigation = () => {
  return  (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo"/>
                    <ul>
                        {routes.map((route) => {
                            return(
                                <li key={route.to}>
                                    <NavLink to={route.to} className={({isActive})=> isActive ? 'nav-active': ''} >{route.name}</NavLink>
                                </li>
                            )
                        })};
                   </ul>
                </nav>
                <Routes>
                {routes.map((route) => {
                            return(
                                <Route 
                                    key={route.to}
                                    path={route.path} 
                                    element={< route.Component />}/>
                            )
                        })};
                    
                    <Route path="/*" element={<Navigate to="/lazy1" replace />}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
