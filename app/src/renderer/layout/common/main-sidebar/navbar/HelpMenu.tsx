import { useCallback, useEffect, useState } from 'react';
import NavbarIconButton from './NavbarIconButton';

export default function HelpMenu() {
  const [url, setUrl] = useState<string | undefined>(undefined);

  const openUrlHandler = useCallback(() => {
    window.open(url, '_blank');
  }, [url]);

  return (
    <NavbarIconButton titleId="Documentation" icon={'HelpOutlineOutlined'} onClick={openUrlHandler} />
  );
};
