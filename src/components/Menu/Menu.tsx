const arrow_up = require("@assets/arrow_up.svg") as string;
import { menuElements } from '../../constants/menuElements'
import { Link } from 'react-router-dom';
import './Menu.scss';
import { useEffect, useState } from 'react';
import ExtraConfig from './ExtraConfig';
import { useResize } from '../../hooks/useResize';

const Menu = () => {
    const [isExtraConfigOpened, setIsExtraConfigOpened] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const windowWidth = useResize();

    useEffect(() => {
        if (windowWidth > 768 && !isMenuVisible) {
            setIsMenuVisible(true);
        } else  if (windowWidth <= 768 && isMenuVisible) {
            setIsMenuVisible(false);
        }
    }, [windowWidth]);

    const toggleExtra = (name: string) => {
        if (name === 'Настройки') {
            setIsExtraConfigOpened(prev => !prev);
        }
    };


    return <section className="crm_menu">
        {isMenuVisible && <span className="crm_menu-title">Меню</span>}
        <nav className="crm_menu-content">
            <ul className='crm_menu-links'>
                {menuElements.map((el, i) => <div key={i} className='crm_menu-link-container'>
                    <div className='crm_menu-link' onClick={() => toggleExtra(el.name)}>
                        <Link className='crm_menu-link-text' to={el.src}>
                            <img src={el.picture} alt="" />
                            {isMenuVisible && <span>{el.name}</span>}
                        </Link>
                        {isExtraConfigOpened && el.name === 'Настройки' && <img className='link_arrow' src={arrow_up} alt="" />}
                    </div>
                    {isExtraConfigOpened && el.name === 'Настройки' && <ExtraConfig isMenuVisible={isMenuVisible} />}
                </div>)}
            </ul>
        </nav>
    </section>
};

export default Menu;