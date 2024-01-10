import "./styles.scss";
import {CrossIcon} from "../cross-icon";
import {VoiceSearchButton} from "../voice-search-icon";
import {useTranslation} from "react-i18next";

type PropsType = {
    isModalOpened: boolean,
    setIsModalOpened: Function
}

export function VoiceSearchModal({isModalOpened, setIsModalOpened}: PropsType) {
const {t} = useTranslation();

    return <div className={`voice-search-modal ${isModalOpened ? "opened" : ""}`}>
        <div className="voice-search-modal-container">
            <CrossIcon className="voice-search-modal__cross" onClick={() => setIsModalOpened(false)}/>
            <span className="voice-search-modal__title">{t("Voice Search")}</span>
            <span className="voice-search-modal__content">{t("To Use Voice Search")}
        </span>
            <VoiceSearchButton/>
        </div>
    </div>


    //TODO add pulse component in future
    //separate modal
}