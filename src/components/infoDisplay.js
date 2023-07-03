import React from 'react';

const InfoDisplay = (props) => {
    const { person, email, phone, school, major, dateStudy, company, position, jobTask, dateJob } = props;

    return (
        <div>
            <h2>Name</h2>
            <p>{person}</p>
            <h2>Email</h2>
            <p>{email}</p>
            <h2>Phone number</h2>
            <p>{phone}</p>
            <h2>School attendeded</h2>
            <p>{school}</p>
            <h2>Area of study</h2>
            <p>{major}</p>
            <h2>Dates of study</h2>
            <p>{dateStudy}</p>
            <h2>Employer</h2>
            <p>{company}</p>
            <h2>Position</h2>
            <p>{position}</p>
            <h2>Position responsibilities</h2>
            <p>{jobTask}</p>
            <h2>Dates of employment</h2>
            <p>{dateJob}</p>
        </div>
    )
}


export default InfoDisplay;