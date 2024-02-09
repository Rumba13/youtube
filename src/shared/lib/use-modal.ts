import React, {useState} from "react";

type UseModalOptionsType = {
    parentModalSelector?: string
}

function findParentModal(sharedNodeSelector: string | undefined) {
    let parentModal: Element | Document | null;
    if (sharedNodeSelector !== undefined) {
        parentModal = document.querySelector(sharedNodeSelector);

        if (parentModal === null) {
            parentModal = document;
            console.warn("Use Modal cant find modals shared node, check shared node selector");
        }
    } else {
        parentModal = document;
    }

    return parentModal;
}

export function useModal(isOpenedByDefault: boolean = false, options: UseModalOptionsType = {}) {
    const [isModalOpened, setIsModalOpened] = useState<boolean>(isOpenedByDefault);

    const parentModal = findParentModal(options.parentModalSelector);
    parentModal.addEventListener("click", (event) => {
        setIsModalOpened(false);
    });

    function toggleModal(event: React.MouseEvent) {
        if (isModalOpened) {
            event.stopPropagation();
        }
        setTimeout(() => setIsModalOpened(!isModalOpened), 0)
        //its need to avoid event absorption by e.stopPropagation
        //Without that "setTimeout" and "if (isModalOpened){...}" other modals won't close with click on element contains e.stopPropagation like modals buttons
    }

    function stopPropagationInModal(event: React.MouseEvent) {
        if (isModalOpened) {
            event.stopPropagation();
        }
    }

    return {isModalOpened, setIsModalOpened, toggleModal, stopPropagationInModal};
}