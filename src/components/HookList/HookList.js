import { useMemo } from "react";
// import { useCallback } from "react";

export default function HookList(props) {
    const { list } = props;

    const renderHookList = (hooks) => hooks.map((hook, index) => <li key={index}>{hook}</li>);
    const memoizedHookList = useMemo(() => renderHookList(list), [list]);

    // const memoizedCallback = useCallback(() => list.map((item, i) => <li key={i}>{item}</li>), [
    //     list,
    // ]);

    // return <ul style={{ fontWeight: "700", fontStyle: "italic" }}>{memoizedCallback()}</ul>;
    return <ul style={{ fontWeight: "700", fontStyle: "italic" }}>{memoizedHookList}</ul>;
}
