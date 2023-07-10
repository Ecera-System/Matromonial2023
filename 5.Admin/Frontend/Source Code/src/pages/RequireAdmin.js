import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAdmin = ({ children }) => {
    const [adminData, setAdminData] = useState('');
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        axios.get('http://localhost:3001/api/profile/single', {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('new_token'),
            }
        }).then((response) => {
            setAdminData(response.data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
            setLoading(false);
        })

    }, []);
    if (loading) {
        return <p>Loading... </p>
    }
    console.log(adminData.isAdmin);
    if (adminData?.isAdmin) {
        return children
    }
    else {
        localStorage.removeItem('new_token');
        
    };

};

export default RequireAdmin;