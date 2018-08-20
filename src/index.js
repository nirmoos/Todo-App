import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

import todoApp from './Reducers';

import './index.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Todo from './Components/Todo';

const store = createStore(todoApp);

// console.log(store);
// debugger;

ReactDOM.render(
     <main>
          <Header />
          <Todo store={store} />
          <Footer />
     </main>,
     document.getElementById('root')
);
