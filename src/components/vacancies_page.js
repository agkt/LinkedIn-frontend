import React from 'react';
import Vacancy from './vacancy'
import {List, ListItem} from 'material-ui/List';
import "../css/vacancy.css"



const Vacancies = () => (
    <div className={"container"}>
        <List>
            <Vacancy/>
            <Vacancy/>
            <Vacancy/>
            <Vacancy/>
            <Vacancy/>

        </List>
    </div>
);

export default Vacancies;
