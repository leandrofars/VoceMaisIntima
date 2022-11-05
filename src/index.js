import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './components/login/login';
import App from './App';
import PaginaDeProduto from './components/product_page/paginaDeProduto';

import Admin from './components/admin/admin';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/admin' element={<Admin />} />
        <Route exact path='produto/:id' element={< PaginaDeProduto />} />
    </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
