import "./styles.scss";

type PropsType = {
    className?: string,
    icon: string,
    alt?: string,
}

export function Icon({icon, alt = "", className = ""}: PropsType) {
    return <img className={`icon${className ? " " + className : ""}`} src={icon} alt={alt}/>
}