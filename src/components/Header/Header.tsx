import { NavLink } from 'react-router-dom';
import { Category } from '../../@types/category';
import './Header.scss';

type SetterState<T> = React.Dispatch<React.SetStateAction<T>>;

type HeaderProps = {
  categories: Category[];
  zenMode: boolean;
  setZenMode: SetterState<boolean>;
};

function Header({ categories, zenMode, setZenMode }: HeaderProps) {
  const handleClickZenMode = () => {
    setZenMode((oldZenModeValue) => !oldZenModeValue);
  };

  return (
    <header className="menu" id="header">
      <nav className="menu-nav">
        <NavLink
          className={({ isActive }) =>
            `menu-link ${isActive ? 'menu-link--selected' : ''}`
          }
          to="/"
        >
          Accueil
        </NavLink>

        {categories.map((category) => (
          <NavLink
            className={({ isActive }) =>
              `menu-link ${isActive ? 'menu-link--selected' : ''}`
            }
            to={`/category/${category.slug}`}
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}

        <button className="menu-btn" type="button" onClick={handleClickZenMode}>
          {zenMode ? 'Désactiver' : 'Activer'} le mode zen
        </button>
      </nav>
    </header>
  );
}

export default Header;
