import React, { useState } from 'react';

type UseModalOptionsType = {
  parentModalSelector?: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const IS_LOGGING = true;

function findParentModal(sharedNodeSelector: string) {
  let parentModal: Element | Document | null;

  parentModal = document.querySelector(sharedNodeSelector);

  if (parentModal === null) {
    parentModal = document;
    console.warn('Use Modal cant find modals shared node, check shared node selector ' + sharedNodeSelector);
  }

  return parentModal;
}
export function useModal(isOpenedByDefault = false, options: UseModalOptionsType = {}) {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(isOpenedByDefault);

  const parentModal = options.parentModalSelector ? findParentModal(options.parentModalSelector) : document;

  parentModal.addEventListener('click', event => {
    console.log(`closing modal on ${event.target}`);
    setIsModalOpened(false);
  });

  function toggleModal(event: React.MouseEvent) {
    console.log(
      `toggling modal to ${isModalOpened ? 'close' : 'open'} Store ${options.parentModalSelector ? 'in ' + options.parentModalSelector : ''}`,
    );

    if (isModalOpened) {
      event.stopPropagation();
    }
    setTimeout(() => setIsModalOpened(!isModalOpened), 0);
    //its need to avoid event absorption by e.stopPropagation
    //Without that "setTimeout" and "if (isModalOpened){...}" other modals won't close with click on element contains e.stopPropagation like modals buttons
  }

  function stopPropagationInModal(event: React.MouseEvent) {
    console.log(`toggling modal to ${isModalOpened ? 'close' : 'open'} Store`);

    if (isModalOpened) {
      event.stopPropagation();
    }
  }

  return { isModalOpened, setIsModalOpened, toggleModal, stopPropagationInModal };
}
