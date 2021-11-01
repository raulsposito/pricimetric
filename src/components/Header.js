import { React, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Menu } from 'primereact/menu';
import Logo from '../assets/images/pricimetrics-logo.svg';
import IcnHome from '../assets/images/icn-home.svg';
import IcnPricing from '../assets/images/icn-pricing.svg';
import IcnPerformance from '../assets/images/icn-performance.svg';
import IcnUser from '../assets/images/icn-user.svg';
import IcnAdmin from '../assets/images/icn-cog-solid.svg';
import IcnBrowse from '../assets/images/icn-list-alt-solid.svg';

const Header = (props) => {
	const { t } = props;
	const userMenu = useRef(null);

	useEffect(() => {

	}, []);

	const doLogout = () => {
		// DO NOTHING
	}

	const userMenuItems = [
		{
			label: t('Header.UserMenu_Logout'),
			icon: 'pi pi-sign-out',
			command: () => {
				doLogout();
			}
		}
	];

	return (
		<header className="header">
			<Menu model={userMenuItems} popup ref={userMenu} id="popup_menu" />

			<div className="header-logo">
				<Link to="/" title="Pricimetrics">
					<img src={Logo} alt="Pricimetrics" style={{ width: '55px', height: '55px' }} />
				</Link>
			</div>
			<nav className="header-nav">
				<NavLink
					to="/"
					exact={true}
					activeClassName="is-active"
					title="Dashboard"
				>
					<img src={IcnHome} alt="Dashboard" />
				</NavLink>
				<NavLink to="/pricing" activeClassName="is-active" title="Pricing">
					<img src={IcnPricing} alt="Pricing" />
				</NavLink>
				<NavLink
					to="/performance"
					activeClassName="is-active"
					title="Performance"
				>
					<img src={IcnPerformance} alt="Performance" />
				</NavLink>
				<NavLink to="/browse" activeClassName="is-active" title="Browse">
					<img src={IcnBrowse} alt="Browse" />
				</NavLink>
			</nav>
			<div className="header-user">
				<NavLink to="/config" activeClassName="is-active" title="Config">
					<img src={IcnAdmin} alt="Config" />
				</NavLink>
				<Link to='#' title="User" onClick={(event) => userMenu.current.toggle(event)}>
					<img src={IcnUser} alt="User" />
				</Link>
			</div>
		</header>);
}
export default withTranslation()(Header)
