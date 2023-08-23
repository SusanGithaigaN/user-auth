import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBListGroup,
    MDBListGroupItem,
    MDBCardFooter
} from 'mdb-react-ui-kit';

import './Products.css'

export default function Enterprise() {
    return (
        <div id='enterprise-ed'>
            <MDBCard alignment='center' id='card-body'>
                {/* <MDBCardHeader>Featured</MDBCardHeader> */}
                <MDBCardBody>
                    <MDBCardTitle className='fw-bold'>Why should I use</MDBCardTitle>
                    <MDBCardText className='fs-1 fw-bold'>Enterprise Edition?</MDBCardText>
                    <MDBCardText>
                        AgensGraph Enterprise Edition comes along with all the great features of our AgensGraph Community Edition but provides even more core<br />
                        capabilities for enterprises to stay universally connected to stable and efficient data. This includes monitoring, memory optimization, high<br />
                        availability, enhanced user environments, in addition to providing on-going professional support.
                    </MDBCardText>
                    <MDBCardText className='fs-6 m-4'>
                        ....................................................................................
                    </MDBCardText>
                </MDBCardBody>

                <MDBRow className='m-4'>
                    <MDBCol md='6'>
                        <MDBCardTitle className='fs-1 fw-bold'>Customer Support</MDBCardTitle>
                        <MDBCardText>
                            We provide support by Agens support portal, e-mail and on-site for<br />
                            our customers who purchased AgensGraph Enterprise Edition with<br />
                            our commercial license.<br />
                            There are several grades in terms of our license agreement, and the<br />
                            range and the level of services we provide to our customers are<br />
                            different upon the contract contents they have.
                        </MDBCardText>
                        <MDBCard>
                            <MDBListGroup flush>
                                <MDBListGroupItem className='fw-bold fs-3 text-light bg-dark' id='heading'>Technical Support</MDBListGroupItem>
                                <MDBListGroupItem className='fs-5'>Community Edition <br />- </MDBListGroupItem>
                                {/* <MDBListGroupItem className='fw-bold'>Enterprise Edition</MDBListGroupItem> */}
                            </MDBListGroup>
                            <MDBCardFooter>
                                <p className='fw-bold'>Enterprise Edition</p><br />
                                24×7 or 8×5 Online Support (e-mail / Agens support portal)<br />
                                Professional On-site Support(separately costs)
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='6'>
                        <MDBCardTitle className='fs-1 fw-bold'>License Agreement</MDBCardTitle>
                        <MDBCardText>
                            License terms for using our products are currently under two <br />
                            license agreements — Apache 2.0 and our Commercial License.<br />
                            Our Commercial License consists of three different license terms and<br />
                            if you want more details about our license agreements, please<br />
                            contact us by e-mail or our website.
                        </MDBCardText>
                        <br />
                        <MDBCard>
                            <MDBListGroup flush>
                                <MDBListGroupItem className='fw-bold fs-3 text-light bg-dark' id='heading'>License</MDBListGroupItem>
                                <MDBListGroupItem className='fs-5'>Community Edition<br />Apache 2.0</MDBListGroupItem>
                                {/* <MDBListGroupItem className='fw-bold'>Enterprise Edition</MDBListGroupItem> */}
                            </MDBListGroup>
                            <MDBCardFooter>
                                <p className='fw-bold'>Enterprise Edition</p><br />
                                Commercial
                                <hr />
                                <MDBRow className='my-3'>
                                    <MDBCol className='text-center'>
                                        <span className='px-2'>Evaluation</span>
                                    </MDBCol>
                                    <MDBCol className='text-center'>
                                        <span className='px-2'>Development</span>
                                    </MDBCol>
                                    <MDBCol className='text-center'>
                                        <span className='px-2'>Production</span>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
            <MDBBtn id='btn' className='text-uppercase'>contact us</MDBBtn>
        </div>
    );
}