import "./styles.scss";
import {UserActions} from "../../user-actions";
import {Search} from "../../../features/search";
import {Logo} from "./logo";
import {MenuIcon} from "./menu-icon";

export function Header() {
    return <header className="header">
        <MenuIcon/>
        <Logo/>
        <Search/>
        <UserActions/>
    </header>
}