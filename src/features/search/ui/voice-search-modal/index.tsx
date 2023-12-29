import "./styles.scss";
import {CrossIcon} from "../cross-icon";
import {VoiceSearchIcon} from "../voice-search-icon";

type PropsType = {
    isModalOpened: boolean,
    setIsModalOpened: Function
}

export function VoiceSearchModal({isModalOpened, setIsModalOpened}: PropsType) {

    return <div className={`voice-search-modal ${isModalOpened ? "opened" : ""}`}>
        <div className="voice-search-modal-container">
            <CrossIcon className="voice-search-modal__cross" onClick={() => setIsModalOpened(false)}/>
            <span className="voice-search-modal__title">Голосовой поиск</span>
            <span className="voice-search-modal__content">Чтобы пользоваться голосовым поиском, перейдите в настройки
            браузера и откройте приложению доступ к микрофону.
        </span>
            <VoiceSearchIcon/>
        </div>
    </div>
    //TODO add pulse component in future
}