import './styles.scss';
import { Icon } from '../../../shared/ui/icon';
import { Subscription } from '../../../shared/api/types/subscription';

type PropsType = {
 subscription: Subscription;
};

export function SubscriptionCard({ subscription: { title, icon, isNewVideo, isStream } }: PropsType) {
 //TODO !!! separate aside__item class to aside
 //TODO Add accessibility if needs
 return (
  <li className="aside-item subscription" title={title}>
   <Icon className="aside-item__icon" icon={icon} />
   <span className="aside-item__title">{title}</span>
  </li>
 );
}
