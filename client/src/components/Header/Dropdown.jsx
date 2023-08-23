import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';

import './Header.css'
export default function Dropdown() {
    return (
        <div id='dropdown'>
            <MDBDropdown>
                <MDBDropdownToggle tag='a' className='shadow-0'>
                    Select language
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                    <MDBDropdownItem link>Select language</MDBDropdownItem>
                    <MDBDropdownItem link>English</MDBDropdownItem>
                    <MDBDropdownItem link>한국인</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
        </div>
    );
}