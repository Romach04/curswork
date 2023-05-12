import React, { useContext } from 'react';
import {Context} from '../index';
import { observer } from 'mobx-react-lite';
import { Pagination } from 'react-bootstrap';
import '../App.css'
const Pages = observer( () => {
    const {devices} = useContext(Context)
    
    const pagesCount = Math.ceil(devices.totalCount / devices.limit)
    const pages = []

    for(let i = 0 ; i < pagesCount; i++ ){
        pages.push( i + 1 )
    }
    return (
        <div className='' style={{position: 'relative'}} >
            <div style={{position: 'absolute', top: '280px', left: '24px'}}>
                <Pagination>
                    {pages.map(page => 
                <Pagination.Item
                key={page}
                active={devices.page === page}
                onClick={() =>devices.setPage(page)}
                
                >{page}</Pagination.Item>
                )}
                </Pagination>
            </div>
        </div>    
            
        
    );
});

export default Pages;