import {  BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
 
import react from '../assets/react.svg';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';
 
export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className='main-layout'>
            <nav>
              <img src={ react } alt="React Logo" />
              <ul>
                <li>
                  <NavLink to="/" className={ ({isActive}) => isActive?'nav-active':'' }>Shopping</NavLink>
                </li>
                <li>
                  <NavLink to="/About" className={ ({isActive}) => isActive?'nav-active':'' }>About</NavLink>
                </li>
                <li>
                  <NavLink to="/Users" className={ ({isActive}) => isActive?'nav-active':'' }>Users</NavLink>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path="about" element={ <h1>About</h1> } />
              <Route path="users" element={ <h1>Users</h1> } />
              <Route path="/*" element={<ShoppingPage />} />
            </Routes>
 
        </div>
    </BrowserRouter>
  )
}