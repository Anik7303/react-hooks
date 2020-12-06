import { useState } from "react";

const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
};

export default function Form(props) {
    const [formInput, setFormInput] = useState(initialState);

    function onInputChange(event) {
        const { name, value } = event.target;
        setFormInput((state) => ({ ...state, [name]: value }));
    }

    function onSubmit(event) {
        event.preventDefault();

        console.log({ ...formInput });

        setFormInput(initialState);
    }

    return (
        <form className="form" onSubmit={onSubmit} autoComplete="off">
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formInput.name}
                    onChange={onInputChange}
                />
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formInput.email}
                    onChange={onInputChange}
                />
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formInput.password}
                    onChange={onInputChange}
                />
            </div>
            <div>
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formInput.confirmPassword}
                    onChange={onInputChange}
                />
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    );
}
