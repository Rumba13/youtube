import './styles.scss';
import { SvgIcon } from '../../../../shared/ui/svg-icon';
import ArrowIcon from '../../../../images/arrow-icon.svg';
import ChannelIcon from '../../../../images/channel-icon.svg';
import HistoryIcon from '../../../../images/history-icon.svg';
import PlayVideoIcon from '../../../../images/play-video-icon.svg';
import ClocksIcon from '../../../../images/clocks-icon.svg';
import LikeIcon from '../../../../images/like-icon.svg';
import PlaylistIcon from '../../../../images/playlist-icon.svg';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react';
import { ExpandButton } from '../expand-button';
import { playlistsState } from '../../../../entities/playlists';
import { userState } from '../../../../entities/user';

export const UserArticle = observer(() => {
 const [isUserArticleExpanded, setIsUserArticleExpanded] = useState<boolean>(false);
 const { t } = useTranslation();
 const { playlists } = playlistsState;
 const { getUserJwt } = userState;
 const userJwt = getUserJwt();

 useEffect(() => {
  playlistsState.loadPlaylists(userJwt);
 }, [userJwt]);

 const items: JSX.Element[] = [
  <li className="aside-item you-item" title={t('You')} key={1}>
   <span className="aside-item__title">{t('You')}</span>
   <SvgIcon className="aside-item__icon" icon={ArrowIcon} />
  </li>,
  <li className="aside-item" title={t('My Channel')} key={2}>
   <SvgIcon className="aside-item__icon" icon={ChannelIcon} />
   <span className="aside-item__title">{t('My Channel')}</span>
  </li>,
  <li className="aside-item" title={t('History')} key={3}>
   <SvgIcon className="aside-item__icon" icon={HistoryIcon} />
   <span className="aside-item__title">{t('History')}</span>
  </li>,
  <li className="aside-item" title={t('Your Videos')} key={4}>
   <SvgIcon className="aside-item__icon" icon={PlayVideoIcon} />
   <span className="aside-item__title">{t('Your Videos')}</span>
  </li>,
  <li className="aside-item" title={t('Watch Later')} key={5}>
   <SvgIcon className="aside-item__icon" icon={ClocksIcon} />
   <span className="aside-item__title">{t('Watch Later')}</span>
  </li>,
  <li className="aside-item" title={t('Liked')} key={6}>
   <SvgIcon className="aside-item__icon" icon={LikeIcon} />
   <span className="aside-item__title">{t('Liked')}</span>
  </li>,
 ];

 return (
  <ul className={`aside-article user-article${isUserArticleExpanded ? ' ' + 'expanded' : ''}`}
      aria-label={'UserArticle'}>
   {items.map(item => item)}

   {playlists.map(({ title, href }, index) => (
    <li className="aside-item" title={title} key={index}>
     <a href={href}>
      <SvgIcon className="aside-item__icon" icon={PlaylistIcon} />
      <span className="aside-item__title">{title}</span>
     </a>
    </li>
   ))}

   <ExpandButton
    title={isUserArticleExpanded ? t('Collapse') : t('Expand')}
    onClick={() => setIsUserArticleExpanded(!isUserArticleExpanded)}
    isExpanded={isUserArticleExpanded}
   />
  </ul>
 );
});
