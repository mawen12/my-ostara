import React, { useRef, useState } from 'react';
import { Box, Stack } from '@mui/material';
import { FilterListOutlined } from '@mui/icons-material';
import CreateItemContextMenu from './sidebar/menus/CreateItemContextMenu';
import CreateItemMenu from 'renderer/layout/navigator/components/sidebar/menus/CreateItemMenu';


type NavigatorSidebarProps = {
  width: number;
};

export default function NavigatorSidebar({ width }: NavigatorSidebarProps) {
  const [search, setSearch] = useState<string>('');

  const contextMenuRef = useRef<HTMLElement>(null);

  return (
    <CreateItemContextMenu contextMenuRef={contextMenuRef}>
      <Box
        sx={{
          height: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Stack
            direction={'row'}
            spacing={0.25}
            sx={{ flexGrow: 1, px: 0.25 }}
          >
            <Box>
              <CreateItemMenu />
            </Box>
            {/*<SearchTextField*/}
            {/*  size={'small'}*/}
            {/*  icon={FilterListOutlined}*/}
            {/*  placeholder={''}*/}
            {/*  value={search}*/}
            {/*  onChangeValue={setSearch}*/}
            {/*>*/}
            {/*  <SearchItemMenu />*/}
            {/*</SearchTextField>*/}
          </Stack>
        </Box>
      </Box>
    </CreateItemContextMenu>
  );
}
