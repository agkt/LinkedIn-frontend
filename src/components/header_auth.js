import React from 'react';

export default class HeaderAuth extends React.Component{
    render(){
        return(
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand " href="#">Logo</a>

                    <form className="form-inline login_div justify-content-end">
                        <input className="form-control mr-sm-2" type="text" placeholder="E-mail"/>
                            <input className="form-control mr-sm-2" type="text" placeholder="Пароль"/>
                                <button className="btn my-2" type="submit">Войти</button>
                    </form>
                </nav>
            </header>

        );
    }
}




