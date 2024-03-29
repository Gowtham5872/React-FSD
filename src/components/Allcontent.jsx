import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Allcontent = () => {
    const navstyle = {
        /* Navigation Menu */
        nav: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            borderBottom: '1px solid #ccc',
            marginTop: '0', // Adjust the marginTop property here
        },
        ul: {
            listStyleType: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
        },
        li: {
            margin: '0 10px',
        },
        a: {
            textDecoration: 'none',
            color: '#333',
            fontWeight: 'bold',
            padding: '10px 15px',
            border: '1px solid transparent',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease',
        },
        aHover: {
            backgroundColor: '#f0f0f0',
        }
    };

    return (
        <div>
            <div>
                <nav style={navstyle.nav}>
                    <ul style={navstyle.ul}>
                        <li style={navstyle.li}><Link to={'/'} style={navstyle.a}>All</Link></li>
                        <li style={navstyle.li}><Link to={'fullstackdevelopment'} style={navstyle.a}>FULL STACK DEVELOPMENT</Link></li>
                        <li style={navstyle.li}><Link to={'Datascience'} style={navstyle.a}>DATASCIENCE</Link></li>
                        <li style={navstyle.li}><Link to={'Security'} style={navstyle.a}>CYBERSECURITY</Link></li>
                    </ul>
                </nav>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Allcontent;
