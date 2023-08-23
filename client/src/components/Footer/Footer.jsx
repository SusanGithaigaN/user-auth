import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBCardText
} from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter bgColor='dark' className='text-lg-left' style={{ paddingTop: '4em' }}>
            <MDBContainer className='p-6'>
                <MDBRow>
                    <MDBCol lg='2' md='4' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase text-light fw-bold'>Products</h5>

                        <ul className='list-unstyled mb-0'>
                            <li>
                                <a href='#!' className='text-light'>
                                    Relational Database
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-light'>
                                    Graph Database
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-light'>
                                    Graph-based Solution
                                </a>
                            </li>
                        </ul>
                    </MDBCol>

                    <MDBCol lg='2' md='4' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase text-light fw-bold'>Use Cases</h5>
                    </MDBCol>

                    <MDBCol lg='2' md='4' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase text-light fw-bold'>Services</h5>
                    </MDBCol>

                    <MDBCol lg='2' md='4' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase mb-0 text-light fw-bold'>Resources</h5>

                        <ul className='list-unstyled'>
                            <li>
                                <a href='#!' className='text-light'>
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-light'>
                                    Learn
                                </a>
                            </li>
                        </ul>
                    </MDBCol>

                    <MDBCol lg='2' md='4' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase text-light fw-bold'>Blog</h5>
                    </MDBCol>

                    <MDBCol lg='2' md='4' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase text-light fw-bold'>Company</h5>

                        <ul className='list-unstyled mb-0'>
                            <li>
                                <a href='#!' className='text-light'>
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-light'>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </MDBCol>

                    <div className='d-flex justify-content-between p-2'>
                        <div className='text-left'>
                            <a className='text-light' href='https://bitnine.net'>
                                © 2023 by Bitnine Global Inc. All Rights Reserved.
                            </a>
                        </div>
                        <div className='text-light p-2 d-flex align-items-center'>
                            <MDBIcon fab icon="github" className="me-2" />
                            <MDBIcon fab icon="youtube" className="me-2" />
                            <MDBIcon fab icon="linkedin-in" className="me-2" />
                            <MDBIcon fab icon="facebook" className="me-2" />
                            <MDBCardText className='me-4 text-uppercase fw-bold'>contact</MDBCardText>
                        </div>
                    </div>

                </MDBRow>
            </MDBContainer>
            {/* 
            <div className='text-left p-3 dark'>
                &copy; {new Date().getFullYear()} Copyright:{' '}
                <a className='text-light' href='https://mdbootstrap.com/'>
                    MDBootstrap.com
                </a>
            </div> */}
        </MDBFooter>
    );
}