import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { HEADER_LINKS } from '../../../constants/common';

const Header = () => {
    const location = useLocation();
    const isSelected = (path) => location.pathname === path;
    return (
        <header className="fixed flex justify-around items-center h-16 bg-gray-900 text-amber-200 font-bold w-full">
            {HEADER_LINKS.map(({ TITLE, PATH }) => (
                <Link key={TITLE} className={cn(isSelected(PATH) ? 'text-amber-600' : 'text-amber-200')} to={PATH}>
                    {TITLE}
                </Link>
            ))}
        </header>
    );
};
export default Header;
