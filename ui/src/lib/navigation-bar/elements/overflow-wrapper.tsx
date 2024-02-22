import React, { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import { NavigationBarItem, OverflowMenu } from './';

import { slugify } from '../../utils';

const intersectionStyles = {
  visible: 'opacity-100 pointer-events-auto',
  invisible: 'invisible opacity-0 pointer-events-none',
  toolbarWrapper: {
    display: 'flex',
    overflow: 'hidden',
    padding: '0px'
  },
  overflowStyle: {
    order: 99,
    position: 'sticky',
    right: '0',
    backgroundColor: 'white'
  }
};

type OverflownItemProps = {
  [key: string]: boolean;
};

export const OverflowWrapper = ({ menu }) => {
  const navRef = useRef(null);
  const rootElement = navRef?.current;
  // Visibility Map tracks all the child items that are currently *visible*
  const [overflownItems, setOverflowItems] = useState({});
  const dataAttr = 'data-intersectionid';

  const handleIntersection = entries => {
    const updatedEntries: OverflownItemProps = { ...overflownItems };

    entries.forEach(entry => {
      const id = entry.target.dataset.intersectionid;

      if (entry.isIntersecting) {
        // isIntersecting is true when the element is visible inside the nav, not popping out yet.
        updatedEntries[id] = true;
      } else {
        updatedEntries[id] = false;
      }
    });

    // Overwrite previous state values with current state
    setOverflowItems(prev => ({
      ...prev,
      ...updatedEntries
    }));
  };

  useEffect(() => {
    const rootElement = navRef?.current;
    if (!rootElement) {
      console.info('🚩 no root...');
      return;
    }
    const observer = new IntersectionObserver(handleIntersection, {
      root: rootElement,
      rootMargin: '0px -70px 0px 0px',
      threshold: 1
    });

    console.info('🖨 LOGGING observer:', observer);

    // We are adding observers to child elements of the container div
    // with ref as navRef. Notice that we are adding observers
    // only if we have the data attribute intersectionid on the child element
    Array.from(rootElement?.children).forEach(item => {
      if (item.dataset.intersectionid) {
        observer.observe(item);
      }
    });
    return () => {
      observer.disconnect();
    };
  }, [navRef.current]);

  const filterOverflow = menu.filter(item => {
    const slug = slugify(item.title);
    return !overflownItems[slug];
  });

  console.info('🖨 LOGGING overflownItems:', overflownItems);

  const renderItems = (item, ix) => {
    const { title } = item;
    // const active = href && href?.includes(pathname);
    const isVisible = overflownItems[slugify(title)];

    return (
      <li
        key={ix}
        data-intersectionid={slugify(title)}
        className={clsx(
          {
            [intersectionStyles.visible]: !!isVisible,
            [intersectionStyles.invisible]: !isVisible,
            'aria-hidden': !isVisible
          },
          'text-neutral-base whitespace-nowrap'
        )}
      >
        <NavigationBarItem {...item} />
      </li>
    );
  };

  return (
    <div className="relative flex gap-2">
      <ul className="flex gap-2 p-0 w-full" ref={navRef}>
        {navRef?.current && menu.map(renderItems)}
      </ul>
      <OverflowMenu menu={filterOverflow} />
    </div>
  );
};

export default OverflowWrapper;
