import "./styles.scss";
import {useTranslation} from "react-i18next";

export function AsideFooter() {
    const {t} = useTranslation();

    return <article className="aside-footer">
        <div className="guide-links">
            <a className="guide-links__item" href="https://about.youtube/">{t("About")}</a>
            <a className="guide-links__item" href="https://about.youtube/">{t("Press")}</a>
            <a className="guide-links__item" href="https://about.youtube/">{t("Copyright")}</a>
            <a className="guide-links__item" href="https://about.youtube/">{t("Contact Us")}</a>
            <a className="guide-links__item" href="https://about.youtube/">{t("Creator")}</a>
            <a className="guide-links__item" href="https://about.youtube/">{t("Advertise")}</a>
            <a className="guide-links__item" href="https://about.youtube/">{t("Developers")}</a>
            <div className="guide-links__space"></div>
            <a className="guide-links__item" href="https://about.youtube/">{t("Terms")}</a>
            <a className="guide-links__item" href="https://about.youtube/">{t("Privacy")}</a>
            <a className="guide-links__item" href="https://about.youtube/">{t("Policy And Safety")}</a>
            <a className="guide-links__item" href="https://about.youtube/">{t("How YouTube Works")}</a>
            <a className="guide-links__item" href="https://about.youtube/">{t("Test New Feature")}</a>
        </div>
        <span className="copyright">© 2024 Google LLC</span>
    </article>
}