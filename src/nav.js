import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


//Components
import Page_home from './components/news_page'
import Contacts from './components/contacts_page'


const Nav = () => (
    <Router>
        <div className="Nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
            </ul>

            <Route exact path="/" component={Page_home} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/home" component={Page_home} />
        </div>
    </Router>
);

export default Nav;