import React, { MouseEventHandler } from 'react';

type RegisterModalStateContextType = {
  toggleModal: MouseEventHandler;
};

export const RegisterModalStateContext = React.createContext<RegisterModalStateContextType>({
  toggleModal: () => {
    /*default value*/
  },
});
