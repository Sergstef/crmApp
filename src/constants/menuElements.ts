import calendar from '@assets/calendar.svg';
import config from '@assets/config.svg';
import exit from '@assets/exit.svg';
import finance from '@assets/finance.svg';
import home from '@assets/home.svg';
import map from '@assets/map.svg';
import profile_config from '@assets/profile_config.svg';
import search from '@assets/search.svg';
import tables from '@assets/tables.svg';
import widgets from '@assets/widgets.svg';
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