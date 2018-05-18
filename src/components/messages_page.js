import React, {Component} from 'react';
import MessagesList from './messages_list'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import "../css/messages.css"



export default class MessagesPage extends Component{
    render(){
        return (
            <div className="container">
                <Card className={"col-5"}>
                    <MessagesList/>
                </Card>
            </div>
        );
    }
}
