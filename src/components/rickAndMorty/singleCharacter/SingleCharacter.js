import { string } from 'prop-types';

const SingleCharacter = ({ name, gender, status, image }) => {
    return (
        <div className="flex flex-col justify-center items-center w-56">
            <p>Name: {name}</p>
            <p>Gender: {gender}</p>
            <p>Status: {status}</p>
            <img className="h-32 w-32" src={image} alt="ava" />
        </div>
    );
};

SingleCharacter.propTypes = {
    name: string.isRequired,
    gender: string.isRequired,
    status: string.isRequired,
    image: string.isRequired,
};

SingleCharacter.defaultProps = {
    defaultCustomerInviteMessage: '',
};

export default SingleCharacter;
