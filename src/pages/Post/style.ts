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
  }
`;

export const Title = styled.strong`
  margin-bottom: 0.5rem;

  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  /* Base/Title */
  color: #e7edf4;
`;

export const InfoBox = styled.div`
  span:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const Content = styled.div`
  padding: 2.5rem 2rem;
`;
