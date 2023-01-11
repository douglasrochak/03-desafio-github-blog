import styled from "styled-components";
import cover from "../../assets/cover.svg";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme["base-profile"]};
  background-image: url(${cover});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;

  img {
    padding: 4rem 0 8.375rem;
  }
`;
