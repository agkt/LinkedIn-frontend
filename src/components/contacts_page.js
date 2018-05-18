import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Contact from './contact'
import "../css/contacts.css"



const Contacts = () => (
    <div className={"container"}>
        <List>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>

        </List>

    </div>
);

export default Contacts;

