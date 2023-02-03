import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar2.css";
import Logo from './logo.png'

function Navbar2() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<nav ref={navRef}>
				<a href="/home" className="nav-link">الصفحة الرئيسية</a>
				<a href="/signin" className="nav-link">تسجيل الدخول(خاص)</a>
				<a href="/view" className="nav-link">عرض الشاليهات</a>
				<a href="#about" className="nav-link">حول</a>

				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
            <a  href="#" className="cont"><img src={Logo} alt="BooNametstrap" className='logo'/></a>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar2;