import React, { useState, useEffect } from 'react';

// librairie pour faciliter les appels AJAX
//import axios from 'axios';


// composant Switch : seulement le première route qui correspond est rendu =>
// utile pour page d'erreur 404
//import { Link, Route, Switch, Redirect } from 'react-router-dom';
// react-router-dom utilise l'API History du navigateur
// composant Route : faire un rendu conditionnel en fonction de l'URL courante

import './app.scss';


import reposData from '../../data/repos';

//import { getPostsByCategory } from '../../utils/selectors':


const App = () => {

    return (
        <div className="app">
            <div>SearchBar</div>
            <div>ReposResults</div>
            <div>Message</div>
        </div>
    );
};

export default App;