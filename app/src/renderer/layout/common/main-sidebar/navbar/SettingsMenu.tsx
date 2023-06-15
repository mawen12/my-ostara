import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { urls } from '../../../../routes/urls';
import NavbarIconButton from './NavbarIconButton';

export default function SettingsMenu() {
  const navigate = useNavigate();

  const openSettingsHandler = useCallback(() => {
    navigate(urls.settings.url);
  }, []);

  return (
    <NavbarIconButton titleId={'settings'} icon={'SettingsOutlined'} onClick={openSettingsHandler} />
  );
};
