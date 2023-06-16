import { NavigatorTreeProvider } from '../../contexts/NavigatorTreeContext';

type NavigatorLayoutProps = {};

export default function NavigatorLayout() {
  return (
    <NavigatorTreeProvider>
      <MainSidebarLayout />
    </NavigatorTreeProvider>
  );
};
