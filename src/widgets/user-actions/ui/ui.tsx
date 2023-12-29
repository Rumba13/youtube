import "./styles.scss";
import {CreateVideoIcon} from "./create-video-icon";
import {NotificationsIcon} from "./notifications-icon";
import {UserProfileIcon} from "./user-profile-icon";

export function UserActions() { //TODO destroy, simplify
    return <div className="user-actions">
        <CreateVideoIcon/>
        <NotificationsIcon/>
        <UserProfileIcon/>
    </div>
}