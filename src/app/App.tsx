import { DesktopLayout } from '../layouts/desktop-layout';
import { Overlay } from './overlay';
import {} from './i18n/index';
import { useTranslation } from 'react-i18next';
import React, { useEffect } from 'react';
import { SignUpForm } from '../widgets/sign-up-form';
import { SignUpModal} from '../widgets/sign-up-modal';
import { SignInModal } from '../widgets/sign-in-modal';
import { SignInForm } from '../widgets/sign-in-form';

export function App() {
 const { i18n } = useTranslation();

 useEffect(() => {
  i18n.changeLanguage('ru'); //TODO remove in release
 }, []);

 return (
  <div className="app">
   <Overlay />
   <SignUpModal SignUpFormSlot={SignUpForm}/>
   <SignInModal SignInFormSlot={SignInForm} />
   <DesktopLayout />
  </div>
 );
}
