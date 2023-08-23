import {
    // MDBCard,
    MDBContainer,
    MDBCardImage,

} from 'mdb-react-ui-kit';
import agenspackage from '../images/package.png';

export default function AgensImage() {
    return (
        <div className='image-container'>
            <MDBContainer breakpoint="sm">
                <MDBCardImage src={agenspackage} fluid alt='...' />
            </MDBContainer>
        </div>
    );
}