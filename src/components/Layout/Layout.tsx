import { Header } from "../Header";

const Layout = ({ children }) => <div className="crm_layout">
    <Header />
    {children}
</div>;

export default Layout;