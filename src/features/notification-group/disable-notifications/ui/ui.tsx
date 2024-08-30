import './styles.scss';
import CrossedBellIcon from '../../../../assets/images/crossed-bell-icon.svg';
import { SvgIcon } from '../../../../shared/ui/svg-icon';
import { Trans, useTranslation } from 'react-i18next';

export function DisableNotificationsButton() {
 const { t } = useTranslation();
 const channelName = 'Nostoro';

 return (
  <button className="disable-notifications-button">
   <SvgIcon className="disable-notifications-button__icon" icon={CrossedBellIcon} />
   <span className="disable-notifications-button__title">
    <Trans i18nKey={'Disable Notifications At Channel'} t={t} channelName={channelName}>
     {{ channelName }}
    </Trans>
   </span>
  </button>
 );
}
