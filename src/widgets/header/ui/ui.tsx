import "./styles.scss";
import {Search} from "../../../features/search";
import {Logo} from "./logo";
import {MenuIcon} from "./menu-icon";
import {NotificationsIcon} from "./notifications-icon";
import {UserProfileIcon} from "./user-profile-icon";
import {CreateVideoButton} from "./create-video-button";

export function Header() {
    return <header className="header">
        <MenuIcon/>
        <Logo/>
        <Search/>
        <CreateVideoButton/>
        <NotificationsIcon/>
        <UserProfileIcon/>
    </header>
}