import './styles.scss';
import keyboardIcon from '../../../images/keyboard-icon.webp'; //TODO add .png image for old browsers
import { SvgIcon } from '../../../shared/ui/svg-icon';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useScreenWidth } from '../../../shared/lib/use-screen-width';
import { observer } from 'mobx-react';
import { Field, Form, Formik } from 'formik';
import { Icon } from '../../../shared/ui/icon';
import { SearchIcon } from '../../../images/svg/search-icon';
import { CrossIcon } from './cross-icon';
import { VoiceSearchButton } from './voice-search-icon';
import { SearchButton } from './search-button';
import { search } from '../api/search';
import { overlayState } from '../../../app/overlay';
import { searchState } from '../model/model';
import { VoiceSearchModalSlotType } from '../../../widgets/voice-search-modal/ui/ui';

type PropsType = {
 VoiceSearchModalSlot: VoiceSearchModalSlotType;
};

export const Search = observer(({ VoiceSearchModalSlot }: PropsType) => {
 const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
 const screenWidth = useScreenWidth();
 const { t } = useTranslation();

 const {
  isSearchFocused,
  isSearchOpened,
  isSearchMinified,
  setIsSearchMinified,
  setIsSearchOpened,
  setIsSearchFocused,
 } = searchState;

 if (isSearchMinified && isSearchOpened) {
  document.addEventListener('click', () => setIsSearchOpened(false));
 }

 useEffect(() => {
  overlayState.setIsOverlayOpened(isModalOpened);
  setIsSearchMinified(screenWidth <= 750);

  if (screenWidth >= 750) {
   setIsSearchOpened(false);
  }
 }, [screenWidth, isModalOpened]);
 //TODO write adaptive on css
 return (
  <>
   {isSearchMinified && (
    <>
     {!isSearchOpened && (
      <>
       {' '}
       <SearchButton
        type="mini"
        buttonType="button"
        onClick={event => {
         setIsSearchOpened(true);
         setIsSearchFocused(true);
         event.stopPropagation();
        }}
       />
       <VoiceSearchButton type="mini" />
      </>
     )}
    </>
   )}

   {(!isSearchMinified || isSearchOpened) && (
    <div
     className={`search ${isSearchFocused ? 'focused' : ''}`}
     onClick={event => (isSearchOpened ? event.stopPropagation() : void 0)}>
     <Formik
      initialValues={{ query: '' }}
      onSubmit={(values, { setSubmitting }) => {
       search(values.query); //TODO add returning to state
       setSubmitting(false);
      }}>
      {({ values, isSubmitting, setFieldValue }) => (
       <Form className="search-form">
        <label className="search-form-container" htmlFor="query">
         <SvgIcon className="search-icon" Icon={SearchIcon} />
         <Field
          className="search-form__field"
          type="text"
          name="query"
          id="query"
          placeholder={t('Enter Query')}
          aria-label={t('Enter Query')}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
         />
         <Icon className="search-form__virtual-keyboard-icon dark-theme" icon={keyboardIcon} width={19} height={11} />
         {values.query && <CrossIcon onClick={() => setFieldValue('query', '')} />}
        </label>
        <SearchButton type="normal" buttonType="submit" disabled={isSubmitting} />

        <VoiceSearchButton type={isSearchMinified ? 'mini' : 'normal'} toolTip onClick={() => setIsModalOpened(true)} />

        <VoiceSearchModalSlot isOpened={isModalOpened} setIsOpened={setIsModalOpened} />
       </Form>
      )}
     </Formik>
    </div>
   )}
  </>
 );
});
