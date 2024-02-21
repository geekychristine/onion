/* tslint-disable  no-any */
import { useState, useEffect, useRef } from 'react';
import { NavigationBarItem, OverflowWrapper } from './elements';
import { slugify } from '../utils';
import styles from './navigation-bar.module.css';

/* eslint-disable-next-line */
export interface NavigationBarProps {}

export function NavigationBar({ menu }) {
  const navRef = useRef(null);
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <div className={styles['navigation-bar']}>
      <nav className="w-full">
        <ul className="flex gap-2 p-0" ref={navRef}>
          {navRef?.current && (
            <OverflowWrapper rootElement={navRef?.current} data={menu}>
              {menu.map((item, ix) => {
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
              })}
            </OverflowWrapper>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
