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

type PropsType = {
    className?: string
    isOpened: boolean,
}

export type UserActionsModalSlotType = FC<PropsType>

export function UserActionsModal({className, isOpened}: PropsType) {
    return <div className={`user-actions-modal${className ? " " + className : ""}${isOpened ? " opened" : ""}`}>
        <div className="user-actions-modal-header">
            <img className="header-icon" src={userIcon} alt="user-icon"/>
            <span className="header__title">Senderium</span>
            <span className="header__subtitle">@senderium5028</span>
            <a className="header__link" href="https://www.youtube.com/channel/UC6Kav4lZ1H0SNIUidzfXwdA">Посмотреть
                канал</a>
        </div>
        <VerticalList className="user-actions-list" listItemClassName="user-actions-list__item" items={[
            <a className="item-link"
               href="https://myaccount.google.com/u/1/?utm_source=YouTubeWeb&tab=rk&utm_medium=act&tab=rk&hl=ru">
                <SvgIcon className="item-icon" Icon={GoogleIcon}/>
                Аккаунт Google
            </a>,
            <a className="item-link">
                <SvgIcon className="item-icon" Icon={AccountChangeIcon}/>
                Сменить аккаунт
                <SvgIcon className="arrow"
                         Icon={ArrowIcon}/>
            </a>,
            <a className="item-link">
                <SvgIcon className="item-icon" Icon={ExitIcon}/>
                Выйти
            </a>,
            <a className="item-link" href="https://studio.youtube.com/channel/UC6Kav4lZ1H0SNIUidzfXwdA">
                <SvgIcon
                    className="item-icon" Icon={CreatorStudioIcon}/>
                Творческая студия YouTube
            </a>,
            <a className="item-link" href="https://www.youtube.com/paid_memberships?ybp=mAEK">
                <SvgIcon
                    className="item-icon" Icon={MoneyIcon}/>
                Покупки и платные подписки
            </a>,
            <a className="item-link" href="https://myaccount.google.com/u/1/yourdata/youtube?hl=ru">
                <SvgIcon
                    className="item-icon" Icon={AccountIcon}/>
                Ваши данные на YouTube
            </a>,
            <a className="item-link">
                <SvgIcon className="item-icon" Icon={MoonIcon}/>
                Тема: как на устройстве
                <SvgIcon className="arrow"
                         Icon={ArrowIcon}/>
            </a>,
            <a className="item-link">
                <SvgIcon className="item-icon" Icon={LanguageIcon}/>
                Язык: Русский
                <SvgIcon className="arrow"
                         Icon={ArrowIcon}/>
            </a>,
            <a className="item-link">
                <SvgIcon className="item-icon" Icon={ShieldIcon}/>
                Безопасный режим: откл.
                <SvgIcon className="arrow"
                         Icon={ArrowIcon}/>
            </a>,
            <a className="item-link">
                <SvgIcon className="item-icon" Icon={WorldIcon}/>
                Страна: Беларусь
                <SvgIcon className="arrow"
                         Icon={ArrowIcon}/>
            </a>,
            <a className="item-link">
                <SvgIcon className="item-icon" Icon={KeyboardIcon}/>
                Быстрые клавиши
            </a>,
            <a className="item-link" href="https://www.youtube.com/account">
                <SvgIcon className="item-icon"
                         Icon={GearIcon}/>
                Настройки
            </a>,
            <a className="item-link">
                <SvgIcon className="item-icon" Icon={QuestionIcon}/>
                Справка
            </a>,
            <a className="item-link">
                <SvgIcon className="item-icon" Icon={DialogIcon}/>
                Отправить отзыв
            </a>,
        ]}/>
    </div>
}