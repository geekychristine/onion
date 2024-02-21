import { NavigationBarItem } from './navigation-bar-item';

export const OverflowMenu = ({ menu }) => {
  const visibleClass = !menu.length ? 'hidden' : '';
  return (
    <li
      className={visibleClass}
      style={{
        position: 'sticky',
        right: '0',
        backgroundColor: 'white'
      }}
    >
      <NavigationBarItem id="more" title="more" iconOnly children={menu} />
    </li>
  );
};

export default OverflowMenu;
