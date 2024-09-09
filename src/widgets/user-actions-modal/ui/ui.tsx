import './styles.scss';
import React, { FC, MouseEventHandler, useContext } from 'react';
import GoogleIcon from '../../../assets/images/google-icon.svg';
import { SvgIcon } from '../../../shared/ui/svg-icon';
import AccountChangeIcon from '../../../assets/images/account-change-icon.svg';
import ExitIcon from '../../../assets/images/exit-icon.svg';
import CreatorStudioIcon from '../../../assets/images/creator-studio-icon.svg';
import MoneyIcon from '../../../assets/images/money-icon.svg';
import AccountIcon from '../../../assets/images/account-icon.svg';
import MoonIcon from '../../../assets/images/moon-icon.svg';
import LanguageIcon from '../../../assets/images/language-icon.svg';
import ShieldIcon from '../../../assets/images/shield-icon.svg';
import WorldIcon from '../../../assets/images/world-icon.svg';
import KeyboardIcon from '../../../assets/images/keyboard-icon.svg';
import QuestionIcon from '../../../assets/images/question-icon.svg';
import DialogIcon from '../../../assets/images/dialog-icon.svg';
import GearIcon from '../../../assets/images/gear-icon.svg';
import ArrowIcon from '../../../assets/images/arrow-icon.svg';
import { Trans, useTranslation } from 'react-i18next';
import { ListItemSeparator } from '../../../shared/ui/list-item-separator';
import { userStore } from '../../../entities/user';
import { observer } from 'mobx-react';
import noUserProfileIcon from '../../../assets/images/no-user-profile-icon.webp';
import clsx from 'clsx';
import { signInStore } from '../../sign-in-modal/model/sign-in-store';
import { signUpStore } from '../../sign-up-modal/model/sign-up-store';

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
 const user = userStore.user;

 return (
  <div
   className={clsx('user-actions-modal', className, isOpened && 'opened')}
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
      <SvgIcon className="item-icon" icon={GoogleIcon} />
      {t('Google Account')}
     </a>
    </li>
    <li className="user-actions-list__item"></li>
    <li className="user-actions-list__item">
     <span className="item-link" key={2}>
      <SvgIcon className="item-icon" icon={AccountChangeIcon} />
      {t('Change Account')}
      <SvgIcon className="arrow" icon={ArrowIcon} />
     </span>
    </li>
    {user !== null && (
     <li className="user-actions-list__item">
      <span className="item-link" key={3} onClick={() => userStore.signOut()}>
       <SvgIcon className="item-icon" icon={ExitIcon} />
       {t('Exit')}
      </span>
     </li>
    )}

    <li className="user-actions-list__item">
     <ListItemSeparator />,
    </li>
    <li className="user-actions-list__item">
     <a className="item-link" href="https://studio.youtube.com/channel/UC6Kav4lZ1H0SNIUidzfXwdA" key={5}>
      <SvgIcon className="item-icon" icon={CreatorStudioIcon} />
      {t('Creator Studio Youtube')}
     </a>
    </li>
    <li className="user-actions-list__item">
     <a className="item-link" href="https://www.youtube.com/paid_memberships?ybp=mAEK" key={6}>
      <SvgIcon className="item-icon" icon={MoneyIcon} />
      {t('Purchases And Paid Subscriptions')}
     </a>
    </li>
    <li className="user-actions-list__item">
     <a className="item-link" href="https://myaccount.google.com/u/1/yourdata/youtube?hl=ru" key={6}>
      <SvgIcon className="item-icon" icon={AccountIcon} />
      {t('Your Data on Youtube')}
     </a>
    </li>
    <li className="user-actions-list__item">
     <span className="item-link" key={7}>
      <SvgIcon className="item-icon" icon={MoonIcon} />
      <Trans i18nKey="Theme">{{ theme }}</Trans>

      <SvgIcon className="arrow" icon={ArrowIcon} />
     </span>
    </li>
    <li className="user-actions-list__item">
     <span className="item-link" key={8}>
      <SvgIcon className="item-icon" icon={LanguageIcon} />
      <Trans i18nKey="Language">{{ language }}</Trans>
      <SvgIcon className="arrow" icon={ArrowIcon} />
     </span>
    </li>
    <li className="user-actions-list__item">
     <span className="item-link" key={9}>
      <SvgIcon className="item-icon" icon={ShieldIcon} />
      <Trans i18nKey="Safe Mode">
       {{ mode: t(isRestrictedModeEnable ? 'restricted_mode_on' : 'restricted_mode_off') }}
      </Trans>
      <SvgIcon className="arrow" icon={ArrowIcon} />
     </span>
    </li>
    <li className="user-actions-list__item">
     <span className="item-link" key={10}>
      <SvgIcon className="item-icon" icon={WorldIcon} />

      <Trans i18nKey={'Country'}>{{ location: t(location) }}</Trans>
      <SvgIcon className="arrow" icon={ArrowIcon} />
     </span>
    </li>
    <li className="user-actions-list__item">
     <span className="item-link" key={11}>
      <SvgIcon className="item-icon" icon={KeyboardIcon} />
      {t('Fast Keyboard')}
     </span>
    </li>
    <li className="user-actions-list__item">
     <ListItemSeparator />,
    </li>
    <li className="user-actions-list__item">
     <a className="item-link" href="https://www.youtube.com/account" key={13}>
      <SvgIcon className="item-icon" icon={GearIcon} />
      {t('Options')}
     </a>
    </li>
    <li className="user-actions-list__item">
     <ListItemSeparator />,
    </li>

    {user === null && (
     <>
      <li className="user-actions-list__item">
       <span className="item-link" onClick={signUpStore.toggleModal} key={15}>
        <SvgIcon className="item-icon" icon={AccountChangeIcon} />
        {t('Sign Up')}
       </span>
      </li>
      <li className="user-actions-list__item">
       <span className="item-link" onClick={signInStore.toggleModal} key={16}>
        <SvgIcon className="item-icon" icon={AccountIcon} />
        {t('Login')}
       </span>
      </li>
     </>
    )}

    <li className="user-actions-list__item">
     <span className="item-link" key={17}>
      <SvgIcon className="item-icon" icon={QuestionIcon} />
      {t('Inquiry')}
     </span>
    </li>
    <li className="user-actions-list__item">
     <span className="item-link" key={18}>
      <SvgIcon className="item-icon" icon={DialogIcon} />
      {t('Send Review')}
     </span>
    </li>
   </ul>
  </div>
 );
});
