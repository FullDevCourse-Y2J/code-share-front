import styled from "styled-components";

interface ButtonProps {
  size: "small" | "medium";
  text: string;
  onClick: () => void;
  icon: string;
}

function Button({ size, text, onClick, icon }: ButtonProps) {
  return (
    <StyledButton type="button" $size={size} onClick={onClick}>
      <img src={icon} alt="icon" />
      {text}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button<{ $size: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  color: ${({ theme }) => theme.color.textWhite};
  background-color: ${({ theme }) => theme.color.key};
  border-radius: 8px;
  font-weight: 600;

  ${({ theme, $size }) => {
    if ($size === "small") {
      return {
        fontSize: theme.fontSize.sm,
        padding: `8px 0px`,
      };
    } else if ($size === "medium") {
      return {
        fontSize: theme.fontSize.base,
        padding: `10px 0px`,
      };
    }
  }}
`;