import React, {Component} from 'react';
import "../css/home.css"
import axios from "axios"
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Publication from "./news_publication";


export default class NewsPage extends Component{

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        axios.get('')
            .then((response) => {
                const news = response.data.map(c => {
                    return {
                        id: c.id,
                        name: c.name
                    };
            })
            .catch((response) => {

            });
        })
    }


    render(){
        return (
            <div className="container">
                <div className="col-8 news_board">
                    <div className="form-group">
                        <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                    </div>
                    <FloatingActionButton>
                        <input className={"file_icon"} type="file"/>
                        <ContentAdd />
                    </FloatingActionButton>



                    <div className={"list-group list-group-flush news_list"}>

                        <div className={"news_list_element"}>
                            <Publication/>
                        </div>
                        <div className={"news_list_element"}>
                            <Publication/>
                        </div>
                        <div className={"news_list_element"}>
                            <Publication/>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
