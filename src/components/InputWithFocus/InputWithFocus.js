import { useEffect, useRef, useState } from "react";

export default function InputWithFocus() {
    const [formInput, setFormInput] = useState("");

    const ref = useRef();
    useEffect(() => {
        if (ref.current) {
            onInputFocus();
        }
    }, [ref]);

    function onInputFocus() {
        if (ref.current) {
            ref.current.focus();
        }
    }

    function onInputSubmit(event) {
        event.preventDefault();
        console.log({ formInput });
        setFormInput("");
    }

    return (
        <div>
            <input
                ref={ref}
                type="text"
                value={formInput}
                onChange={(e) => setFormInput(e.target.value)}
            />
            <button className="btn" onClick={onInputFocus}>
                Focus
            </button>
            <button className="btn" onClick={onInputSubmit}>
                Submit
            </button>
        </div>
    );
}
