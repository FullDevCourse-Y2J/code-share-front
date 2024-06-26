import styled from 'styled-components';
import { ICONS } from '../../constants/assets';

function PostEmpty() {
  return (
    <Container>
      <img src={ICONS.question} alt='question' width={60} height={60} />
      <p>게시글이 존재하지 않습니다.</p>
    </Container>
  );
}
export default PostEmpty;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 170px 0;

  p {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize_xl};
    color: ${({ theme }) => theme.color_textGray};
  }
`;
