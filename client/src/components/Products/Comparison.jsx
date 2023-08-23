import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
} from 'mdb-react-ui-kit';

import logo from './images/AgenSQL-Logo.png'
import Table from './Table';

export default function Comparison() {
    return (
        <MDBCard alignment='center'>
            <MDBCardBody>
                <MDBCardTitle className='fw-bold fs-1'><img src={logo} alt='...' /> vs.NoSQL</MDBCardTitle>
                <MDBCardText>
                    AgensGraph is an enterprise graph database management system which stores and<br />
                    manages various types of data including relational data in your legacy system.
                </MDBCardText>
            </MDBCardBody>
            {/* table */}
            <Table />
            <MDBCard>
                <MDBCardBody>
                    <MDBCardTitle>Get Started with <span className='fw-bold'>AgensGraph!</span></MDBCardTitle>
                    <MDBBtn id='btn' className='text-uppercase'>download</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCard>
    );
}