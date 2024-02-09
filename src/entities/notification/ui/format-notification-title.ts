import {TFunction} from "i18next";

export function FormatNotificationTitle(channelName: string, videoName: string, videoType: string, t: TFunction) {
    return `${t("On The Channel", {channelName})} 
            ${videoType === "stream"
                ? t("New Stream", {title: videoName})
                : t("New Video", {title: videoName})
            }`
}
