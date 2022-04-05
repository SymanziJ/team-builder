import React from 'react';

function Members(props) {
    const {details} = props;

    if (!details) {
        return <h2>{`Hmmm, looking for the member list...`}</h2>
    }

    return (
        <div >
            <h2>{details.name}</h2>
            <p>{details.email}</p>
            <p>{details.role}</p>
        </div>
    )
}

export default Members;