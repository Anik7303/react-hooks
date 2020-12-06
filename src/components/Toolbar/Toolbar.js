import { useContext } from "react";

import { ThemeContext } from "../../contexts";

function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
        <button
            className="btn"
            style={{
                color: theme.foreground,
                backgroundColor: theme.background,
                padding: "1rem 2rem",
            }}
        >
            I am styled by theme context
        </button>
    );
}

export default Toolbar;
