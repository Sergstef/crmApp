import { menuExtraElements } from '../../constants/menuElements'
import { Link } from 'react-router-dom';
import './Menu.scss';

const ExtraConfig = ({ isMenuVisible }) => <ul className='crm_menu-links'>
{menuExtraElements.map((el, i) => <div key={i} className='crm_menu-link crm_menu-extra-link'>
    <Link className='crm_menu-link-text' to={el.src}>
        <img src={el.picture} alt="" />
        {isMenuVisible && <span>{el.name}</span>}
    </Link>
</div>)}
</ul>;

export default ExtraConfig;