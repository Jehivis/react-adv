import { BrowserRouter, Navigate, NavLink, Routes,Route } from "react-router-dom"

import logo from '../logo.svg';
export const Navigation = () => {
  return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo"/>
                    <ul>
                    <li>
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users">Users</NavLink>
                    </li>
                </ul>
                </nav>
                <Routes>
                    <Route path="about" element={<h1>about</h1>}/>
                    <Route path="users" element={<h1>user</h1>}/>
                    <Route path="home" element={<h1>home</h1>}/>
                    <Route path="/*" element={<Navigate to="/home" replace />}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
