import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

// import images
import passwords from '../images/Password-Profile.png';
import data from '../images/Data-Redaction.png';
import auditing from '../images/Auditing.png';

export default function Cards() {
  return (
    <div className="d-flex justify-content-center" style={{margin: '0%'}} id='security-cards'>
      <MDBRow className='row-cols-1 row-cols-md-3 g-3 d-flex justify-content-center'>
        <MDBCol md='3'>
          <MDBCard>
            <MDBCardImage
              src={passwords}
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
        <MDBCol md='3'>
          <MDBCard>
            <MDBCardImage
              src={data}
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
        <MDBCol md='3'>
          <MDBCard>
            <MDBCardImage
              src={auditing}
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
        </MDBCol>
      </MDBRow>
    </div>
  );
}