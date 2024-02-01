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
                    "restricted_mode_on": "On",
                    "restricted_mode_off": "Off",
                    "Ago": "ago",
                    "On The Channel": "On The Channel \"{{channelName}}\"",
                    "New Video": "new video appeared:\"{{videoName}}\"",
                    "New Stream": "new stream is going live \"{{streamName}}\"",
                    "YouTube Main Page": "YouTube main page",
                    "Home": "Home",
                    "Shorts": "Shorts",
                    "Subscriptions": "Subscriptions",
                    "You": "You",
                    "My Channel": "My channel",
                    "History": "History",
                    "Your Videos": "Your videos",
                    "Watch Later": "Watch later",
                    "Expand": "Expand",
                    "Liked": "Liked",
                    "Collapse": "Collapse",
                    "Show More Channels": "Show More {{channelCount}} Channels",
                    "Explore": "Explore",
                    "Trending": "Trending",
                    "Music": "Music",
                    "Gaming": "Gaming",
                    "Sport": "Sport",
                    "More From YouTube": "More from YouTube",
                    "YouTube Premium": "YouTube Premium",
                    "YouTube Studio": "YouTube Studio",
                    "YouTube Music": "YouTube Music",
                    "YouTube Kids": "YouTube Kids",
                    "Report History": "Report History",
                    "About": "About",
                    "Press": "Press",
                    "Copyright": "Copyright",
                    "Contact Us": "Contact us",
                    "Creator": "Creator",
                    "Advertise": "Advertise",
                    "Developers": "Developers",
                    "Terms": "Terms",
                    "Privacy": "Privacy",
                    "Policy And Safety" : "Policy & Safety",
                    "How YouTube Works": "How YouTube works",
                    "Test New Feature": "Test new feature",

                    "keySecond_one": "{{count}} second",
                    "keySecond_other": "{{count}} seconds",
                    "keyMinute_one": "{{count}} minute",
                    "keyMinute_other": "{{count}} minutes",
                    "keyHour_one": "{{count}} hour",
                    "keyHour_other": "{{count}} hours",
                    "keyDay_one": "{{count}} day",
                    "keyDay_other": "{{count}} days",
                    "keyWeek_one": "{{count}} week",
                    "keyWeek_other": "{{count}} weeks",
                    "keyMonth_one": "{{count}} month",
                    "keyMonth_other": "{{count}} months",
                    "keyYear_one": "{{count}} year",
                    "keyYear_other": "{{count}} years",

                    "million": "млн.",
                    "thousand": "тыс.",
                    "keyView_other": "views",
                    "keyView_one": "view",
                    "keyView_few": "просмотра",
                    "keyView_many": "просмотров",
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
                    "restricted_mode_on": "Да",
                    "restricted_mode_off": "Нет",

                    "keySecond_one": "{{count}} секунда",
                    "keySecond_few": "{{count}} секунды",
                    "keySecond_many": "{{count}} секунд",

                    "keyMinute_one": "{{count}} минута",
                    "keyMinute_few": "{{count}} минуты",
                    "keyMinute_many": "{{count}} минут",

                    "keyHour_one": "{{count}} час",
                    "keyHour_few": "{{count}} часа",
                    "keyHour_many": "{{count}} часов",

                    "keyDay_one": "{{count}} день",
                    "keyDay_few": "{{count}} дня",
                    "keyDay_many": "{{count}} дней",

                    "keyWeek_one": "{{count}} неделя",
                    "keyWeek_few": "{{count}} недели",
                    "keyWeek_many": "{{count}} недель",

                    "keyMonth_one": "{{count}} месяц",
                    "keyMonth_few": "{{count}} месяца",
                    "keyMonth_many": "{{count}} месяцев",

                    "keyYear_one": "{{count}} год",
                    "keyYear_few": "{{count}} года",
                    "keyYear_many": "{{count}} лет",

                    "million": "млн.",
                    "thousand": "тыс.",
                    "keyView_one": "просмотр",
                    "keyView_few": "просмотра",
                    "keyView_many": "просмотров",
                    "keyView_other": "просмотров",

                    "Ago": "назад",
                    "On The Channel": "На канале \"{{channelName}}\"",
                    "New Video": "появилось новое видео:\"{{videoName}}\"",
                    "New Stream": "идёт трансляция \"{{streamName}}\"",
                    "YouTube Main Page": "Главная страница YouTube",
                    "Home": "Главная",
                    "Shorts": "Shorts",
                    "Subscriptions": "Подписки",
                    "You": "Вы",
                    "My Channel": "Мой канал",
                    "History": "История",
                    "Your Videos": "Ваши видео",
                    "Watch Later": "Смотреть позже",
                    "Expand": "Развернуть",
                    "Liked": "Понравившиеся",
                    "Collapse": "Свернуть",
                    "Show More Channels": "Показать ещё {{channelCount}} каналов",
                    "Explore": "Навигатор",
                    "Trending": "В тренде",
                    "Music": "Музыка",
                    "Gaming": "Видеоигры",
                    "Sport": "Спорт",
                    "More From YouTube": "Другие возможности",
                    "YouTube Premium": "YouTube Premium",
                    "YouTube Studio": "Творческая студия YouTube",
                    "YouTube Music": "YouTube Music",
                    "YouTube Kids": "YouTube Детям",
                    "Report History": "Жалобы",
                    "About": "О сервисе",
                    "Press": "Прессе",
                    "Copyright": "Авторские права",
                    "Contact Us": "Связаться с нами",
                    "Creator": "Авторам",
                    "Advertise": "Рекламодателям",
                    "Developers": "Разработчикам",
                    "Terms": "Условия использования",
                    "Privacy": "Конфиденциальность",
                    "Policy And Safety" : "Правила и безопасность",
                    "How YouTube Works": "Как работает YouTube",
                    "Test New Feature": "Тестирование новых функций",
                }
            },

        },
        detection: {order: ["path", "navigator"]},
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    })