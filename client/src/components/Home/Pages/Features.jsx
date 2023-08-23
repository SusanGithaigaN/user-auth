import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';

import features from '../images/features.png'
import './Pages.css'

export default function Features() {
  return (
    <div id='features'>
      <MDBCard alignment='center' style={{boxShadow: 'none'}}>
        <MDBCardBody>
          <MDBCardTitle id='main-title'>Key features</MDBCardTitle>
          <MDBCardText>
            Manage your data with Agens Enterprise Package<br />
            Essential enterprise features such as high availability and sharding are provided.
          </MDBCardText>
          <MDBCardImage src={features} fluid alt='...' style={{ maxWidth: '60%', padding: '2%' }}></MDBCardImage>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}