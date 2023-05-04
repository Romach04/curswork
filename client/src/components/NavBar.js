import React, { useContext } from 'react';
import { Context } from '..';

import {Image} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTER, BASKET_ROUTER, LOGIN_ROUTER, SHOP_ROUTER } from '../utils/const';
import {observer} from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/img/blackLogo.jpg'
const NavBar = observer(() => {
    const navigate = useNavigate();
    const {user} = useContext(Context);

    const logOut = () => {
        user.setIsAuth(false)
        user.setUser({})
    }
    return (
    <Navbar style={{fontFamily:  'Roboto , sans-serif'}} bg="dark" variant="dark">
        <Container>
          <NavLink style={{color:'white'}} to={SHOP_ROUTER}>Электрон</NavLink>
          <Image  width={30} height={30} className='me-auto ms-2' src={logo}/>

          
            {user.isAuth ?
                <Nav className="ml-auto" style={{color:'white'}}>
                    <Button
                    variant='outline-light'
                    onClick={() => navigate(ADMIN_ROUTER)}
                    >Админ меню
                    </Button>
                    <Button 
                    variant='danger'
                    style={{marginLeft:'20px'}}
                    onClick={() => logOut()}
                    >Выйти
                    </Button>
                    <Button
                    variant='warning'
                    style={{marginLeft:'20px'}}
                    className='ml-2'
                    onClick={() => navigate(BASKET_ROUTER)}>
                        Корзина
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