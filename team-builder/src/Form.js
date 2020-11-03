import React, { useState } from 'react';

const Form = (props) => {
    const [teamMates, setTeamMates] = useState({
        name: '',
        email: '',
        role: ''
    });

    const { teamMembers, setTeamMembers } = props

    //Handle Changes
    const handleChanges = (event) => {
        setTeamMates({ ...teamMates, [event.target.name]: event.target.value })
    }

    const submitForm = (event) => {
        event.preventDefault()
        const newTeamMember = {
            id: Date.now(),
            name: teamMates.name,
            role: teamMates.role,
            email: teamMates.email
        }
        setTeamMembers([...teamMembers, newTeamMember])
        setTeamMates({
            name: '',
            email: '',
            role: ''
        })
    }

    return (
        <form onSubmit={submitForm} >

            <label htmlFor="name">Name</label>
            <input
                id="name"
                type="name"
                name="name"
                placeholder="Enter Name"
                value={teamMates.name}
                onChange={handleChanges}
                required
            />

            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="name"
                name="email"
                placeholder="Enter Email"
                value={teamMates.email}
                onChange={handleChanges}
                required
            />

            <label htmlFor="role">Role</label>
            <input
                id="role"
                type="name"
                name="role"
                placeholder="Enter Role"
                value={teamMates.role}
                onChange={handleChanges}
                required
            />

            {/* <select>
                <option value="">Select A Role</option>
                <option value="Front-End">Front-End Developer</option>
                <option value="Back-End">Back-End Developer</option>
                <option value="UX/UI">UX/UI Designer</option>
                <option value="DataScience">Data Scientist</option>
                <option value="iOS">iOS Developer</option>
            </select> */}

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;
