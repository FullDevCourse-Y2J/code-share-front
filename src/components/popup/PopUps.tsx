import usePopUpStore, { usePopUpActions } from '@/store/popUpStore';
import ConfirmPopUp from './ConfirmPopUp';
import { useEffect } from 'react';
import AlertPopUp from './AlertPopUp';
import { useNavigate } from 'react-router-dom';
import { ALERT_TYPE } from '@/constants/alertType';
import { AnimatePresence } from 'framer-motion';

function PopUps() {
  const navigate = useNavigate();
  const { isConfirmOpen, isOpenAlert, alertType, isDeleted } = usePopUpStore();
  const { setIsOpenAlert, resetConfirm, setIsConfirmOpen } = usePopUpActions();

  if (isConfirmOpen || isOpenAlert) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  useEffect(() => {
    if (isDeleted) {
      setTimeout(() => {
        setIsConfirmOpen(false);
      }, 2000);
    }
  }, [isDeleted, resetConfirm]);

  useEffect(() => {
    if (!isConfirmOpen) {
      setTimeout(() => {
        resetConfirm();
      }, 500);
    }
  }, [isConfirmOpen]);

  useEffect(() => {
    if (isOpenAlert) {
      setTimeout(() => {
        setIsOpenAlert(false, null);
        alertType !== 'comment' && navigate(ALERT_TYPE[alertType!].route);
      }, 2000);
    }
  }, [isOpenAlert, alertType]);

  return (
    <>
      <AnimatePresence>{isConfirmOpen && <ConfirmPopUp />}</AnimatePresence>
      <AnimatePresence>
        {isOpenAlert && <AlertPopUp>{ALERT_TYPE[alertType!].title}</AlertPopUp>}
      </AnimatePresence>
    </>
  );
}

export default PopUps;
