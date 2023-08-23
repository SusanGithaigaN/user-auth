// import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';

import './Pages.css'

import bitninelogo from '../images/AgenSQL-Logo.png';

export default function Main() {
    return (
        <div id='home'>
            <MDBCard alignment='center' id='home-card' className='me-3'>
                <MDBCardBody>
                    <img src={bitninelogo} alt='logo' />
                    <MDBCardTitle id='title'>An integration of Bitnine’s DB technology and PG expertise</MDBCardTitle>
                    <MDBCardText className='mdb-card-text--mb-5' id='text'>
                        AgensSQL is an all-new relational DBMS based on PostgreSQL, with years of expertise<br />
                        and knowledge accumulated through database research and development.
                    </MDBCardText>
                    <MDBCardText className='mdb-card-text--mb-5' id='text'>
                        The enterprise package, along with AgensSQL engine, is an all-in-one solution that ensures<br />
                        the efficiency and scalability of data management.
                    </MDBCardText>
                    <MDBCardText className='mdb-card-text--mb-5' id='text'>
                        Get AgensSQL now for stable operation and management services at a reduced<br />
                        maintenance cost.
                    </MDBCardText>
                    <MDBBtn className='me-5' id='btn' href='/login'>
                        LOGIN
                    </MDBBtn>
                    {/* <MDBBtn className='me-5' id='btn'>
                        BROCHURE
                    </MDBBtn>
                    <MDBBtn className='me-5' id='btn'>
                        BLOG
                    </MDBBtn> */}
                </MDBCardBody>
            </MDBCard>
        </div>
    );
}
