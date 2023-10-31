import { Category } from '../../@types/category';
import './Header.scss';

type HeaderProsp = {
  categories: Category[];
};

function Header({ categories }: HeaderProsp) {
  return (
    <header className="menu" id="header">
      <nav className="menu-nav">
        <a className="menu-link menu-link--selected" href="#header">
          Accueil
        </a>

        {categories.map((category) => (
          <a className="menu-link" key={category.id} href="#header">
            {category.name}
          </a>
        ))}

        <button className="menu-btn" type="button">
          Activer le mode zen
        </button>
      </nav>
    </header>
  );
}

export default Header;
