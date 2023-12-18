import "./styles.scss";
import {Routes} from "../../../pages/routes";
import {Header} from "../../../widgets/header";
import {Aside} from "../../../widgets/aside";

export function DesktopLayout() {
    return <>
        <Header/>
        <Aside/>
        <Routes/>
    </>
}