import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Main from '../pages/Main';
import OrderPage from './OrderPage';
import ProductView from './ProductView';
import LoginPage from './AuthPages/LoginPage'
import RegistrationPage from './AuthPages/RegistrationPage'
import { MyCabinetPage } from './MyCabinetPage';

const Content = () => {
    
    return (
        <div className="content">
            <Routes>
                <Route path="*" element={<Navigate to="/main" replace />} />
                <Route  path="/main" element={<Main />} />
                <Route  path="/about" element={<h1>About</h1>} />
                <Route  path="/bikes" element={<h1>Bikes</h1>} />
                <Route exact path="/bikes/:id" element={<ProductView />} />
                <Route path="/contacts" element={<h1>Contacts</h1>} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/registration" element={<RegistrationPage />} />
                <Route path="/cabinet" element={<MyCabinetPage />} />
            </Routes>
        </div>
    )
}
export default Content