import styled from "styled-components";

export const SearchFormContainer = styled.form`
  width: 100%;

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    background: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-border"]};
    border-radius: 6px;

    color: ${(props) => props.theme.white};

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;
