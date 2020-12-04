import { useState, useEffect } from "react";

import "./App.css";

const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
};

function App() {
    const [formInput, setFormInput] = useState(initialState);

    useEffect(() => {
        document.title = "React Hooks";
    }, []);

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setFormInput((state, props) => ({ ...state, [name]: value }));
    };

    const onSubmit = (event) => {
        event.preventDefault();

        console.log({ ...formInput });

        setFormInput(initialState);
    };

    return (
        <div className="app">
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
        </div>
    );
}

export default App;
