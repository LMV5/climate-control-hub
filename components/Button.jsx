import styled from "styled-components";

const StyledButton = styled.button`
  color: #000000;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 6px 3px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s ease-in;

  background-color: ${(props) =>
    props.$variant === "primary"
      ? "#F3F9D2"
      : props.$variant === "edit"
      ? "#007bff"
      : props.$variant === "cancel"
      ? "#dc3545"
      : props.$variant === "back"
      ? "#dc3545"
      : "#6c757d"};

  &:hover {
    background-color: ${(props) =>
      props.$variant === "primary"
        ? "#A4F9C8"
        : props.$variant === "edit"
        ? "#007bff"
        : props.$variant === "cancel"
        ? "#dc3545"
        : props.$variant === "back"
        ? "#dc3545"
        : "#6c757d"};
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
