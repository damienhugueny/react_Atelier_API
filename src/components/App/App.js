import React, { useState, useEffect } from 'react';

// librairie pour faciliter les appels AJAX
//import axios from 'axios';

// composant Switch : seulement le première route qui correspond est rendu =>
// utile pour page d'erreur 404
//import { Link, Route, Switch, Redirect } from 'react-router-dom';
// react-router-dom utilise l'API History du navigateur
// composant Route : faire un rendu conditionnel en fonction de l'URL courante

import Header from '../Header/Header';


import './app.scss';

import reposData from '../../data/repos';




// TODO : faire une jolie page d'erreur 404:



const App = () => {

  
    return (
        <div className="app">
            <Header />
            <div>searchBar</div>
            <div>Results</div>
            <div>Messages</div>
        </div>
    );
}

export default App;