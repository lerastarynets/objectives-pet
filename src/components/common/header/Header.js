import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="fixed flex justify-around items-center h-16 bg-gray-900 text-amber-200 w-full">
            <Link to={'/main'}>Main</Link>
            <Link to={'/characters'}>Characters List</Link>
            <Link to={'/cc'}>Dialogs</Link>
        </header>
    );
};
export default Header;
