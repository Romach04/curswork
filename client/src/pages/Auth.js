import React from "react";
import {Container, Form, Card, Button, Row} from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTER, REGISTATION_ROUTER } from "../utils/const";

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTER
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height : window.innerHeight- 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                    className="mt-3"
                    placeholder="Введите email"
                    />
                    <Form.Control
                    className="mt-3"
                    placeholder="Введите пароль"
                    />
                    <Row className="d-flex justify-content-between">
                        {isLogin ?
                            <div className="mt-3 pl-3">
                                <NavLink to={REGISTATION_ROUTER}>Регистрация</NavLink>
                            </div>
                        :
                            <div className="mt-3 pl-3">
                                Есть аккаунт?
                                <NavLink to={LOGIN_ROUTER}>Войдите</NavLink>
                            </div>
                        }
                        
                        <Button 
                            variant="info"
                            className="mt-3"
                        >
                            {isLogin ? "Войти" : "Регистрация"}
                        </Button>

                    </Row>
                    

                </Form>

            </Card>
            
        </Container>
    )
}

export default Auth;