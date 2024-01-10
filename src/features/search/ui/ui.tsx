import "./styles.scss";
import keyboardIcon from "../../../images/keyboard-icon.png";
import {Field, Form, Formik} from "formik";
import {search} from "../api/search";
import {Icon} from "../../../shared/ui/icon";
import {SearchIcon} from "../../../images/search-icon";
import {CrossIcon} from "./cross-icon";
import {VoiceSearchButton} from "./voice-search-icon";
import {useEffect, useState} from "react";
import {VoiceSearchModal} from "./voice-search-modal";
import {observer} from "mobx-react";
import {overlayState} from "../../../app/overlay";
import {useScreenWidth} from "../../../shared/lib/use-screen-width";
import {SearchButton} from "./search-button";
import {SvgIcon} from "../../../shared/ui/svg-icon";
import {searchState} from "../model/model";

export const Search = observer(() => {
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
    const screenWidth = useScreenWidth();

    const {
        isSearchFocused,
        isSearchOpened,
        isSearchMinified,
        setIsSearchMinified,
        setIsSearchOpened,
        setIsSearchFocused
    } = searchState;

    if (isSearchMinified && isSearchOpened) {
        document.addEventListener("click", () => setIsSearchOpened(false));
    }

    useEffect(() => {
        overlayState.setIsOverlayOpened(isModalOpened);
        setIsSearchMinified(screenWidth <= 750);

        if (screenWidth >= 750) {
            setIsSearchOpened(false);
        }

    }, [screenWidth, isModalOpened]);
    //TODO write adaptive on css
    return <>
        {isSearchMinified && <>
            {!isSearchOpened && <> <SearchButton type="mini" buttonType="button" onClick={(event) => {
                setIsSearchOpened(true);
                setIsSearchFocused(true);
                event.stopPropagation();
            }}/>
                <VoiceSearchButton type="mini"/>
            </>}
        </>
        }

        {(!isSearchMinified || isSearchOpened) &&
            <div className={`search ${isSearchFocused ? "focused" : ""}`}
                 onClick={(event) => isSearchOpened ? event.stopPropagation() : void 0}>
                <Formik initialValues={{query: ""}} onSubmit={(values, {setSubmitting}) => {
                    search(values.query); //TODO add returning to state
                    setSubmitting(false);
                }}>
                    {({values, isSubmitting, setFieldValue}) =>
                        <Form className="search-form">
                            <label className="search-form-container" htmlFor="query">
                                <SvgIcon className="search-icon" Icon={SearchIcon}/>
                                <Field className="search-form__field" type="text" name="query" id="query"
                                       placeholder="Введите запрос" onFocus={() => setIsSearchFocused(true)}
                                       onBlur={() => setIsSearchFocused(false)}/>
                                <Icon className="search-form__virtual-keyboard-icon dark-theme" icon={keyboardIcon}/>
                                {values.query &&
                                    <CrossIcon onClick={() => setFieldValue("query", "")}/>
                                }
                            </label>
                            <SearchButton type="normal" buttonType="submit" disabled={isSubmitting}/>

                            <VoiceSearchButton type={isSearchMinified ? "mini" : "normal"} toolTip
                                               onClick={() => setIsModalOpened(true)}/>

                            <VoiceSearchModal isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened}/>
                        </Form>
                    }
                </Formik>
            </div>
        }
    </>
})