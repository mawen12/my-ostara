import { SxProps} from '@mui/system';
import { Theme } from '@mui/material/styles';
import { useMemo } from 'react';

export const useMenuPaperStyle = (): SxProps<Theme> => {
  return useMemo<SxProps<Theme>>(
    () => ({
      py: 1,
      overflow: 'inherit',
    })
  , []);
};
