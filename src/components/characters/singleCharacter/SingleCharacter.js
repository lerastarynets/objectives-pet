import { string } from 'prop-types';
import { CHARACTERS_INFO_SECTIONS } from '../../../constants/common';
import { InfoItem } from './infoItem';
import cn from 'classnames';
import classes from './SingleCharacter.module.css';

const { NAME, GENDER, STATUS } = CHARACTERS_INFO_SECTIONS;

const SingleCharacter = ({ name, gender, status, image }) => {
    return (
        <div className={cn('w-56 grid grid-cols-3 gap-y-2', classes.characterContainer)}>
            <InfoItem className={classes.name} section={NAME} value={name} />
            <div className={cn('flex justify-center', classes.image)}>
                <img className="h-40 w-40" src={image} alt="ava" />
            </div>
            <InfoItem className={classes.gender} section={GENDER} value={gender} />
            <InfoItem className={classes.status} section={STATUS} value={status} />
        </div>
    );
};

SingleCharacter.propTypes = {
    name: string.isRequired,
    gender: string.isRequired,
    status: string.isRequired,
    image: string.isRequired,
};

export default SingleCharacter;
