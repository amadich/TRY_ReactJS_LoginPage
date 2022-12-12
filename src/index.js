import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Aside from './aside';

ReactDOM.render(<Header />,document.getElementsByTagName("header")[0]);
ReactDOM.render(<Aside />,document.getElementsByTagName('aside')[0]);