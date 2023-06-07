import { menuExtraElements } from '../../constants/menuElements'
import { Link } from 'react-router-dom';
import './Menu.scss';

const ExtraConfig = () => <ul className='crm_menu-links'>
{menuExtraElements.map((el, i) => <div key={i} className='crm_menu-link crm_menu-extra-link'>
    <img src={el.picture} alt="" />
    <Link to={el.src}>{el.name}</Link>
</div>)}
</ul>;

export default ExtraConfig;