import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 864px;
  margin: 0 auto;
`;

export const PostInfo = styled.div`
  margin-top: -5rem;
  padding: 2rem;
  background: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;

  nav {
    display: flex;
    justify-content: space-between;

    margin-bottom: 1.25rem;

    span > a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      font-weight: bold;
      font-size: 0.75rem;
      line-height: 160%;
      text-transform: uppercase;
      color: ${(props) => props.theme.blue};

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Title = styled.strong`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 130%;
  color: ${(props) => props.theme["base-title"]};
`;

export const InfoBox = styled.div`
  margin-top: 0.75rem;
  display: flex;

  span {
    display: flex;
    align-items: center;
  }

  span > img {
    margin-right: 0.5rem;
  }

  span:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const Content = styled.div`
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
