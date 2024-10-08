import './styles.scss';
import CrossedEyeIcon from '../../../../assets/images/crossed-eye-icon.svg';
import { SvgIcon } from '../../../../shared/ui/svg-icon';
import { useTranslation } from 'react-i18next';

export function RemoveNotificationButton() {
  const { t } = useTranslation();
  //TODO fix translations issues
  return (
    <button className="remove-notification-button">
      <SvgIcon className="remove-notification-button__icon" icon={CrossedEyeIcon} />
      <span className="remove-notification-button__title">Скрыть уведомление</span>
    </button>
  );
}
