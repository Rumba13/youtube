import './styles.scss';
import { CrossedBellIcon } from '../../../../images/crossed-bell-icon';
import { SvgIcon } from '../../../../shared/ui/svg-icon';
import { Trans, useTranslation } from 'react-i18next';

export function DisableNotificationsButton() {
  const { t } = useTranslation();
  const channelName = 'Nostoro';

  return (
    <div className="disable-notifications-button">
      <SvgIcon className="disable-notifications-button__icon" Icon={CrossedBellIcon} />
      <span className="disable-notifications-button__title">
        <Trans i18nKey={'Disable Notifications At Channel'} t={t} channelName={channelName}>
          {{ channelName }}
        </Trans>
      </span>
    </div>
  );
}
