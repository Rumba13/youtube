import "./styles.scss";
import {FC, MouseEventHandler} from "react";
import {RegisterFormSlotType} from "../../register-form/ui/ui";


type PropsType = {
    isOpened: boolean,
    onClick?: MouseEventHandler,
    RegisterFormSlot:RegisterFormSlotType
}

export function RegisterModal({isOpened, onClick, RegisterFormSlot}: PropsType) {
    return <div className={`register-modal ${isOpened ? " opened" : ""}`} onClick={onClick}>
        <RegisterFormSlot/>
    </div>
}