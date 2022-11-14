import Link from 'next/link';
import styles from '../styles/sidebar.module.css';

type SideNavItem = {
  label: string;
  navTo: string;
}

export default function Sidebar() {

  const sideNavItems: SideNavItem[] = [{
    label: 'About',
    navTo: '/about'
  }, {
    label: 'My Skills',
    navTo: '/my-skills'
  }, {
    label: 'Experience',
    navTo: '/experience'
  }, {
    label: 'Contact',
    navTo: '/contact'
  }, {
    label: 'Blog',
    navTo: '/blog'
  }, {
    label: 'Resume',
    navTo: '/resume'
  }]

  return (
    <div className={styles.sidebar}>
      {
        sideNavItems.map(sideNavItem => <Link 
          href={sideNavItem.navTo}
          className={styles['sidenav-item']}
        >{sideNavItem.label}</Link>)
      }
    </div>
  );
}