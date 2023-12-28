import "./styles.scss";
import {userService} from "../../../../shared/api/user-service";
import {useEffect, useState} from "react";
export function UserProfileIcon() {
    const [userProfileIcon, setUserProfileIcon] = useState<string | undefined>();


    useEffect(() => {
        userService.loadUserByJwt("").then(({icon}) => setUserProfileIcon(icon))
    }, []);

    return <img className="user-profile-icon" src={userProfileIcon} alt=""/>
}