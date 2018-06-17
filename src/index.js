import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login/Login'
import registerServiceWorker from './registerServiceWorker';
import Maps from './maps/Maps'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';


ReactDOM.render(<Router>
    <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/farejar" component={Maps} />
    </div>
</Router>, document.getElementById('root'));
registerServiceWorker();
