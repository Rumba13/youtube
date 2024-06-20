import './styles.scss';
import React, { FC, MouseEventHandler, useContext } from 'react';
import { GoogleIcon } from '../../../images/svg/google-icon';
import { SvgIcon } from '../../../shared/ui/svg-icon';
import { AccountChangeIcon } from '../../../images/svg/account-change-icon';
import { ExitIcon } from '../../../images/svg/exit-icon';
import { CreatorStudioIcon } from '../../../images/svg/creator-studio-icon';
import { MoneyIcon } from '../../../images/svg/money-icon';
import { AccountIcon } from '../../../images/svg/account-icon';
import { MoonIcon } from '../../../images/svg/moon-icon';
import { LanguageIcon } from '../../../images/svg/language-icon';
import { ShieldIcon } from '../../../images/svg/shield-icon';
import { WorldIcon } from '../../../images/svg/world-icon';
import { KeyboardIcon } from '../../../images/svg/keyboard-icon';
import { QuestionIcon } from '../../../images/svg/question-icon';
import { DialogIcon } from '../../../images/svg/dialog-icon';
import { GearIcon } from '../../../images/svg/gear-icon';
import { ArrowIcon } from '../../../images/svg/arrow-icon';
import { Trans, useTranslation } from 'react-i18next';
import { ListItemSeparator } from '../../../shared/ui/list-item-separator';
import { RegisterModalStateContext } from '../../register-modal';
import { LoginModalStateContext } from '../../login-modal';
import { userState } from '../../../entities/user';
import { observer } from 'mobx-react';
import noUserProfileIcon from '../../../images/no-user-profile-icon.webp';

type PropsType = {
 className?: string;
 isOpened: boolean;
 onClick?: MouseEventHandler;
};

export type UserActionsModalSlotType = FC<PropsType>;

