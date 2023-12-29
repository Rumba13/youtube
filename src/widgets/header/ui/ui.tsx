import "./styles.scss";
import {Search} from "../../../features/search";
import {Logo} from "./logo";
import {MenuIcon} from "./menu-icon";
import {CreateVideoIcon} from "../../user-actions/ui/create-video-icon";
import {NotificationsIcon} from "../../user-actions/ui/notifications-icon";
import {UserProfileIcon} from "../../user-actions/ui/user-profile-icon";

export function Header() {
    return <header className="header">
        <MenuIcon/>
        <Logo/>
        <Search/>
        <CreateVideoIcon/>
        <NotificationsIcon/>
        <UserProfileIcon/>
    </header>
}