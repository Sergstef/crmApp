const logo = require("@assets/logo.svg") as string;
const profile = require("@assets/profile.svg") as string;
import './Header.scss';

const Header = () => <header className="crm_header">
    <div className="crm_header-title">
        <img className="crm_header-title-logo" src={logo} alt="" />
        <span className="crm_header-title-text">Wrench CRM</span>
    </div>
    <div className="crm_header-profile">
        <img className="crm_header-profile-logo" src={profile} alt="" />
        <span className="crm_header-profile-text">Имя Фамилия</span>
    </div>
</header>;

export default Header;