import { object } from 'prop-types';
import { SingleCharacter } from '../singleCharacter';

const SinglePage = ({ data }) => {
    return (
        <div className="grid gap-10 grid-cols-4">
            {data.results.map(({ gender, name, image, status, id }) => (
                <SingleCharacter key={id} gender={gender} name={name} image={image} status={status} />
            ))}
        </div>
    );
};

SinglePage.propTypes = {
    data: object.isRequired,
};

export default SinglePage;
