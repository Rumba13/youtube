import './styles.scss';
import { SvgIcon } from '../../../../shared/ui/svg-icon';
import YoutubeIcon from '../../../../assets/images/youtube-icon.svg';
import YoutubeCreatorStudioIcon from '../../../../assets/images/youtube-creator-studio-icon.svg';
import YoutubeMusicIcon from '../../../../assets/images/youtube-music-icon.svg';
import YoutubeForKids from '../../../../assets/images/youtube-for-kids.svg';
import { useTranslation } from 'react-i18next';

export function OtherArticle() {
 const { t } = useTranslation();

 const items: JSX.Element[] = [
  <li className="aside-item" title={t('YouTube Premium')} key={1}>
   <SvgIcon className="aside-item__icon" icon={YoutubeIcon} asImage />
   <span className="aside-item__title">{t('YouTube Premium')}</span>
  </li>,
  <li className="aside-item" title={t('YouTube Studio')} key={2}>
   <SvgIcon className="aside-item__icon" icon={YoutubeCreatorStudioIcon} asImage />
   <span className="aside-item__title">{t('YouTube Studio')}</span>
  </li>,
  <li className="aside-item" title={t('YouTube Music')} key={3}>
   <SvgIcon className="aside-item__icon" icon={YoutubeMusicIcon} asImage />
   <span className="aside-item__title">{t('YouTube Music')}</span>
  </li>,
  <li className="aside-item" title={t('YouTube Kids')} key={4}>
   <SvgIcon className="aside-item__icon" icon={YoutubeForKids} asImage />
   <span className="aside-item__title">{t('YouTube Kids')}</span>
  </li>,
 ];

 return (
  <ul className="aside-article other-article">
   <span className="aside-item__title article-title" title={t('More From YouTube')}>
    {t('More From YouTube')}
   </span>
   {items.map(item => item)}
  </ul>
 );
}
