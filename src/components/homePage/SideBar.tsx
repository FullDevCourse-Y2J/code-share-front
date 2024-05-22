import styled from 'styled-components';
import Profile from './Profile';
import Button from '../common/Button';
import Top5 from './Top5';
import { ICONS } from '@/assets/icon/icons';
import { useContext, useState } from 'react';
import { LoginContext } from '@/provider/LoginProvider';
import { useNavigate } from 'react-router-dom';
import NonMemberPopUp from '../popup/NonMemberPopUp';
import { AnimatePresence } from 'framer-motion';

function SideBar() {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const { user } = useContext(LoginContext);

  if (open) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <Container>
      <Button
        size='medium'
        text='지식 공유하기'
        onClick={user ? () => navigate('/posting') : () => setOpen(true)}
        icon={ICONS.pencil}
      />
      <Profile />
      <Top5 />
      <AnimatePresence>
        {open && <NonMemberPopUp closePopUp={() => setOpen(false)} />}
      </AnimatePresence>
    </Container>
  );
}

export default SideBar;

const Container = styled.aside`
  width: 220px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 30px 0;

  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
`;