export const UserActionsModal = observer(({ className, isOpened, onClick }: PropsType) => {
 const { t, i18n } = useTranslation();
 const language = t(i18n.language);
 const theme = t('theme_' + 'sync');
 const location = t('by');
 const isRestrictedModeEnable = false;
 const { toggleModal: toggleRegisterModal } = useContext(RegisterModalStateContext);
 const { toggleModal: toggleLoginModal } = useContext(LoginModalStateContext);
 const user = userState.user;

 return (
  <div
   className={`user-actions-modal${className ? ' ' + className : ''}${isOpened ? ' opened' : ''}`}
   onClick={onClick}>
   <div className="user-actions-modal-header">
    <img className="header-icon" src={user?.icon || noUserProfileIcon} alt="user-icon" />
    <span className="header__title">{user?.name || 'Noname'}</span>
    <span className="header__subtitle">{user?.id || ''}</span>
    <a className="header__link" href="https://www.youtube.com/channel/UC6Kav4lZ1H0SNIUidzfXwdA">
     {t('View Channel')}
    </a>
   </div>
   <ul className="list user-actions-list" aria-label={t('Actions With User')}>
    <li className="user-actions-list__item">
     <a
      key={1}
      className="item-link"
      href="https://myaccount.google.com/u/1/?utm_source=YouTubeWeb&tab=rk&utm_medium=act&tab=rk&hl=ru">
      <SvgIcon className="item-icon" Icon={GoogleIcon} />
      {t('Google Account')}
     </a>
    </li>
    <li className="user-actions-list__item"></li>
    <li className="user-actions-list__item">
     <span className="item-link" key={2}>
      <SvgIcon className="item-icon" Icon={AccountChangeIcon} />
      {t('Change Account')}
      <SvgIcon className="arrow" Icon={ArrowIcon} />
     </span>
    </li>
    {user !== null && (
     <li className="user-actions-list__item">
      <span className="item-link" key={3} onClick={() => userState.signOut()}>
       <SvgIcon className="item-icon" Icon={ExitIcon} />
       {t('Exit')}
      </span>
     </li>
    )}

    <li className="user-actions-list__item">
     <ListItemSeparator />,
    </li>
    <li className="user-actions-list__item">
     <a className="item-link" href="https://studio.youtube.com/channel/UC6Kav4lZ1H0SNIUidzfXwdA" key={5}>
      <SvgIcon className="item-icon" Icon={CreatorStudioIcon} />
      {t('Creator Studio Youtube')}
     </a>
    </li>
    <li className="user-actions-list__item">
     <a className="item-link" href="https://www.youtube.com/paid_memberships?ybp=mAEK" key={6}>
      <SvgIcon className="item-icon" Icon={MoneyIcon} />
      {t('Purchases And Paid Subscriptions')}
     </a>
    </li>
    <li className="user-actions-list__item">
     <a className="item-link" href="https://myaccount.google.com/u/1/yourdata/youtube?hl=ru" key={6}>
      <SvgIcon className="item-icon" Icon={AccountIcon} />
      {t('Your Data on Youtube')}
     </a>
    </li>
    <li className="user-actions-list__item">
     <span className="item-link" key={7}>
      <SvgIcon className="item-icon" Icon={MoonIcon} />
      <Trans i18nKey="Theme">{{ theme }}</Trans>

      <SvgIcon className="arrow" Icon={ArrowIcon} />
     </span>
    </li>
    <li className="user-actions-list__item">
     <span className="item-link" key={8}>
      <SvgIcon className="item-icon" Icon={LanguageIcon} />
      <Trans i18nKey="Language">{{ language }}</Trans>
      <SvgIcon className="arrow" Icon={ArrowIcon} />
     </span>
    </li>
    <li className="user-actions-list__item">
     <span className="item-link" key={9}>
      <SvgIcon className="item-icon" Icon={ShieldIcon} />
      <Trans i18nKey="Safe Mode">
       {{ mode: t(isRestrictedModeEnable ? 'restricted_mode_on' : 'restricted_mode_off') }}
      </Trans>
      <SvgIcon className="arrow" Icon={ArrowIcon} />
     </span>
    </li>
    <li className="user-actions-list__item">
     <span className="item-link" key={10}>
      <SvgIcon className="item-icon" Icon={WorldIcon} />

      <Trans i18nKey={'Country'}>{{ location: t(location) }}</Trans>
      <SvgIcon className="arrow" Icon={ArrowIcon} />
     </span>
    </li>
    <li className="user-actions-list__item">
     <span className="item-link" key={11}>
      <SvgIcon className="item-icon" Icon={KeyboardIcon} />
      {t('Fast Keyboard')}
     </span>
    </li>
    <li className="user-actions-list__item">
     <ListItemSeparator />,
    </li>
    <li className="user-actions-list__item">
     <a className="item-link" href="https://www.youtube.com/account" key={13}>
      <SvgIcon className="item-icon" Icon={GearIcon} />
      {t('Options')}
     </a>
    </li>
    <li className="user-actions-list__item">
     <ListItemSeparator />,
    </li>

    {user === null && (
     <>
      <li className="user-actions-list__item">
       <span className="item-link" onClick={toggleRegisterModal} key={15}>
        <SvgIcon className="item-icon" Icon={AccountChangeIcon} />
        {t('Register')}
       </span>
      </li>
      <li className="user-actions-list__item">
       <span className="item-link" onClick={toggleLoginModal} key={16}>
        <SvgIcon className="item-icon" Icon={AccountIcon} />
        {t('Login')}
       </span>
      </li>
     </>
    )}

    <li className="user-actions-list__item">
     <span className="item-link" key={17}>
      <SvgIcon className="item-icon" Icon={QuestionIcon} />
      {t('Inquiry')}
     </span>
    </li>
    <li className="user-actions-list__item">
     <span className="item-link" key={18}>
      <SvgIcon className="item-icon" Icon={DialogIcon} />
      {t('Send Review')}
     </span>
    </li>
   </ul>
  </div>
 );
});
