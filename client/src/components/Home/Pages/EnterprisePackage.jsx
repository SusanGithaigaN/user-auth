import React from 'react'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCol, MDBRow, MDBContainer, MDBCardTitle } from 'mdb-react-ui-kit';

import './Pages.css';
import ha from '../images/ha_manager.png'


export default function EnterprisePackage() {
    return (
        <div id='engine'>
            <MDBCard alignment='center' id='enterprise-engine'>
                <MDBCardBody>
                    <h1 id='title'>Agens Enterprise Package</h1>
                    <MDBCardText>
                        Agens Enterprise Package comes with a high availability management server that<br />
                        supports backup and data monitoring dashboard that helps enterprise customers manage their data<br />
                        efficiently.
                    </MDBCardText>
                </MDBCardBody>
                {/* column grid */}
                <MDBContainer className="overflow-hidden">
                    <MDBRow className="gx-5">
                        <MDBCol>
                            <div className="p-3">
                                <p id='title'>
                                    Agens HA Manager
                                </p>
                                <MDBCardImage src={ha} alt='...' style={{ maxWidth: '100%' }}></MDBCardImage>
                            </div>
                        </MDBCol>
                        <MDBCol>
                            <div className="p-3" style={{ alignSelf: 'center' }}>
                                <p id='title'>
                                    Agens Enterprise Manager
                                </p>
                                <div className='card-list'>
                                    <MDBCard id='card-list'>
                                        <MDBCardBody id='new-cards'>
                                            <MDBCardTitle>Backup/Restore</MDBCardTitle>
                                            <MDBCardText>
                                                <ul>
                                                    <li>provides a convenient interface for backup & restore</li>
                                                    <li>provies backup & restore features for DB and table objects</li>
                                                </ul>
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                    <MDBCard id='card-list'>
                                        <MDBCardBody id='new-cards'>
                                            <MDBCardTitle>DB Monitoring Dashboard</MDBCardTitle>
                                            <MDBCardText>
                                                <ul>
                                                    <li>monitors real-time session & transaction lock</li>
                                                    <li>provides status for CPU & memory</li>
                                                </ul>
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                    <MDBCard id='card-list'>
                                        <MDBCardBody id='new-cards'>
                                            <MDBCardTitle>Schedule Management</MDBCardTitle>
                                            <MDBCardText>
                                                <ul>
                                                    <li>provides mmodule for script, SQL, and scheduling management</li>
                                                    <li>provides UX dedicated to scheduling</li>
                                                </ul>
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                    <MDBCard id='card-list'>
                                        <MDBCardBody id='new-cards'>
                                            <MDBCardTitle>Database Audit</MDBCardTitle>
                                            <MDBCardText>
                                                <ul>
                                                    <li>enables auditing via user interface</li>
                                                    <li>view audit results via user interface</li>
                                                </ul>
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                    <MDBCard id='card-list'>
                                        <MDBCardBody id='new-cards'>
                                            <MDBCardTitle>SQL Monitoring</MDBCardTitle>
                                            <MDBCardText>
                                                <ul>
                                                    <li>collects query statatistics required for perfomance analysis</li>
                                                    <li>extracts monitoring request in memory</li>
                                                </ul>
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                    <MDBCard id='card-list'>
                                        <MDBCardBody id='new-cards'>
                                            <MDBCardTitle>Perfomance Management</MDBCardTitle>
                                            <MDBCardText>
                                                <ul>
                                                    <li>monitors and collects operation status & statistical data</li>
                                                    <li>provides status reports required for improving perfomance</li>
                                                </ul>
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </div>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

            </MDBCard>
        </div>
    )
}

