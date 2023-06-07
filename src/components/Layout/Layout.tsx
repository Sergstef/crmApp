import { Header } from "../Header";
import { Menu } from "../Menu";
import './Layout.scss';

const Layout = ({ children }) => <div className="crm_layout">
    <Header />
    <div className="crm_body">
        <Menu />
        <main className="crm_content">{children}</main>
    </div>
</div>;

export default Layout;