import React, {Component} from 'react';
import "../css/profile_edit.css";
import profile_photo from '../img/profile_photo.png'


export default class Profile extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className={"profile container"}>
                <form>
                    <div className={"photo_block clearfix"}>
                        <div class="user_photo">
                            <input className={"add_photo"} id="photo" type="file"/></div>
                        <input id="name" type="text" className={"form-control"} placeholder="Имя"/>
                        <input id="surname" type="text" className={"form-control"} placeholder="Фамилия"/>
                        <input id="position" type="text" className={"form-control"} placeholder="Должность"/>
                        <input id="companyName" type="text" className={"form-control"} placeholder="Название компании"/>
                    </div>
                    <h5>О себе</h5>
                    <div className={"profile_about clearfix"}>
                        <textarea className={"form-control"} rows="2" id="comment" placeholder="Расскажите о себе"/>
                    </div>

                    <div className={"row"}>
                        <div className={"col-md-4 profile_skills clearfix"}>
                            <h5>Навыки</h5>
                            <label>Ключевые навыки
                                <input id="skills" type="text" className={"form-control"} placeholder=""/>
                                <a href="#">Добавить еще</a>
                            </label>

                        </div>
                        <div className={"col-md-4 profile_courses clearfix"}>
                            <h5>Курсы</h5>
                            <label>Название курсов
                                <input id="courses" type="text" className={"form-control"} placeholder=""/>
                                <a href="#">Добавить еще</a>
                            </label>
                        </div>
                        <div className={"col-md-4 profile_patents clearfix"}>
                            <h5>Патенты</h5>
                            <label>Ваши патенты
                                <input id="patents" type="text" className={"form-control"} placeholder=""/>
                                <a href="#">Добавить еще</a>
                            </label>
                        </div>
                    </div>

                    <h5>Опыт работы</h5>
                    <div className={"row"}>
                        <div className={"col-md-4 profile_expereince clearfix"}>
                            <label>Компания
                                <input type="text" id="company" list="company_list" className={"form-control"}/>
                                <datalist id="company_list">
                                    <option>КФУ Высшая школа информационных технологий и инфорационных систем</option>
                                    <option>КФУ Высшая школа информационных технологий и инфорационных систем</option>
                                    <option>КФУ Высшая школа информационных технологий и инфорационных систем</option>
                                    <option>КФУ Высшая школа информационных технологий и инфорационных систем</option>
                                </datalist>
                                <a href="#">Добавить еще</a>
                            </label>
                        </div>
                        <div className={"col-md-4 profile_expereince clearfix"}>
                            <label>Должность
                                <input id="company_position" type="text" className={"form-control"} placeholder=""/>
                            </label>
                        </div>
                        <div className={"col-md-4 profile_expereince clearfix"}>
                            <label>Стаж
                                <input id="language" type="text" className={"form-control"} placeholder=""/>
                            </label>
                        </div>
                    </div>
                    <h5>Высшее образование</h5>
                    <div className={"row"}>
                        <div className={"col-md-4 profile_education clearfix"}>
                            <label>Вуз
                                <input type="text" id="education" list="education_list" className={"form-control"}/>
                                <datalist id="education_list">
                                    <option>КФУ Высшая школа информационных технологий и инфорационных систем</option>
                                    <option>КФУ Высшая школа информационных технологий и инфорационных систем</option>
                                    <option>КФУ Высшая школа информационных технологий и инфорационных систем</option>
                                    <option>КФУ Высшая школа информационных технологий и инфорационных систем</option>
                                </datalist>
                                <a href="#">Добавить еще</a>
                            </label>
                        </div>
                        <div className={"col-md-4 education_fromDate clearfix"}>
                            <label> Год начала обучения
                                <input type="number" id="fromDate" className={"form-control"}/>
                            </label>
                        </div>
                        <div className={"col-md-4 education_toDate clearfix"}>
                            <label> Год конца обучения
                                <input type="number" id="toDate" className={"form-control"}/>
                            </label>
                        </div>
                    </div>

                    <h5>Сертификаты</h5>
                    <div className={"row"}>
                        <div className={"col-md-4 profile_certificate clearfix"}>
                            <label>Название
                                <input type="text" id="certificate" className={"form-control"}/>
                                <a href="#">Добавить еще</a>
                            </label>
                        </div>
                        <div className={"col-md-4 certificate_fromDate clearfix"}>
                            <label> Год получения
                                <input type="number" id="fromDate" className={"form-control"}/>
                            </label>
                        </div>
                        <div className={"col-md-4 certificate_toDate clearfix"}>
                            <label> Действует до
                                <input type="number" id="toDate" className={"form-control"}/>
                            </label>
                        </div>
                    </div>

                    <h5>Публикации</h5>
                    <div className={"row"}>
                        <div className={"col-md-4 profile_publications clearfix"}>
                            <label>Название
                                <input type="text" id="publications" className={"form-control"}/>
                                <a href="#">Добавить еще</a>
                            </label>
                        </div>
                        <div className={"col-md-4 education_description clearfix"}>
                            <label> Описание
                                <input type="text" id="description" className={"form-control"}/>
                            </label>
                        </div>
                        <div className={"col-md-4 education_date clearfix"}>
                            <label> Дата публикации
                                <input type="number" id="date" className={"form-control"}/>
                            </label>
                        </div>
                    </div>

                    <h5>Владение языками</h5>
                    <div className={"row"}>
                        <div className={"col-md-6 language clearfix"}>
                            <label>Язык
                                <input id="language" type="text" className={"form-control"} placeholder=""/>
                                <a href="#">Добавить еще</a>
                            </label>
                        </div>
                        <div className={"col-md-6 language_level clearfix"}>
                            <label>Уровень
                                <input id="level" type="text" className={"form-control"} placeholder=""/>
                            </label>
                        </div>
                    </div>


                    <button type="button" className={"btn btn-primary"}>Сохранить</button>
                    <button type="button" className={"btn btn-light"}>Отмена</button>
                </form>
            </div>
        );
    }
}
