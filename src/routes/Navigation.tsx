import {  BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
 
import react from '../assets/react.svg';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';
import { FormikAbstractPage, RegisterFormikPage, FormikBasicPage, FormikComponentPage, FormikYupPage, RegisterPage, DynamicForm } from '../03-forms/pages';
 
export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className='main-layout'>
            <nav>
              <img src={ react } alt="React Logo" />
              <ul>
                <li>
                  <NavLink to="/register" className={ ({isActive}) => isActive?'nav-active':'' }>Register Page</NavLink>
                </li><li>
                  <NavLink to="/register-formik" className={ ({isActive}) => isActive?'nav-active':'' }>Register Formik Page</NavLink>
                </li>
                <li>
                  <NavLink to="/formik" className={ ({isActive}) => isActive?'nav-active':'' }>Formik Basic Page</NavLink>
                </li>
                <li>
                  <NavLink to="/dynamic-form" className={ ({isActive}) => isActive?'nav-active':'' }>Dynamic Form Page</NavLink>
                </li>
                <li>
                  <NavLink to="/formik-yup" className={ ({isActive}) => isActive?'nav-active':'' }>Formik Yup Page</NavLink>
                </li>
                <li>
                  <NavLink to="/formik-component" className={ ({isActive}) => isActive?'nav-active':'' }>Formik Component Page</NavLink>
                </li>
                <li>
                  <NavLink to="/formik-abstract" className={ ({isActive}) => isActive?'nav-active':'' }>Formik Abstract Page</NavLink>
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
              <Route path="register" element={ <RegisterPage /> } />
              <Route path="register-formik" element={ <RegisterFormikPage /> } />
              <Route path="dynamic-form" element={ <DynamicForm /> } />
              <Route path="formik" element={ <FormikBasicPage /> } />
              <Route path="formik-yup" element={ <FormikYupPage /> } />
              <Route path="formik-component" element={ <FormikComponentPage /> } />
              <Route path="formik-abstract" element={ <FormikAbstractPage /> } />
              <Route path="users" element={ <h1>Users</h1> } />
              <Route path="/*" element={<ShoppingPage />} />
            </Routes>
 
        </div>
    </BrowserRouter>
  )
}