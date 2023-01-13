import styled from "styled-components";

export const ProfileContainer = styled.section`
  margin-top: -5rem;

  display: flex;
  justify-content: center;
  gap: 2rem;

  border-radius: 10px;
  background-color: ${(props) => props.theme["base-profile"]};
  padding: 2rem;
`;

export const Avatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;

  strong {
    margin-bottom: 0.5rem;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-title"]};
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;
  color: ${(props) => props.theme.blue};

  &:hover {
    text-decoration: underline;
  }

  img {
    margin-left: 0.5rem;
    width: 0.75rem;
    color: ${(props) => props.theme.blue};
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & > span {
    margin-bottom: 1.5rem;
    height: 100%;
    font-family: "Nunito";
    line-height: 160%;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 1.5rem;

  line-height: 160%;
  color: ${(props) => props.theme["base-subtitle"]};

  span {
    display: flex;
    flex-wrap: wrap;
  }

  img {
    margin-right: 0.5rem;
  }
`;
