import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import ProductPage from './pages/Product';
import { Header } from './components/Header';
import { getAllCategories } from './services/CategoryService';
import { CartProvider } from "react-use-cart";
import { Toast } from 'react-bootstrap';
import ToastContainer from 'react-bootstrap/ToastContainer'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const [categories, setCategories] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        getAllCategories()
            .then(categories => {
                setCategories(categories);
            });
    }, []);

    return (
        <BrowserRouter>
            <div className="App">
                <CartProvider
                    id="reactstore"
                    onItemAdd={item => { setShow(true) }}
                    onItemUpdate={item => { setShow(true) }}
                    onItemRemove={() => console.log(`Item removed!`)}
                >
                    <Header categories={ categories }></Header>
                    <div className="row" id="main">
                        <div>
                            <ToastContainer className="p-3" position={ "top-center" }>
                                <Toast position={ "top-end" } onClose={() => setShow(false)} show={ show } delay={ 3000 } autohide>
                                    <Toast.Header>
                                        <strong className="me-auto">Success!</strong>
                                    </Toast.Header>
                                    <Toast.Body>Product added to the Shopping Cart!</Toast.Body>
                                </Toast>
                            </ToastContainer>
                        </div>
                        <Route path="/" exact={true} component={Home}/>
                        <Route path="/category/:id" exact={true} component={Category}/>
                        <Route path="/product/:id" exact={true} component={ProductPage}/>
                    </div>
                </CartProvider>
            </div>
        </BrowserRouter>
    );
}

export default App;