import { ComponentType, useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Allotment, LayoutPriority } from 'allotment';
import { Box } from '@mui/material';
import AutoSizer from 'react-virtualized-auto-sizer';
import { MAIN_SCROLL_CONTAINER_ID } from '../../../constants/ui';

type MainSidebarLayoutProps = {
  Sidebar: ComponentType<{ width: number }>;
}

export default function MainSidebarLayout({ Sidebar }: MainSidebarLayoutProps) {
  const { pathname } = useLocation();

  const scrollContainerRef = useRef<HTMLElement>();

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [pathname]);

  return (
    <Allotment proportionalLayout={false}>
      <Allotment.Pane minSize={200} maxSize={500}>
        <Box sx={{ heigth: '100%'}}>
          <Sidebar width={50}/>
        </Box>
      </Allotment.Pane>
      <Allotment.Pane priority={LayoutPriority.High}>
        <Box sx={{ height: '100%', overflow: 'hidden' }}>
          <AutoSizer disableWidth>
            {({height}) => (
              <Box id={MAIN_SCROLL_CONTAINER_ID} ref={scrollContainerRef} sx={{ height: height, overflow: 'auto' }}>
                <Outlet />
              </Box>
            )}
          </AutoSizer>
        </Box>
      </Allotment.Pane>
    </Allotment>
  );
}
