import "./styles.scss";
import React, {FC} from "react";
import {SvgIcon} from "../../../shared/ui/svg-icon";
import {PlayVideoIcon} from "../../../images/play-video-icon";
import {StreamIcon} from "../../../images/stream-icon";
import {useTranslation} from "react-i18next";
import {NewVerticalList} from "../../../shared/ui/new-vertical-list";
import {VerticalListItem} from "../../../shared/ui/new-vertical-list/vertical-list-item";

type PropsType = {
    isOpened: boolean
}

export type CreateVideoActionsListSlotType = FC<PropsType>;


export function CreateVideoActionsList({isOpened}: PropsType) {
    const {t} = useTranslation();

    const items: JSX.Element[] = [
        <>
            <SvgIcon Icon={PlayVideoIcon}/>
            <a className="item-title" href="https://studio.youtube.com/channel/1/videos">
                {t("Add Video")}
            </a>
        </>
        ,
        <>
            <SvgIcon Icon={StreamIcon}/>
            <a className="item-title" href="https://studio.youtube.com/channel/1/livestreaming">
                {t("Start Stream")}
            </a>
        </>
    ]

    return <NewVerticalList className={`create-video-actions-modal${isOpened ? " opened" : ""}`}>
        {items.map(item => <VerticalListItem>
            {item}
        </VerticalListItem>)}
    </NewVerticalList>
}