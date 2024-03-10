import './styles.scss';
import { CrossedEyeIcon } from '../../../../images/crossed-eye-icon';
import { SvgIcon } from '../../../../shared/ui/svg-icon';
import { useTranslation } from 'react-i18next';

export function RemoveNotificationButton() {
  const { t } = useTranslation();

  return (
    <div className="remove-notification-button">
      <SvgIcon className="remove-notification-button__icon" Icon={CrossedEyeIcon} />
      <span className="remove-notification-button__title">Скрыть уведомление</span>
    </div>
  );
}
