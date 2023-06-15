import { useCallback } from 'react';
import NavbarIconButton from './NavbarIconButton';
import NiceModal from '@ebay/nice-modal-react';

export default function AppFeedbackMenu() {
  const sendFeedbackHandler = useCallback(() => {
    
  }, [])

  return <NavbarIconButton titleId={'sendFeedback'} icon={'RateReviewOutlined'} onClick={sendFeedbackHandler} />
}
