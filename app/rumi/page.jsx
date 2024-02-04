import React from 'react'
import { getSession } from 'next-auth/react';

const page = ({ session }) => {
    // Check the session object
    if (!session) {
        // Redirect or show login message
    }

    // Rest of your page logic
    return (
        <div>
            <h1>My Page</h1>
        </div>
    )
};

export default page