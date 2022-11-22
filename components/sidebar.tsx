import Link from 'next/link';
import { useEffect, useState } from 'react';

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

  // TODO: find a better way to set active tab
  const handleActiveSideBar = (activeLink: String) => {
    if (activeLink.toLowerCase().includes('home')) {
      setActiveSidebar(sideNavItems[0].label);
    } else if (activeLink.toLowerCase().includes('about')) {
      setActiveSidebar(sideNavItems[1].label);
    } else if (activeLink.toLowerCase().includes('skills')) {
      setActiveSidebar(sideNavItems[2].label);
    } else if (activeLink.toLowerCase().includes('experience')) {
      setActiveSidebar(sideNavItems[3].label);
    } else if (activeLink.toLowerCase().includes('contact')) {
      setActiveSidebar(sideNavItems[4].label);
    } else if (activeLink.toLowerCase().includes('blog')) {
      setActiveSidebar(sideNavItems[5].label);
    } else if (activeLink.toLowerCase().includes('resume')) {
      setActiveSidebar(sideNavItems[6].label);
    }
  }

  useEffect(() => {
    handleActiveSideBar(window.location.pathname.split('/')[1]);
  }, []);

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