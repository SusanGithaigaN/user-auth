import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCardImage,
    MDBCol
} from 'mdb-react-ui-kit';

import './Products.css';

export default function GraphDB() {
    return (
        <div id='graph-db'>
            <MDBCard alignment='center' style={{ boxShadow: 'none' }}>
                <MDBCardBody style={{ backgroundColor: 'rgb(243, 246, 251)' }}>
                    <MDBCardTitle className='fw-bold'>Fast, Always-On, and Extensive</MDBCardTitle>
                    <MDBCardText className='fw-bold fs-1'>Enterprise Graph Database</MDBCardText>
                </MDBCardBody>
                <div className='d-flex justify-content-center'>
                    <MDBRow className='row-cols-1 row-cols-md-3 g-4 justify-content-center' >
                        <MDBCol>
                            <MDBCard>
                                <MDBCardImage
                                    src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                                    alt='...'
                                    position='top'
                                />
                                <MDBCardBody>
                                    <MDBCardTitle>Card title</MDBCardTitle>
                                    <MDBCardText>
                                        This is a longer card with supporting text below as a natural lead-in to additional content.
                                        This content is a little bit longer.
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard>
                                <MDBCardImage
                                    src='https://mdbootstrap.com/img/new/standard/city/042.webp'
                                    alt='...'
                                    position='top'
                                />
                                <MDBCardBody>
                                    <MDBCardTitle>Card title</MDBCardTitle>
                                    <MDBCardText>
                                        This is a longer card with supporting text below as a natural lead-in to additional content.
                                        This content is a little bit longer.
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard>
                                <MDBCardImage
                                    src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                                    alt='...'
                                    position='top'
                                />
                                <MDBCardBody>
                                    <MDBCardTitle>Card title</MDBCardTitle>
                                    <MDBCardText>
                                        This is a longer card with supporting text below as a natural lead-in to additional content.
                                        This content is a little bit longer.
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </div>
            </MDBCard>
        </div>
    );
}