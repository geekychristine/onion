/* tslint-disable  no-any */
import { useState, useEffect, useRef } from 'react';
import { NavigationBarItem, OverflowWrapper } from './elements';
import { slugify } from '../utils';
import styles from './navigation-bar.module.css';

/* eslint-disable-next-line */
export interface NavigationBarProps {}

export function NavigationBar({ menu, overflow = true }) {
  const navRef = useRef(null);
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const renderItems = (item, ix) => {
    const { title, href } = item;
    const active = href && href?.includes(pathname);

    return (
      <li
        key={ix}
        data-intersectionid={slugify(title)}
        className="text-neutral-base whitespace-nowrap"
      >
        <NavigationBarItem {...item} active={active} />
      </li>
    );
  };

  return (
    <div className={styles['navigation-bar']}>
      <nav className="w-full">
        {overflow ? (
          <OverflowWrapper menu={menu} />
        ) : (
          <ul className="flex gap-2 p-0" ref={navRef}>
            {menu.map(renderItems)}
          </ul>
        )}
      </nav>
    </div>
  );
}

export default NavigationBar;
