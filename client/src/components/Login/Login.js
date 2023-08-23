// import React from 'react';
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LoggedUser from './LoggedUser';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate();
    // get setUser function from context
    const { setUser } = useContext(LoggedUser);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log('Successfully Logged in', data);
                alert('Successfully Logged in')
                // set user state
                setUser(data.user);
                // redirect user to aboutus page if userlogin === success
                navigate('/products');
            })
            // catch errs
            .catch((err) => {
                console.log('Error', err)
            });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData, [name]: value
        }));
    };

    return (
        <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>

                    <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                        <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                            <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                            <p className="text-white-50 mb-3">Please enter your login and password!</p>

                            <MDBInput wrapperClass='mb-4 w-100' label='Username' id='formControlLg' size="lg" name='username' type='text' value={formData.username} onChange={handleChange} />
                            <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' size="lg" name='password' type='password' value={formData.password} onChange={handleChange} />

                            <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />
                            <div className='extra'>
                                <a href="/signup">Don't have an account? Click here to sign up</a>
                            </div>
                            <MDBBtn size='lg' type='submit' onClick={handleSubmit}>
                                Login
                            </MDBBtn>


                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}

export default Login;