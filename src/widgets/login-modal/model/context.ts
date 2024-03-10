import React, { MouseEventHandler } from 'react';

type LoginModalStateContextType = {
  toggleModal: MouseEventHandler;
};

export const LoginModalStateContext = React.createContext<LoginModalStateContextType>({
  toggleModal: () => {
    /*never called*/
  },
});
