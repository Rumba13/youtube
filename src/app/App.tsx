import { DesktopLayout } from '../layouts/desktop-layout';
import { Overlay } from './overlay';
import {} from './i18n/index';
import { useTranslation } from 'react-i18next';
import React, { useEffect } from 'react';
import { useModal } from '../shared/lib/use-modal';
import { SignUpForm } from '../widgets/sign-up-form';
import { SignUpModal, SignUpModalStoreContext } from '../widgets/sign-up-modal';
import { SignInModal, SignInModalStoreContext } from '../widgets/sign-in-modal';
import { SignInForm } from '../widgets/sign-in-form';

export function App() {
 const { i18n } = useTranslation();

 const {
  isModalOpened: isSignUpModalOpened,
  toggleModal: toggleSignUpModal,
  stopPropagationInModal: stopPropagationInRegisterModal,
 } = useModal(false, { parentModalSelector: '.user-actions-modal' });
 const {
  isModalOpened: isSignInModalOpened,
  toggleModal: toggleSignInModal,
  stopPropagationInModal: stopPropagationInSignInModal,
 } = useModal(false, { parentModalSelector: '.user-actions-modal' });

 useEffect(() => {
  i18n.changeLanguage('ru');
 }, []);

 return (
  <div className="app">
   <Overlay />
   <SignUpModal
    SignUpFormSlot={SignUpForm}
    isOpened={isSignUpModalOpened}
    onClick={stopPropagationInRegisterModal}
   />
   <SignInModal SignInFormSlot={SignInForm} isOpened={isSignInModalOpened} onClick={stopPropagationInSignInModal} />

   <SignUpModalStoreContext.Provider value={{ toggleModal: toggleSignUpModal }}>
    <SignInModalStoreContext.Provider value={{ toggleModal: toggleSignInModal }}>
     <DesktopLayout />
    </SignInModalStoreContext.Provider>
   </SignUpModalStoreContext.Provider>
  </div>
 );
}
