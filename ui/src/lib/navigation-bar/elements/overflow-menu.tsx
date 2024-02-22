import { NavigationBarItem } from './navigation-bar-item';

export const OverflowMenu = ({ menu }) => {
  const visibleClass = !menu.length ? 'hidden' : '';
  return menu.length ? (
    <div
      className={visibleClass}
      style={{
        position: 'absolute',
        right: '0',
        backgroundColor: 'white'
      }}
    >
      <NavigationBarItem id="more" title="more" iconOnly children={menu} />
    </div>
  ) : null;
};

export default OverflowMenu;
