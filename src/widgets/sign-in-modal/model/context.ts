import React, { MouseEventHandler } from 'react';

type LoginModalStoreContextType = {
 toggleModal: MouseEventHandler;
};

export const SignInModalStoreContext = React.createContext<LoginModalStoreContextType>({
 toggleModal: () => {
  /*never called*/
 },
});
