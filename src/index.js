import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import Badge from './components/Badge';

const container = document.getElementById('app');

//los props son los atributos de nuestros componentes
ReactDOM.render(
    <Badge 
        firstName="Angel" 
        lastName="Castro" 
        avatarURL ="https://es.gravatar.com/avatar" 
        jobTitle="Software Developer" 
        twitter="NaYpE"
    />,
    container);
