/* eslint-disable no-lone-blocks */
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '..';
import { getBasket } from '../components/http/deviceApi'

import { Card, Col, Container, Row, Image } from 'react-bootstrap'
import { observer } from 'mobx-react-lite';
import '../App.css'


const Basket = observer(() => {
    const {devices} = useContext(Context)

    useEffect(() => {
        getBasket().then(data => devices.setBaskets(data))
    }, [])



    // ----- Считаем общую сумму, которую юзер набрал в корзину ------- //

    let prices = 0;
    {devices.basket.map(price =>
        prices += Number(price.device.price)
    )}
    return (
        <Container
            className="d-flex flex-sm-column justify-content-center align-items-center mt-3 font-roboto"
        >
            <h1 className="pb-2 mt-5">Корзина</h1>

            <div className="d-flex flex-row  p-2 justify-content-between align-items-center mb-2">
                <h2 className="pr-2">Итого:</h2>
                <h2 className="pl-2">{`${prices} ₽`}</h2>
            </div>



            {devices.basket.map(product =>
                <Card className="d-flex w-100 p-2 justify-content-center mb-4" key={product.id}>
                    <Row className="d-flex w-100">
                        <Col>
                            <div className="d-flex flex-row align-items-center">
                                <Image src={process.env.REACT_APP_API_URL + product.device.img} width={50} />
                                <h1 className="pl-3">{product.device.name}</h1>
                            </div>
                        </Col>
                        <Col>
                            <div className="d-flex h-100 flex-row justify-content-end align-items-center">
                                <h2 className="font-weight-light">{product.device.price} ₽</h2>
                            </div>
                        </Col>
                    </Row>

                </Card>
            )}
        </Container>
    );
});

export default Basket;












































// const Basket = observer(() => {
    //     const {devices} = useContext(Context)
    
    //     useEffect(() => {
    //         getBasket().then(data => devices.setBaskets(data))
    //     }, [])
    
    
    
    //     ----- Считаем общую сумму, которую юзер набрал в корзину ------- //
    
    //     let prices = 0;
    //     {device.basket.map(price =>
    //         prices += Number(price.device.price)
    //     )}
    //     return (
    //         <Container
    //             className="d-flex flex-sm-column justify-content-center align-items-center mt-3"
    //         >
    //             <h1 className="pb-2">Корзина</h1>
    
    
    
    //             {/* ------- Считаем общую сумму ------- */}
    
    //             <Card className="d-flex flex-row  p-2 justify-content-between align-items-center mb-2">
    //                 <h1 className="pr-2">Итого:</h1>
    //                 <h3 className="pl-2">{}<span className="font-weight-light pl-2">рублей</span></h3>
    //             </Card>
    
    
    
    //             {devices.basket && devices.basket.map(product =>
    //                 <Card className="d-flex w-100 p-2 justify-content-center mb-2" key={product.id}>
    //                     <Row className="d-flex w-100">
    //                         <Col>
    //                             <div className="d-flex flex-row align-items-center">
    //                                 <Image src={process.env.REACT_APP_API_URL + product.device.img} width={50} />
    //                                 <h1 className="pl-3">{product.device.name}</h1>
    //                             </div>
    //                         </Col>
    //                         <Col>
    //                             <div className="d-flex h-100 flex-row justify-content-end align-items-center">
    //                                 <h2 className="font-weight-light">{product.device.price} рублей</h2>
    //                             </div>
    //                         </Col>
    //                     </Row>
    
    //                 // </Card>
    //                 <div>{product.id} = </div>
    //             )}
    //         </Container>
    //     );
    // });