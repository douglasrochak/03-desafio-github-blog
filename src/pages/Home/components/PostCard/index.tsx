import { Content, PostCardContainer, Title } from "./style";
import ReactMarkdown from "react-markdown";

interface PostCardProps {
  title: string;
  body: string;
}
export function PostCard({ title, body }: PostCardProps) {
  return (
    <PostCardContainer>
      <Title>
        <strong>{title}</strong>
        <span>Há 1 dia</span>
      </Title>
      <Content>
        <ReactMarkdown rawSourcePos>{body}</ReactMarkdown>
      </Content>
    </PostCardContainer>
  );
}
