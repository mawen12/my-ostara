import * as MUIcon from '@mui/icons-material';
import { SvgIconProps } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';
import { useMemo } from 'react';

export type MUIconType = keyof typeof MUIcon;

type IconViewerProps = SvgIconProps & {
  icon?: MUIconType;
};

export const IconViewer: React.FC<IconViewerProps> = ({ icon, ...props}) => {
  const Icon = useMemo<SvgIconComponent | undefined>(() => {
    return icon && MUIcon[icon];
  }, [icon]);
  return (
    <>
    {Icon && <Icon {...props} />}
    </>
  );
};
