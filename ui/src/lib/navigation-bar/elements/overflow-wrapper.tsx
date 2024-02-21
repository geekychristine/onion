import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { OverflowMenu } from './overflow-menu';
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

export const OverflowWrapper = ({ rootElement, children, data }) => {
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
    if (!rootElement) {
      return;
    }
    const observer = new IntersectionObserver(handleIntersection, {
      root: rootElement,
      rootMargin: '0px -70px 0px 0px',
      threshold: 1
    });

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
  }, []);

  const filterOverflow = data.filter(item => {
    const slug = slugify(item.title);
    return !overflownItems[slug];
  });

  return (
    rootElement && (
      <>
        {React.Children.map(children, child => {
          const isVisible = overflownItems[child.props[dataAttr]];

          return React.cloneElement(child, {
            className: clsx(child.props.className, {
              [intersectionStyles.visible]: !!isVisible,
              [intersectionStyles.invisible]: !isVisible
            }),
            'aria-hidden': !isVisible
          });
        })}
        <OverflowMenu menu={filterOverflow} />
      </>
    )
  );
};

export default OverflowWrapper;
