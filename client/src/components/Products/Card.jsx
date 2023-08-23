import React from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit';
import agensLogo from './images/AgenSQL-Logo.png'

export default function Card() {
    return (
        <div id='logo-card' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <MDBCard alignment='center' className='shadow-5 w-50' >
                <MDBCardBody>
                    <MDBCardTitle className='text-uppercase fs-1' id='why'>w.h.y. ?</MDBCardTitle>
                    <img src={agensLogo} alt='logo' />
                </MDBCardBody >
            </MDBCard >
        </div>
    )
}
