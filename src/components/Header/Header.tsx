import { useState } from 'react';
import { Category } from '../../@types/category';
import './Header.scss';

type HeaderProps = {
  categories: Category[];

  setZenMode: (newValue: number) => void;
};

function Header({ categories, setZenMode }: HeaderProps) {
  const [zenMode, setZenModeState] = useState(0);

  const handleClickZenMode = () => {
    if (zenMode === 0) {
      setZenMode(1);
      setZenModeState(1);
    } else {
      setZenMode(0);
      setZenModeState(0);
    }
  };

  return (
    <header className="menu" id="header">
      <nav className="menu-nav">
        <a className="menu-link menu-link--selected" href="#header">
          Accueil
        </a>

        {categories.map((category) => (
          <a className="menu-link" key={category.id} href={`#${category.slug}`}>
            {category.name}
          </a>
        ))}

        <button className="menu-btn" type="button" onClick={handleClickZenMode}>
          Activer le mode zen
        </button>
      </nav>
    </header>
  );
}

export default Header;
