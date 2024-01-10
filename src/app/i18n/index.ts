import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import XHR from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(XHR)
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            en: {
                translation: {
                    "Enter Query": "Enter query",
                    "VladIsAssHole": "Vlad Is Asshole",
                    "Create": "Create",
                    "Back": "Back",
                    "Enter Search": "Enter search",
                    "Voice Search": "Voice search",
                    "To Use Voice Search": "To use voice search, go to settings browser and allow the application access to the microphone.",
                    "Add Video": "Add video",
                    "Start Stream": "Start stream",
                    "Notifications": "Notifications",
                    "Hide Notification": "Hide notification",
                    "Disable Notifications At Channel": "Disable notifications at channel \"{{channelName}}\"",
                    "Google Account": "Google account",
                    "Change Account": "Change account",
                    "Exit": "Exit",
                    "Creator Studio Youtube": "Creator studio youtube",
                    "Purchases And Paid Subscriptions": "Purchases and paid subscriptions",
                    "Your Data on Youtube": "Your data on Youtube",
                    "Theme": "Theme",
                    "Language": "Language",
                    "Safe Mode": "Safe mode",
                    "Country": "Country",
                    "Fast Keyboard": "Fast keyboard",
                    "Options": "Options",
                    "Inquiry": "Inquiry",
                    "Send Review": "Send review",
                    "View Channel": "View channel"
                }
            },
            ru: {
                translation: {
                    "Enter Query": "Введите запрос",
                    "VladIsAssHole": "Влад Позорник",
                    "Create": "Создать",
                    "Back": "Назад",
                    "Enter Search": "Введите запрос",
                    "Voice Search": "Голосовой поиск",
                    "To Use Voice Search": "Чтобы пользоваться голосовым поиском, перейдите в настройки браузера и откройте приложению доступ к микрофону.",
                    "Add Video": "Добавить видео",
                    "Start Stream": " Начать трансляцию",
                    "Notifications": "Уведомления",
                    "Hide Notification": "Скрыть уведомление",
                    "Disable Notifications At Channel": "Отключить все уведомления о канале \"{{channelName}}\"",
                    "Google Account": "Аккаунт Google",
                    "Change Account": "Сменить аккаунт",
                    "Exit": "Выйти",
                    "Creator Studio Youtube": "Творческая студия YouTube",
                    "Purchases And Paid Subscriptions": "Покупки и платные подписки",
                    "Your Data on Youtube": "Ваши данные на YouTube",
                    "Theme": "Тема",// TODO FUTURE add template
                    "Language": "Язык",
                    "Safe Mode": "Безопасный режим",
                    "Country": "Страна",
                    "Fast Keyboard": "Быстрые клавиши",
                    "Options": "Настройки",
                    "Inquiry": "Справка",
                    "Send Review": "Отправить отзыв",
                    "View Channel": "Посмотреть канал"

                }
            },

        },
        detection: {order: ["path", "navigator"]},
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    })