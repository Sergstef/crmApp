const calendar = require("@assets/calendar.svg") as string;
const config = require("@assets/config.svg") as string;
const exit = require("@assets/exit.svg") as string;
const finance = require("@assets/finance.svg") as string;
const home = require("@assets/home.svg") as string;
const map = require("@assets/map.svg") as string;
const profile_config = require("@assets/profile_config.svg") as string;
const search = require("@assets/search.svg") as string;
const tables = require("@assets/tables.svg") as string;
const widgets = require("@assets/widgets.svg") as string;
import { IMenuLinks } from '../interfaces/menuInterfaces';

export const menuElements: Array<IMenuLinks> = [
    {
        picture: home,
        name: 'Главная',
        src: '/'
    },
    {
        picture: search,
        name: 'Поиск адресов',
        src: '/addresses'
    },
    {
        picture: tables,
        name: 'Таблицы'
    },
    {
        picture: calendar,
        name: 'Календарь'
    },
    {
        picture: map,
        name: 'Карты'
    },
    {
        picture: widgets,
        name: 'Виджеты'
    },
    {
        picture: config,
        name: 'Настройки'
    },
    {
        picture: exit,
        name: 'Выход'
    },
];

export const menuExtraElements: Array<IMenuLinks> = [
    {
        picture: profile_config,
        name: 'Настройки профиля'
    },
    {
        picture: finance,
        name: 'Управление финансами',
    }
];