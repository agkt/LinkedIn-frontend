import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




//Components
import Home from './news_page'
import Contacts from './contacts_page'
import Vacancies from './vacancies_page'
import Messages from './messages_page'
import Profile from './profile_page'

export default class HeaderNav extends React.Component{




    render(){
        return(
            <header>

                <Router>
                    <div className="Nav">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <Link className="navbar-brand " to="/">Logo</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">Главная</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contacts">Контакты</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/vacancies">Вакансии</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/messages">Сообщения</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">Профиль</Link>
                                </li>
                            </ul>

                        </div>
                    </nav>
                        <Route exact path="/" component={Contacts} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/contacts" component={Contacts} />
                        <Route exact path="/vacancies" component={Vacancies} />
                        <Route exact path="/messages" component={Messages} />
                        <Route exact path="/profile" component={Profile} />



                    </div>
                </Router>
            </header>
        );
    }
}