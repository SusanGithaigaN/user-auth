import React from 'react'
import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBBtn } from 'mdb-react-ui-kit';
import '../Products/Products.css';
import SqlCipher from './SqlCipher';


import Card from './Card';
import GraphDB from './GraphDB';
import Comparison from './Comparison';
import Enterprise from './Enterprise';

export default function Products() {
    return (
        <div id='products'>
            <MDBCard style={{boxShadow: 'none'}}>
                <MDBCardBody id='main'>
                    <MDBCardTitle id='graph-title' className='fw-bold fs-1'>AgensGraph</MDBCardTitle>
                    <MDBCardText>AgensGraph is an enterprise graph database management system which stores and<br />
                        manages various types of data including relational data in your legacy system.</MDBCardText>
                </MDBCardBody>
            </MDBCard>
            <Card />
            <SqlCipher />
            <MDBCard>
                <MDBCardBody>
                    <MDBCardTitle>More information about <span className='fw-bold'>Cypher</span></MDBCardTitle>
                    <MDBBtn id='btn'>READ MORE</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            {/* enterprise graph database */}
            <GraphDB />
            {/* Agens vs NoSQL */}
            <Comparison />
            {/* enterprise edition */}
            <Enterprise />
        </div>
    )
}
