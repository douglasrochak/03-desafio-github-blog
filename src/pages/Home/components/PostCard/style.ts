import styled from "styled-components";

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 260px;

  background-color: ${(props) => props.theme["base-post"]};
  border-radius: 10px;
  padding: 2rem;
`;

export const Content = styled.div`
  overflow: hidden;
  max-height: 150px;
  line-height: 160%;
  color: ${(props) => props.theme["base-text"]};
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;

  strong {
    max-width: 17.5rem;

    font-weight: bold;
    font-size: 1.25rem;
    line-height: 160%;
    color: ${(props) => props.theme["base-title"]};
  }

  span {
    font-size: 0.875rem;
    line-height: 160%;
    color: ${(props) => props.theme["base-span"]};
  }
`;
