import React, { useContext } from 'react';
import { Context } from '..';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTER, LOGIN_ROUTER, SHOP_ROUTER } from '../utils/const';
import {observer} from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
const NavBar = observer(() => {
    const navigate = useNavigate();
    const {user} = useContext(Context);

    const logOut = () => {
        user.setIsAuth(false)
        user.setUser({})
    }
    return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{color:'white'}} to={SHOP_ROUTER}>Электрон</NavLink>
            {user.isAuth ?
                <Nav className="ml-auto" style={{color:'white'}}>
                    <Button
                    variant='outline-light'
                    onClick={() => navigate(ADMIN_ROUTER)}
                    >Админ меню
                    </Button>
                    <Button 
                    variant='outline-light'
                    style={{marginLeft:'20px'}}
                    onClick={() => logOut()}
                    >Выйти
                    </Button>
                </Nav>
                :
                <Nav className="ml-auto" style={{color:'white'}}>
                    <Button variant='outline-light'
                    onClick={() => navigate(LOGIN_ROUTER)}>Авторизация</Button>
                </Nav>
            }
          
          
        </Container>
    </Navbar>
    );
});

export default NavBar;