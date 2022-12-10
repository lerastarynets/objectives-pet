import { string } from 'prop-types';
import cn from 'classnames';

const InfoItem = ({ section, value, className }) => {
    return (
        <div className={cn('flex flex-col items-center', className)}>
            <p className="bg-yellow-200 text-xs">{section}</p>
            <p className="font-bold">{value}</p>
        </div>
    );
};

InfoItem.propTypes = {
    className: string.isRequired,
    section: string.isRequired,
    value: string.isRequired,
};

export default InfoItem;
