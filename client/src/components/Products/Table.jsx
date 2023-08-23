import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBCard } from 'mdb-react-ui-kit';

export default function Table() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '100%' }}>
            <MDBCard style={{ maxWidth: '80%', width: '1400px'}}>
                <MDBTable responsive='sm'>
                    <MDBTableHead>
                        <tr>
                            <th scope='col'></th>
                            <th scope='col' className='bg-secondary text-dark bg-opacity-10'>Graph Model</th>
                            <th scope='col' className='bg-secondary text-dark bg-opacity-10'>Relational Model</th>
                            <th scope='col' className='bg-secondary text-dark bg-opacity-10'>Document Model</th>
                            <th scope='col' className='bg-secondary text-dark bg-opacity-10'>Key-value Store Model</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr style={{ backgroundColor: '#fac433' }}>
                            {/* <th scope='row'>1</th> */}
                            <td>AgensGraph</td>
                            <td><img src="https://tinyurl.com/42un6zmd" /></td>
                            <td><img src="https://tinyurl.com/42un6zmd" /></td>
                            <td><img src="https://tinyurl.com/42un6zmd" /></td>
                            <td><img src="https://tinyurl.com/42un6zmd" /></td>
                        </tr>
                        <tr>
                            {/* <th scope='row'>2</th> */}
                            <td>ArangoDB</td>
                            <td><img src='https://tinyurl.com/3auexyhb' /></td>
                            <td><img src='https://tinyurl.com/4bwpu8y2' /></td>
                            <td><img src='https://tinyurl.com/3auexyhb' /></td>
                            <td><img src='https://tinyurl.com/3auexyhb' /></td>
                        </tr>
                        <tr>
                            <td>Couchbase</td>
                            <td><img src='https://tinyurl.com/4bwpu8y2' /></td>
                            <td><img src='https://tinyurl.com/4bwpu8y2' /></td>
                            <td><img src='https://tinyurl.com/3auexyhb' /></td>
                            <td><img src='https://tinyurl.com/3auexyhb' /></td>
                        </tr>
                        <tr>
                            <td>Neo4j</td>
                            <td><img src='https://tinyurl.com/3auexyhb' /></td>
                            <td><img src='https://tinyurl.com/4bwpu8y2' /></td>
                            <td><img src='https://tinyurl.com/4bwpu8y2' /></td>
                            <td><img src='https://tinyurl.com/4bwpu8y2' /></td>
                        </tr>
                        <tr>
                            <td>OrientDB</td>
                            <td><img src='https://tinyurl.com/3auexyhb' /></td>
                            <td><img src='https://tinyurl.com/4bwpu8y2' /></td>
                            <td><img src='https://tinyurl.com/3auexyhb' /></td>
                            <td><img src='https://tinyurl.com/3auexyhb' /></td>
                        </tr>
                        <tr>
                            <td>CosmosDB</td>
                            <td><img src='https://tinyurl.com/3auexyhb' /></td>
                            <td><img src='https://tinyurl.com/4bwpu8y2' /></td>
                            <td><img src='https://tinyurl.com/3auexyhb' /></td>
                            <td><img src='https://tinyurl.com/3auexyhb' /></td>
                        </tr>
                        <tr>
                            <td>Neptune</td>
                            <td><img src='https://tinyurl.com/3auexyhb' /></td>
                            <td><img src='https://tinyurl.com/4bwpu8y2' /></td>
                            <td><img src='https://tinyurl.com/4bwpu8y2' /></td>
                            <td><img src='https://tinyurl.com/4bwpu8y2' /></td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
            </MDBCard>
        </div>
    );
}