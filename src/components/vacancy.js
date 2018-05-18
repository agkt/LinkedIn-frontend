import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import img_vacancy from '../img/vacancy_img.png'


const Vacancy = () => (

    <Card className={"list_element"}>
        <div className={"row"}>
        <div className={"col-3 "}>
            <img className={"vacancy_img"} src={img_vacancy}/>
        </div>
        <div className={"col-7"}>
            <CardTitle title={"GDC (Fujitsu preferred supplier of Services)"}/>

            <CardText>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <a href="#" >Подробнее</a>

        </div>
    </div>

        <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
        </CardActions>
    </Card>
);

export default Vacancy;