import arrow_up from '@assets/arrow_up.svg';
import { menuElements } from '../../constants/menuElements'
import { Link } from 'react-router-dom';
import './Menu.scss';
import { useState } from 'react';
import ExtraConfig from './ExtraConfig';

const Menu = () => {
    const [isExtraConfigOpened, setIsExtraConfigOpened] = useState(false);

    const toggleExtra = (name: string) => {
        if (name === 'Настройки') {
            setIsExtraConfigOpened(prev => !prev);
        }
    };

    return <section className="crm_menu">
        <span className="crm_menu-title">Меню</span>
        <nav className="crm_menu-content">
            <ul className='crm_menu-links'>
                {menuElements.map((el, i) => <div key={i} className='crm_menu-link-container'>
                    <div className='crm_menu-link' onClick={() => toggleExtra(el.name)}>
                        <img src={el.picture} alt="" />
                        <Link to={el.src}>{el.name}</Link>
                        {isExtraConfigOpened && el.name === 'Настройки' && <img className='link_arrow' src={arrow_up} alt="" />}
                    </div>
                    {isExtraConfigOpened && el.name === 'Настройки' && <ExtraConfig />}
                </div>)}
            </ul>
        </nav>
    </section>
};

export default Menu;