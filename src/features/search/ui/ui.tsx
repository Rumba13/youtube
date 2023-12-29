import "./styles.scss";
import {Field, Form, Formik} from "formik";
import {search} from "../api/search";
import {Icon} from "../../../shared/ui/icon";
import keyboardIcon from "../../../images/keyboard-icon.png";
import {SearchIcon} from "./search-icon";
import {CrossIcon} from "./cross-icon";
import {VoiceSearchIcon} from "./voice-search-icon";
import {useState} from "react";
import {TextTip} from "../../../shared/ui/text-tip";
import {VoiceSearchModal} from "./voice-search-modal";

export function Search() {
    const [isFormFocused, setIsFormFocused] = useState<boolean>(false);
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

    return <div className={`search ${isFormFocused ? "focused" : ""}`}>
        <Formik initialValues={{query: ""}} onSubmit={(values, {setSubmitting}) => {
            search(values.query); //TODO add returning to state
            setSubmitting(false);
        }}>
            {({values, isSubmitting, setFieldValue}) =>
                <Form className="search-form">
                    <label className="search-form-container" htmlFor="query">
                        <SearchIcon/>
                        <Field className="search-form__field" type="text" name="query" id="query"
                               placeholder="Введите запрос" onFocus={() => setIsFormFocused(true)}
                               onBlur={() => setIsFormFocused(false)}/>
                        <Icon className="search-form__virtual-keyboard-icon dark-theme" icon={keyboardIcon}/>
                        {values.query &&
                            <CrossIcon onClick={() => setFieldValue("query", "")}/>
                        }
                    </label>
                    <button className="search-icon-button" type="submit" disabled={isSubmitting}>
                        <SearchIcon/>
                        <TextTip>Введите запрос</TextTip>
                    </button>
                    <VoiceSearchIcon toolTip onClick={() => setIsModalOpened(true)}/>
                    <VoiceSearchModal isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened}/>
                </Form>
            }
        </Formik>
    </div>
}