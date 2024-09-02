import React, { MouseEventHandler } from 'react';

type SignUpModalStoreContextType = {
 toggleModal: MouseEventHandler;
};

export const SignUpModalStoreContext = React.createContext<SignUpModalStoreContextType>({
 toggleModal: () => {
  /*default value*/
 },
});
