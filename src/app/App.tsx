import { DesktopLayout } from '../layouts/desktop-layout';
import { Overlay } from './overlay';
import {} from './i18n/index';
import { useTranslation } from 'react-i18next';
import React, { useEffect } from 'react';
import { RegisterModal } from '../widgets/register-modal';
import { useModal } from '../shared/lib/use-modal';
import { RegisterModalStateContext } from '../widgets/register-modal';
import { LoginModal, LoginModalStateContext } from '../widgets/login-modal';
import { LoginForm } from '../widgets/login-form';
import { RegisterForm } from '../widgets/register-form';

export function App() {
 const { i18n, t } = useTranslation();
 const {
  isModalOpened: isRegisterModalOpened,
  toggleModal: toggleRegisterModal,
  stopPropagationInModal: stopPropagationInRegisterModal,
 } = useModal(false, { parentModalSelector: '.user-actions-modal' });
 const {
  isModalOpened: isLoginModalOpened,
  toggleModal: toggleLoginModal,
  stopPropagationInModal: stopPropagationInLoginModal,
 } = useModal(false, { parentModalSelector: '.user-actions-modal' });

 useEffect(() => {
  i18n.changeLanguage('ru');
 }, []);

 return (
  <div className="app">
   <Overlay />
   <RegisterModal
    RegisterFormSlot={RegisterForm}
    isOpened={isRegisterModalOpened}
    onClick={stopPropagationInRegisterModal}
   />
   <LoginModal LoginFormSlot={LoginForm} isOpened={isLoginModalOpened} onClick={stopPropagationInLoginModal} />

   <RegisterModalStateContext.Provider value={{ toggleModal: toggleRegisterModal }}>
    <LoginModalStateContext.Provider value={{ toggleModal: toggleLoginModal }}>
     <DesktopLayout />
    </LoginModalStateContext.Provider>
   </RegisterModalStateContext.Provider>
  </div>
 );
}
