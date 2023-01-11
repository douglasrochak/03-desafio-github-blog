import { Content, InfoBox, PostContainer, PostInfo, Title } from "./style";

export function Post() {
  return (
    <PostContainer>
      <PostInfo>
        <nav>
          <span>voltar</span>
          <span>ver no github</span>
        </nav>
        <Title>JavaScript data types and data structures</Title>
        <InfoBox>
          <span>cameronwll</span>
          <span>Há 1 dia</span>
          <span>comentários</span>
        </InfoBox>
      </PostInfo>
      <Content>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
      </Content>
    </PostContainer>
  );
}
