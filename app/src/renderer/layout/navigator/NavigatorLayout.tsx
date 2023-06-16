import { NavigatorTreeProvider } from '../../contexts/NavigatorTreeContext';
import MainSidebarLayout from '../common/main-sidebar/MainSidebarLayout';
import NavigatorSidebar from './components/NavigatorSidebar';

type NavigatorLayoutProps = {};

export default function NavigatorLayout() {
  return (
    <NavigatorTreeProvider>
      <MainSidebarLayout Sidebar={NavigatorSidebar}/>
    </NavigatorTreeProvider>
  );
};
