import { TFunction } from 'i18next';
import { round } from '../../../shared/lib/round';

export function formatViews(views: number, t: TFunction): string {
 if (views < 1000) {
  const formatedViews = views;
  return `${formatedViews} ${t('keyView', { count: formatedViews })}`;
 } else if (views < 10000) {
  const formatedViews = round(views / 1000, 2);

  return `${formatedViews} ${t('thousand')} ${t('keyView', { count: formatedViews })}`;
 } else if (views < 1000000) {
  const formatedViews = round(views / 1000);

  return `${formatedViews} ${t('thousand')} ${t('keyView', { count: formatedViews })}`;
 } else if (views < 10000000) {
  const formatedViews = round(views / 1000000, 2);

  return `${formatedViews} ${t('million')} ${t('keyView', { count: formatedViews })}`;
 } else {
  const formatedViews = round(views / 1000000);

  return `${formatedViews} ${t('million')} ${t('keyView', { count: formatedViews })}`;
 }
}
