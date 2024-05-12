import styled from "styled-components";
import LogoutIcon from "@/assets/icon/logout-icon.svg?react";
import DeleteAccountIcon from "@/assets/icon/delete-account-icon.svg?react";


function MyInfo(){
  return (
    <Wrapper>
      <Title>나의 정보</Title>
        <Container>
          <Content>
            <Info>
              <h3>이름</h3>
              <span>연하영</span>
            </Info>
            <Info>
              <h3>ID</h3>
              <span>dusgkdud7@gmail.com</span>
            </Info>
            <Info>
              <h3>PW</h3>
              <span>********</span>
          </Info>
          </Content>
          <IconContainer>
            <LogoutIcon/>
            <DeleteAccountIcon/>
          </IconContainer>
        </Container>
  </Wrapper>
  )
}

export default MyInfo;



const Wrapper = styled.div`
width: 482px;
height: 200px;
`

const Container = styled.div`
width: 482px;
height: 150px;
background-color: ${({ theme }) => theme.color.bgWhite};
border: 1px solid ${({ theme }) => theme.color.borderGray};
border-radius: 12px;
padding: 16px;
display: flex; 
align-items: center;
gap: 25px
`

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  padding-bottom: 13px;
`;

const Content = styled.div`
display: flex;
flex-direction: column;
`

const Info = styled.div`
font-size: ${({ theme }) => theme.fontSize.md};
margin: 12px;
display: flex;

& h3 {
  font-weight: 700;
  width: 70px;
}
`

const IconContainer = styled.div`
  display: flex;
  gap: 15px
`;