import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 864px;
  margin: 0 auto;
  margin-bottom: 10rem;
`;

export const Content = styled.main`
  margin-top: 4.5rem;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 0.75rem;

  strong {
    font-size: 1.125rem;
    font-weight: bold;
    line-height: 160%;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  span {
    font-size: 0.875rem;
    line-height: 160%;
    color: ${(props) => props.theme["base-span"]};
  }
`;

export const PostList = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  margin-top: 3rem;
`;
