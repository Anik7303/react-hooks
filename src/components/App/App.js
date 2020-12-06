import { useEffect } from "react";

import "./App.css";
import Toolbar from "../Toolbar/Toolbar";
import { themes, ThemeContext } from "../../contexts";
import Counter from "../Counter/Counter";
import HookList from "../HookList/HookList";
import InputWithFocus from "../InputWithFocus/InputWithFocus";
import Form from "../Form/Form";

function App() {
    useDocumentTitle("React Hooks");

    const initialList = [
        "useState",
        "useEffect",
        "useContext",
        "useReducer",
        "useCallback",
        "useMemo",
        "useRef",
    ];

    console.log("rendering...");

    return (
        <div className="app">
            <Form />
            <ThemeContext.Provider value={themes.light}>
                <Toolbar />
            </ThemeContext.Provider>
            <Counter />
            <InputWithFocus />
            <HookList list={initialList} />
        </div>
    );
}

function useDocumentTitle(initialValue) {
    useEffect(() => {
        document.title = initialValue;
    }, [initialValue]);
}

export default App;
