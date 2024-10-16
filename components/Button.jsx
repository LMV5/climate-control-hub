import styled from "styled-components";

const StyledButton = styled.button`
  color: #000000;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 6px 3px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s ease-in, transform 0.1s ease;

  background-color: ${(props) =>
    props.$variant === "primary"
      ? "#F3F9D2"
      : props.$variant === "edit"
      ? "#75b4f7"
      : props.$variant === "cancel"
      ? "#ff6574"
      : props.$variant === "back"
      ? "#aaa7a7"
      : "#6c757d"};

  &:hover {
    background-color: ${(props) =>
      props.$variant === "primary"
        ? "#A4F9C8"
        : props.$variant === "edit"
        ? "#0478f5"
        : props.$variant === "cancel"
        ? "#dc3545"
        : props.$variant === "back"
        ? "#d3d0d0"
        : "#6c757d"};
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 3px 2px rgba(0, 0, 0, 0.2);
  }
`;

export default function Button({
  type = "button",
  variant = "default",
  children,
  onClick,
}) {
  return (
    <StyledButton type={type} $variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
