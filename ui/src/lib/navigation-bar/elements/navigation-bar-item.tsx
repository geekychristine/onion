import { useCallback, useState } from 'react';
import { Button } from '@onion/ui';

export const NavigationBarItem = ({
  iconOnly = false,
  title,
  children,
  ...rest
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = useCallback(() => {
    setShowMenu(!showMenu);
  }, [showMenu]);

  return (
    <span className="relative">
      <Button onClick={handleShowMenu} {...rest}>
        {title}
      </Button>
      {showMenu && children && (
        <span
          className="block overflow-hidden absolute right-0 mt-1 shadow-1 whitespace-nowrap"
          style={{ borderRadius: '1em' }}
        >
          {/** Replace with a real menu  */}
          <ul>
            {children.map((child, idx) => (
              <li key={`${child.title}-${idx}`}>{child.title}</li>
            ))}
          </ul>
        </span>
      )}
    </span>
  );
};

export default NavigationBarItem;
