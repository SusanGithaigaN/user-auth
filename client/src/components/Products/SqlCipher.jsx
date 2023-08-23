import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBContainer,
    MDBCardImage,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

import cypher from './images/cypher.png'
import './Products.css'
export default function SqlCipher() {
    return (
        <MDBCard alignment='center'>
            {/* <MDBCardHeader>Featured</MDBCardHeader> */}
            <MDBCardBody>
                <MDBCardTitle className="cypher fw-bold">SQL + Cypher</MDBCardTitle>
                <MDBCardTitle className='fw-bold'>: Hybrid Query Processing</MDBCardTitle>
                <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
            </MDBCardBody>
            <MDBContainer>
                <MDBRow start>
                    <MDBCol size='3'>
                        <MDBCardImage src={cypher} alt='...' style={{ maxWidth: '100%' }}></MDBCardImage>
                    </MDBCol>
                    <MDBCol size='7'>
                        <MDBCardTitle className='text-start fw-bold' id='cypher-title'>Cypher in SQL</MDBCardTitle>
                        <div id='sql-shot' className='text-start fw-bold'>
                            <p><span id='red'>SELECT </span><span id='purple'>n</span><span id='white'>.</span><span id='purple'>name</span></p>
                            <p><span id='red'>FROM </span><span id='purple'>history</span><span id='white'>, ( </span><span id='red'>MATCH</span>
                                <span id='white'>(n:dev) </span><span id='red'>RETURN</span><span id='white'> n)</span>
                                <span id='blue'> AS </span><span id='white'>dev</span><span id='red'> WHERE</span>
                                <span id='purple'> history</span><span id='white'>.</span><span id='purple'>year</span><span id='white'> &gt; n.year::int;</span>
                            </p> 
                            <p><span id='white'>---------</span></p>
                            <p><span id='purple'>name</span></p>
                            <p><span id='white'>---------</span></p>
                            <p><span id='purple'>someone</span></p>
                            <p><span id='white'>(1 row)</span></p>
                        </div>
                        <br />
                        <MDBCardTitle className='text-start fw-bold' id='cypher-title'>SQL in Cypher</MDBCardTitle>
                        <div id='sql-shot' className='text-start fw-bold'>
                            <p>
                                <span id='red'>MATCH </span><span id='white'>(n:dev)</span><span id='red'> WHERE</span>
                                <span id='purple'> n</span><span id='white'>.</span><span id='purple'>year</span>
                                <span id='white'>::int &lt; </span><span id='white'>(</span> <span id='red'>SELECT </span>
                                <span id='purple'>year</span><span id='red'> FROM </span><span id='purple'>history </span>
                                <span id='red'>WHERE</span><span id='purple'> event</span><span id='white'> = 'Agens Graph')</span>
                            </p>
                            <p>
                                <span id='red'>RETURN</span><span id='white'> properties(n) A n;</span>
                            </p>
                            <p><span id='white'>----------------------------------</span></p>
                            <p><span id='white'>n</span></p>
                            <p><span id='white'>----------------------------------</span></p>
                            <p>
                                <span id='white'>&#123;&quot;</span><span id='purple'>name</span><span id='white'>&quot;:</span>
                                <span id='white'>&quot;</span><span id='purple'>someone</span><span id='white'>&quot;,&quot;</span>
                                <span id='purple'>year</span><span id='white'>&quot;: 2015&#125;</span>
                            </p>
                            <p><span id='white'>(1 row)</span></p>
                        </div>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>

        </MDBCard>
    );
}