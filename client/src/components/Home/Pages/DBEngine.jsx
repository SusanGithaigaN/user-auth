import React from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';

import './Pages.css'
import Cards from './Cards';


export default function DBEngine() {
    return (
        <div id='db-engine'>
            <MDBCard alignment='center' id='engine'>
                <MDBCardBody>
                    <h1 id='main-title'>AgensSQL DB Engine</h1>
                    <MDBCardTitle id='title' style={{ textDecoration: 'underline', margin: '2%' }}>Enhanced Data Security</MDBCardTitle>
                    <MDBCardText>
                        AgensSQL is a PostgreSQL-based DBMS<br />
                        that guarantees optimal security and stability.
                    </MDBCardText>
                    <Cards />
                </MDBCardBody>
            </MDBCard>        
        </div>
    )
}
