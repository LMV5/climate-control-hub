import styled from "styled-components";

const StyledButton = styled.button`
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  background-color: ${(props) =>
    props.variant === "save"
      ? "#4caf50"
      : props.variant === "edit"
      ? "#007bff"
      : props.variant === "cancel"
      ? "#dc3545"
      : props.variant === "back"
      ? "#dc3545"
      : "#6c757d"};

  &:hover {
    background-color: ${(props) =>
      props.variant === "save"
        ? "#4caf50"
        : props.variant === "edit"
        ? "#007bff"
        : props.variant === "cancel"
        ? "#dc3545"
        : props.variant === "back"
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
    <StyledButton type={type} variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
