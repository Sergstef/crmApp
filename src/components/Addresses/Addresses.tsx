import { useState } from 'react';
import './Addresses.scss';
import { getAddresses } from '../../services/addressesService';
import white_search from '@assets/white_search.svg';

const Addresses = () => {
    const [addresses, setAddresses] = useState([]);
    const [address, setAddress] = useState('');

    const search = () => {
        getAddresses(address).then((res: any) => setAddresses([...JSON.parse(res).suggestions]));
    };
    
    return <section className="crm_addresses">
        <span className="crm_addresses-title">Новости</span>
        <article className="crm_addresses-content">
            <span className="crm_addresses-item-label">Введите интересующий вас адрес</span>
            <div className="crm_addresses-item-form">
                <input className="crm_addresses-item-input" value={address} onChange={e => setAddress(e.target.value)}
                    type="text" placeholder='Введите интересующий вас адрес' />
                <button className="crm_addresses-item-button" onClick={search}>
                    <img src={white_search} alt="" />
                    <span>Поиск</span>
                </button>
            </div>
            {addresses?.length > 0 && <div className='crm_addresses-items'>
                <span className='crm_addresses-item crm_addresses-items-title'>Адреса</span>
                {addresses.map((el, i) => <span key={i} className='crm_addresses-item'>{el.value}</span>)}
            </div>}
        </article>
    </section>;
};

export default Addresses;