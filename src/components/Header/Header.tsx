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
        <a className="menu-link menu-link--selected" href="#header">
          Accueil
        </a>

        {categories.map((category) => (
          <a
            className="menu-link"
            key={category.id}
            href={`/category/${category.slug}`}
          >
            {category.name}
          </a>
        ))}

        <button className="menu-btn" type="button" onClick={handleClickZenMode}>
          {zenMode ? 'Désactiver' : 'Activer'} le mode zen
        </button>
      </nav>
    </header>
  );
}

export default Header;
