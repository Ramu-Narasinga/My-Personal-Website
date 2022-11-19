import Link from 'next/link';
import { useState } from 'react';

import styles from '../styles/sidebar.module.css';

type SideNavItem = {
  label: string;
  navTo: string;
}

export default function Sidebar() {

  const [activeSidebar, setActiveSidebar] = useState<String>('Home');

  const sideNavItems: SideNavItem[] = [{
    label: 'Home',
    navTo: '/'
  }, {
    label: 'About',
    navTo: '/about'
  }, {
    label: 'Skills and Certification',
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

  const handleSidenavClick = (sideNavItem: SideNavItem) => {
    console.log("sideNavItem:", sideNavItem)
    setActiveSidebar(sideNavItem.label);
  }

  return (
    <div className={styles.sidebar}>
      {
        sideNavItems.map(sideNavItem => <Link 
          href={sideNavItem.navTo}
          className={
            activeSidebar == sideNavItem.label ? `${styles.activeSidenavItem} ${styles.sidenavItem}` :
            `${styles.sidenavItem}`
          }
          onClick={() => handleSidenavClick(sideNavItem)}
        >{sideNavItem.label}</Link>)
      }
    </div>
  );
}