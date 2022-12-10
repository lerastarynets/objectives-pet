export const baseUrl = 'https://rickandmortyapi.com/api';

export const ROUTES = {
    MAIN_PAGE: '/main',
    CHARACTERS: '/characters',
    DIALOGS: '/cc',
};

export const HEADER_LINKS = [
    { TITLE: 'Main page', PATH: ROUTES.MAIN_PAGE },
    { TITLE: 'Characters list', PATH: ROUTES.CHARACTERS },
    { TITLE: 'Dialogs', PATH: ROUTES.DIALOGS },
];

export const DEFAULT_PORTION_NUMBER = 1;
export const PORTION_SIZE = 5;

export const CHARACTERS_INFO_SECTIONS = {
    NAME: 'Name',
    GENDER: 'Gender',
    STATUS: 'Status',
};
