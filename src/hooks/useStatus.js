import { useState, useEffect } from 'react';
import { CHARACTERS_STATUSES } from '../constants/common';

const { ALIVE, ONLINE, OFFLINE } = CHARACTERS_STATUSES;

function useCharactersStatus(status) {
    const [charactersStatus, setCharactersStatus] = useState('');

    useEffect(() => {
        if (status === ALIVE) {
            setCharactersStatus(ONLINE);
        } else {
            setCharactersStatus(OFFLINE);
        }
    });

    return charactersStatus;
}

export default useCharactersStatus;
