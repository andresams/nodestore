import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

/** Bootstrap */
import { Toast } from 'react-bootstrap';
import ToastContainer from 'react-bootstrap/ToastContainer';

/** Components */
import { CartProvider } from 'react-use-cart';
import { Header } from './components/Header';

/** Pages */
import Home from './pages/Home';
import Category from './pages/Category';
import ProductPage from './pages/Product';

/** Services */
import { getAllCategories } from './services/CategoryService';

/** CSS */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/**
 * Main Aplication
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getAllCategories()
      .then((items) => {
        setCategories(items);
      });
  }, []);

  return (
        <BrowserRouter>
            <div className="App">
                <CartProvider
                    id="reactstore"
                    onItemAdd={(item) => { setShow(true); }}
                    onItemUpdate={(item) => { setShow(true); }}
                    onItemRemove={() => console.log('Item removed!')}
                >
                    <Header categories={ categories }></Header>
                    <div>
                        <div>
                            <ToastContainer className="p-3" position={ 'top-end' }>
                                <Toast onClose={() => setShow(false)} show={ show } delay={ 3000 } autohide>
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
