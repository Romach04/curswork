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
            <div style={{marginTop: '150px', marginLeft: '25px'}}>
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
            
        
    );
});

export default Pages;