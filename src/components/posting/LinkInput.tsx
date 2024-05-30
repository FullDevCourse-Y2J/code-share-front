import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import LinkIcon from '@/assets/icon/link-icon.svg?react';

function LinkInput() {
  const [links, setLinks] = useState<string[]>(['']);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (index: number, newValue: string) => {
    const updatedLinks = [...links];
    updatedLinks[index] = newValue;
    setLinks(updatedLinks);

    if (newValue.trim() !== '' && index === links.length - 1) {
      setLinks([...updatedLinks, '']);
    }

    console.log(updatedLinks);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      // 비어있지 않은 입력란만 유지하고, 첫 번째 입력란은 항상 남겨둠
      setLinks(links.filter((_, idx) => idx === 0 || links[idx].trim() !== ''));
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [links]);

  return (
    <Container ref={containerRef}>
      <h2>링크</h2>
      {links.map((link, index) => (
        <Wrapper key={index}>
          <StyledLinkIcon />
          <StyledInput
            type='text'
            value={link}
            placeholder='링크를 입력하세요.'
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        </Wrapper>
      ))}
    </Container>
  );
}

export default LinkInput;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 15px 45px;
  border-radius: 8px;
  color: ${({ theme }) => theme.color_textBlack};
  font-size: ${({ theme }) => theme.fontSize_md};
  background-color: ${({ theme }) => theme.color_bgWhite};
  border: 1px solid ${({ theme }) => theme.color_borderGray};
`;

const StyledLinkIcon = styled(LinkIcon)`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;