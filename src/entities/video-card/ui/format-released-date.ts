import {TFunction} from "i18next";

export function formatReleasedDate(date: Date, t: TFunction): string {
    const currentDate = Date.now();
    const releasedAgoInSeconds = currentDate - +date;
    const releasedAgo = new Date(releasedAgoInSeconds);

    const seconds = releasedAgo.getUTCSeconds();
    const minutes = releasedAgo.getUTCMinutes();
    const hours = releasedAgo.getUTCHours();
    const day = releasedAgo.getUTCDate() - 1;
    const weeks = Math.trunc((releasedAgo.getUTCDate() - 1) / 7);
    const month = releasedAgo.getUTCMonth();
    const year = releasedAgo.getUTCFullYear() - 1970;

    if(year < 0) {
        return "Только что";
    }

    if (year !== 0) {
        return `${t("keyYear", {count: year})} ${t("Ago")}`;
    } else if (month !== 0) {
        return `${t("keyMonth", {count: month})} ${t("Ago")}`;
    } else if (weeks !== 0) {
        return `${t("keyWeek", {count: weeks})} ${t("Ago")}`;
    } else if (day !== 0) {
        return `${t("keyDay", {count: day})} ${t("Ago")}`;
    } else if (hours !== 0) {
        return `${t("keyHour", {count: hours})} ${t("Ago")}`;
    } else if (minutes !== 0) {
        return `${t("keyMinute", {count: minutes})} ${t("Ago")}`;
    } else if (seconds !== 0) {
        return `${t("keySecond", {count: seconds})} ${t("Ago")}`;
    } else {
        return "Только что";
    }
}