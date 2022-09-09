import { ActiveLink } from './ActiveLink'
import styles from './Nav.module.css'

const menuItems = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'Pricing',
    href: '/pricing'
  },
];

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        {menuItems.map(({text, href}) => <ActiveLink href={href} text={text} key={text} />)}
    </nav>
  )
}

export default Navbar