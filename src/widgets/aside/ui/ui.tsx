import './styles.scss';
import { asideStore } from '../model/model';
import { observer } from 'mobx-react';
import { AsideFooter } from './aside-footer';
import { OtherArticle } from './other-article';
import { NavigationArticle } from './navigation-article';
import { SubscriptionsArticle } from './subscriptions-article';
import { MainArticle } from './main-article';
import { ActionsArticle } from './actions-article';
import { UserArticle } from './user-article';
import { AsideMini } from './aside-mini';

export const Aside = observer(() => {
 if (asideStore.isMinified) {
  return <AsideMini />;
 }
 return (
  <aside className="aside">
   <MainArticle />
   <UserArticle />
   <SubscriptionsArticle />
   <NavigationArticle />
   <OtherArticle />
   <ActionsArticle />
   <AsideFooter />
  </aside>
 );
});
