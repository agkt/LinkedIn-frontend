import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderAuth from "./components/header_auth";
import HeaderNav from "./components/header_nav";



ReactDOM.render(
    <MuiThemeProvider>
        <HeaderNav/>
    </MuiThemeProvider>,
    document.getElementById('header')
);










    //     <BrowserRouter>
    //             <Switch>
    //                 <Route exact path="/home" component={Page_home}/>
    //                 <Route exact path="/contacts" component={Contacts}/>
    //                 <Route exact path="/" component={Page_home}/>
    //             </Switch>
    //     </BrowserRouter>
    // )




