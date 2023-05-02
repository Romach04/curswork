import React, { useContext, useState } from "react";
import {Container, Form, Card, Button, Row} from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTER, REGISTATION_ROUTER, SHOP_ROUTER } from "../utils/const";
import { login, registration } from "../components/http/userApi";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
const Auth = observer(() => {
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTER

    const {user} = useContext(Context);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try{
            let data;
            if (isLogin) {
                const data = await login(email, password);
                
            } else {
                const data = await registration(email, password);

            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTER)

        } catch(e) {
            alert(e.response.data.message)
        }
        
        

        
        
    }

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
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                    className="mt-3"
                    placeholder="Введите пароль"
                    value={password}
                    type="password"
                    onChange={e => setPassword(e.target.value)}
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
                            onClick={click}
                        >
                            {isLogin ? "Войти" : "Регистрация"}
                        </Button>

                    </Row>
                    

                </Form>

            </Card>
            
        </Container>
    )
})

export default Auth;