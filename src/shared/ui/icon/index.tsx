import "./styles.scss";

type PropsType = {
    icon: string,
    alt?: string,
    className?: string
}

export function Icon({icon, alt = "", className = ""}: PropsType) {
    return <img className={`icon ${className  || ""}` } src={icon} alt={alt}/>
}