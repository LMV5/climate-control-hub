import styled from "styled-components";

const StyledButton = styled.button`
  color: #000000;
  letter-spacing: 0.1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 6px 3px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s ease-in, transform 0.1s ease;
  display: inline-block;
  width: 6.2rem;

  margin-top: ${(props) => (props.$variant === "primary" ? "3rem" : "")};
  width: ${(props) => (props.$variant === "primary" ? "11rem" : "")};

  background-color: ${(props) =>
    props.$variant === "primary"
      ? "#F3F9D2"
      : props.$variant === "save"
      ? "#b9f98e"
      : props.$variant === "edit"
      ? "#75b4f7"
      : props.$variant === "cancel"
      ? "#fc7e8b"
      : props.$variant === "back"
      ? "#aaa7a7"
      : "#6c757d"};

  &:hover {
    background-color: ${(props) =>
      props.$variant === "primary"
        ? "#A4F9C8"
        : props.$variant === "save"
        ? "#95e262"
        : props.$variant === "edit"
        ? "#228dff"
        : props.$variant === "cancel"
        ? "#fc5d6d"
        : props.$variant === "back"
        ? "#d3d0d0"
        : "#6c757d"};
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 3px 2px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    border: 1px solid #edfb69;
    box-shadow: 0 0 10px #edfb69;
    outline: none;
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
