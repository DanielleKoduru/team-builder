import React from 'react';

const Form = (props) => {

    return (
        <form>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                type="name"
                name="name"
                placeholder="Enter Name"
            // onChange={handleChanges}
            // required
            />

            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="name"
                name="email"
                placeholder="Enter Email"
            // onChange={handleChanges}
            // required
            />

            <label htmlFor="role">Role</label>
            <input
                id="role"
                type="name"
                name="role"
                placeholder="Enter Role"
            // onChange={handleChanges}
            // required
            />

            <button>Submit</button>
        </form>
    )
}

export default Form;
