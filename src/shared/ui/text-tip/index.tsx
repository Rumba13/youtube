import "./styles.scss";
import {ReactNode} from "react";

type PropsType = {
    children: ReactNode | ReactNode[],
    className?: string
}

export function TextTip({children, className}: PropsType) {
    return <div className={`text-tip ${className ? className : ""}`}>
        {children}
    </div>
}