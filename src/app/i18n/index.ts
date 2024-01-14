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
                    "Change Account": "Switch account",
                    "Exit": "Sign out",
                    "Creator Studio Youtube": "YouTube Studio",
                    "Purchases And Paid Subscriptions": "Purchases and membership",
                    "Your Data on Youtube": "Your data on Youtube",
                    "Theme": "Appearance: {{theme}}",
                    "Language": "Language: {{language}}",
                    "Safe Mode": "Restricted mode: {{mode}}",
                    "Country": "Location: {{location}}",
                    "Fast Keyboard": "Keyboard shortcuts",
                    "Settings": "Settings",
                    "Inquiry": "Help",
                    "Send Review": "Send feedback",
                    "View Channel": "View channel",
                    "en": "English",
                    "ru": "Russian",
                    "by": "Belarus",
                    "theme_sync": "Device theme",
                    "restricted_mode_on":"On",
                    "restricted_mode_off":"Off",
                    "keyHour_one":"{{count}} hour",
                    "keyHour_other":"{{count}} hours",
                    "Ago": "ago",
                    "On The Channel": "On The Channel \"{{channelName}}\"",
                    "New Video": "new video appeared:\"{{videoName}}\"",
                    "New Stream": "new stream is going live \"{{streamName}}\"",
                    "YouTube Main Page": "YouTube main page"
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
                    "Theme": "Тема: {{theme}}",// TODO FUTURE add template
                    "Language": "Язык: {{language}}",
                    "Safe Mode": "Безопасный режим: {{mode}}",
                    "Country": "Страна: {{location}}",
                    "Fast Keyboard": "Быстрые клавиши",
                    "Settings": "Настройки",
                    "Inquiry": "Справка",
                    "Send Review": "Отправить отзыв",
                    "View Channel": "Посмотреть канал",
                    "en": "Английский",
                    "ru": "Русский",
                    "by": "Беларусь",
                    "theme_sync": "как на устройстве",
                    "restricted_mode_on":"Да",
                    "restricted_mode_off":"Нет",
                    "keyHour_one":"{{count}} час",
                    "keyHour_few":"{{count}} часа",
                    "keyHour_many":"{{count}} часов",
                    "Ago": "назад",
                    "On The Channel": "На канале \"{{channelName}}\"",
                    "New Video": "появилось новое видео:\"{{videoName}}\"",
                    "New Stream": "идёт трансляция \"{{streamName}}\"",
                    "YouTube Main Page": "Главная страница YouTube"
                }
            },

        },
        detection: {order: ["path", "navigator"]},
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    })