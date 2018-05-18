import React, {Component} from 'react';
import "../css/profile.css";
import profile_photo from '../img/profile_photo.png'


export default class Profile extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <div className={"container"}>
                    <div className={"photo_block"}>
                        <img className={"profile_photo"} src={profile_photo}/>
                        <h3 className="name_surname">Алексей Потапов</h3>
                        <h4 className="position">Head of Marketing</h4>
                        <h4 className="companyName">ICL Services</h4>
                    </div>
                    <div className={"profile_about"}>
                        <h5>О себе</h5>
                        <div>High-level professional in marketing strategy and management. More than 11 years experience of marketing management experience in B2B marketing in IT.. Achievement of the business goals and KPI through effective lead generation, integrated marketing activities for B2B customers.
                            Broad Marketer with extensive experience of Marketing Communications, PR, Product Marketing, Digital Marketing, Customer Relationship,Market Intelligence. Strategic thinking, communication and team management skills.</div>
                    </div>
                    <div class="row">
                        <div className={"profile_education col-md-6"}>
                            <h5>Образование</h5>
                        </div>
                        <div className={"profile_experience col-md-6"}>
                            <h5>Опыт работы</h5>
                        </div>
                    </div>

                    <div class="row">
                        <div className={"profile_skills col-md-6"}>
                            <h5>Навыки</h5>
                        </div>
                        <div className={"profile_languages col-md-6"}>
                            <h5>Владение языками</h5>
                        </div>
                    </div>
                </div>
                <link property="/profile_edit">
                    <a>Редактировать</a>
                </link>

            </div>
        );
    }
}
