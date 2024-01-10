import "./styles.scss";
import {FC} from "react";
import userIcon from "../../../images/temp/user-profile-icon.jpg";
import {VerticalList} from "../../../shared/ui/vertical-list";
import {GoogleIcon} from "../../../images/google-icon";
import {SvgIcon} from "../../../shared/ui/svg-icon";
import {AccountChangeIcon} from "../../../images/account-change-icon";
import {ExitIcon} from "../../../images/exit-icon";
import {CreatorStudioIcon} from "../../../images/creator-studio-icon";
import {MoneyIcon} from "../../../images/money-icon";
import {AccountIcon} from "../../../images/account-icon";
import {MoonIcon} from "../../../images/moon-icon";
import {LanguageIcon} from "../../../images/language-icon";
import {ShieldIcon} from "../../../images/shield-icon";
import {WorldIcon} from "../../../images/world-icon";
import {KeyboardIcon} from "../../../images/keyboard-icon";
import {QuestionIcon} from "../../../images/question-icon";
import {DialogIcon} from "../../../images/dialog-icon";
import {GearIcon} from "../../../images/gear-icon";
import {ArrowIcon} from "../../../images/arrow-icon";
import {useTranslation} from "react-i18next";

type PropsType = {
    className?: string
    isOpened: boolean,
}

export type UserActionsModalSlotType = FC<PropsType>

export function UserActionsModal({className, isOpened}: PropsType) {
    const {t} = useTranslation();

    return <div className={`user-actions-modal${className ? " " + className : ""}${isOpened ? " opened" : ""}`}>
        <div className="user-actions-modal-header">
            <img className="header-icon" src={userIcon} alt="user-icon"/>
            <span className="header__title">Senderium</span>
            <span className="header__subtitle">@senderium5028</span>
            <a className="header__link" href="https://www.youtube.com/channel/UC6Kav4lZ1H0SNIUidzfXwdA">
                {t("View Channel")}
            </a>
        </div>
        <VerticalList className="user-actions-list" listItemClassName="user-actions-list__item" items={[
            <a className="item-link"
               href="https://myaccount.google.com/u/1/?utm_source=YouTubeWeb&tab=rk&utm_medium=act&tab=rk&hl=ru">
                <SvgIcon className="item-icon" Icon={GoogleIcon}/>
                {t("Google Account")}
            </a>,
            <a className="item-link">
                <SvgIcon className="item-icon" Icon={AccountChangeIcon}/>
                {t("Change Account")}
                <SvgIcon className="arrow"
                         Icon={ArrowIcon}/>
            </a>,
            <a className="item-link">
                <SvgIcon className="item-icon" Icon={ExitIcon}/>
                {t("Exit")}
            </a>,
            <a className="item-link" href="https://studio.youtube.com/channel/UC6Kav4lZ1H0SNIUidzfXwdA">
                <SvgIcon
                    className="item-icon" Icon={CreatorStudioIcon}/>
                {t("Creator Studio Youtube")}
            </a>,
            <a className="item-link" href="https://www.youtube.com/paid_memberships?ybp=mAEK">
                <SvgIcon
                    className="item-icon" Icon={MoneyIcon}/>
                {t("Purchases And Paid Subscriptions")}

            </a>,
            <a className="item-link" href="https://myaccount.google.com/u/1/yourdata/youtube?hl=ru">
                <SvgIcon
                    className="item-icon" Icon={AccountIcon}/>
                {t("Your Data on Youtube")}
            </a>,
            <a className="item-link">
                <SvgIcon className="item-icon" Icon={MoonIcon}/>
                {t("Theme")}

                <SvgIcon className="arrow"
                         Icon={ArrowIcon}/>
            </a>,
            <a className="item-link">
                <SvgIcon className="item-icon" Icon={LanguageIcon}/>
                {t("Language")}
                <SvgIcon className="arrow"
                         Icon={ArrowIcon}/>
            </a>,
            <a className="item-link">
                <SvgIcon className="item-icon" Icon={ShieldIcon}/>
                {t("Safe Mode")}
                <SvgIcon className="arrow"
                         Icon={ArrowIcon}/>
            </a>,
            <a className="item-link">
                <SvgIcon className="item-icon" Icon={WorldIcon}/>
                {t("Country")}
                <SvgIcon className="arrow"
                         Icon={ArrowIcon}/>
            </a>,
            <a className="item-link">
                <SvgIcon className="item-icon" Icon={KeyboardIcon}/>
                {t("Fast Keyboard")}
            </a>,
            <a className="item-link" href="https://www.youtube.com/account">
                <SvgIcon className="item-icon"
                         Icon={GearIcon}/>
                {t("Options")}
            </a>,
            <a className="item-link">
                <SvgIcon className="item-icon" Icon={QuestionIcon}/>
                {t("Inquiry")}
            </a>,
            <a className="item-link">
                <SvgIcon className="item-icon" Icon={DialogIcon}/>
                {t("Send Review")}
            </a>,
        ]}/>
    </div>
}