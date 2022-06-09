import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {store} from './redux/store';
import {Provider, useDispatch} from 'react-redux';

import './firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { removeUser, setUser } from "./redux/auth/userSlice";

function App() {
  
  return (
    
     <div className="wrapper">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Content />
          <Footer />
        </BrowserRouter>
      </Provider>
  </div>
    
  );
}
export default App;
