/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from "react";
import { Container, Form, Row, Col, Image, Card} from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from '../index';

import { getBasket } from "../components/http/deviceApi";

    const Basket = () => {
        return (
            <Container>
                <h2  className="mt-5" style={{textAlign: 'center'}}>Корзина пуста</h2>
            </Container>
        )
    }




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