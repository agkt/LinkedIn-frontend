import React, {Component} from 'react';



export default class Publication extends Component{
    constructor(props) {
        super(props);
    }



    render() {
        return(
            <div>
                {this.props.header}
                {this.props.body}
                {this.props.author_id}
                {this.props.attachments}
            </div>

        );
    }
}


