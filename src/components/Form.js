import React from 'react';

function Form(props) {
    const {values, update, submit} = props;

    const OnChange = evt => {
        const { name, value } = evt.target;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Name: 
                <input
                    type="text"
                    name="name"
                    placeholder="first and last name"
                    value={values.name}
                    onChange={OnChange}
                />
            </label>
            <label>Email: 
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={values.email}
                    onChange={OnChange}
                />
            </label>
            <label>Role: 
                <input
                    type="text"
                    name="role"
                    placeholder="role"
                    value={values.role}
                    onChange={OnChange}
                />
            </label>
            <button>Add new member!</button>
        </form>
    )
}

export default Form;