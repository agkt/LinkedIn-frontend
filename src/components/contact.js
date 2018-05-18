import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import img_contact from '../img/profile_photo.png'


export default class Contact extends Component{
    constructor(){
        super();
        this.state = {

        };
    }


    render(){
        return(
            <Card className={"list_element"}>
                <div className={"row"}>
                    <div className={"col-2"}>
                        <img className={"contact_img"} src={img_contact}/>
                    </div>
                    <div className={"col-6 contact_info"}>

                        <CardTitle title={"Алексей Потапов"}/>
                        <p>Head of Marketing, ICL Services</p>
                    </div>

                    <div className={"col-4"}>
                        <CardActions>
                            <FlatButton label="Action1" />
                            <FlatButton label="Action2" />
                        </CardActions>
                    </div>
                </div>


            </Card>
        );
    }
}

