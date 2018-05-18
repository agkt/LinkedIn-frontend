import React , {Component} from 'react';
import img_profile from '../img/profile_photo.png'
import img_contact from '../img/yc.png'
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';



export default class MainInfo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        }
        this.addContanct = this.addContanct.bind(this);
    }

    renderContact(name) {
        return (
            <a href="#" className="list-group-item list-group-item-action ">
                <img className="rounded-circle" src={img_contact} alt=""/> {name}
            </a>
        )
    }
    addContanct(e, name) {
        e.preventDefault();
        let spisok = this.state.contacts;
        spisok = spisok.concat(this.renderContact(name))
        this.setState({contacts: spisok})
    }

    render(){
        return (
            <div className="col-4 user_info">
                <img className={"avatar"} src={img_profile} alt=""/>

                    <h3>Алексей, 25</h3>
                    <p>Контакты</p>


                <List>
                    <ListItem
                        primaryText="Chelsea Otakan"
                        leftAvatar ={<Avatar src={img_contact} />}
                    />
                    <ListItem
                        primaryText="Chelsea Otakan"
                        leftAvatar ={<Avatar src={img_contact} />}
                    />
                    <ListItem
                        primaryText="Chelsea Otakan"
                        leftAvatar ={<Avatar src={img_contact} />}
                    />
                    <ListItem
                        primaryText="Chelsea Otakan"
                        leftAvatar ={<Avatar src={img_contact} />}
                    />
                </List>


                    {/*<div className="list-group list-group-flush">*/}
                        {/*<a href="#" className="list-group-item list-group-item-action ">*/}
                            {/*<img className="rounded-circle" src={img_contact} alt=""/> Dapibus ac facilisis in*/}
                        {/*</a>*/}
                        {/*<a href="#" className="list-group-item list-group-item-action ">*/}
                            {/*<img className="rounded-circle" src={img_contact} alt=""/> Dapibus ac facilisis in*/}
                        {/*</a>*/}
                        {/*<a href="#" className="list-group-item list-group-item-action ">*/}
                        {/*<img className="rounded-circle" src={img_contact} alt=""/> Dapibus ac facilisis in*/}
                    {/*</a>*/}
                        {/*<a href="#" className="list-group-item list-group-item-action ">*/}
                        {/*<img className="rounded-circle" src={img_contact} alt=""/> Dapibus ac facilisis in*/}
                    {/*</a>*/}
                        {/*<a href="#" className="list-group-item list-group-item-action ">*/}
                        {/*<img className="rounded-circle" src={img_contact} alt=""/> Dapibus ac facilisis in*/}
                    {/*</a>*/}
                        {/*{this.state.contacts}*/}
                    {/*</div>*/}

                    <a href="#" onClick={(e)=> {this.addContanct(e, 'swag')}}>Показать всех</a>

            </div>
        );
    }
}
