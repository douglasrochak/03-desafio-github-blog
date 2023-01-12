import { PostCardContainer, Title } from "./style";

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
      <p>{body}</p>
    </PostCardContainer>
  );
}
