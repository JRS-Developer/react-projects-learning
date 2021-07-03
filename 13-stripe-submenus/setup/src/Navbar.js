import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
	const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

	const displaySubMenu = (e) => {
		const page = e.target.textContent
		const { left, right, bottom } = e.target.getBoundingClientRect()
		const center = (left + right) / 2
		const topSpace = 3
		const bottomDist = bottom - topSpace
		
		openSubmenu(page, {
			center, bottomDist
		})
	}

	const handleSubmenu = (e) => {
		if (!e.target.classList.contains('link-btn')) {
			closeSubmenu()
		}
	}
	return (
		<nav className='nav' onMouseOver={handleSubmenu}>
			<div className='nav-center'>
				<div className='nav-header'>
					<img className='nav-logo' src={logo} alt='Stripe' />
					<button className='btn toggle-btn' onClick={openSidebar}>
						<FaBars />
					</button>
				</div>
				<ul className='nav-links'>
					<li>
						<button className='link-btn' onMouseOver={displaySubMenu}>products</button>
					</li>
					<li>
						<button className='link-btn' onMouseOver={displaySubMenu}>developers</button>
					</li>
					<li>
						<button className='link-btn' onMouseOver={displaySubMenu}>company</button>
					</li>
				</ul>
				<button className='btn signin-btn'>sign in</button>
			</div>
		</nav>
	);
};

export default Navbar;
