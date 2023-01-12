import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { Content, InfoBox, PostContainer, PostInfo, Title } from "./style";

export function Post() {
  const [post, setPost] = useState({});
  const { postNumber } = useParams();

  async function fetchPost() {
    const response = await api.get(
      `/repos/douglasrochak/03-desafio-github-blog/issues/${postNumber}`
    );
    console.log(response.data);
    setPost(response.data);
  }
  useEffect(() => {
    fetchPost();
  });

  // https://api.github.com1

  return (
    <PostContainer>
      <PostInfo>
        <nav>
          <span>
            <Link to={"/"}>voltar</Link>
          </span>
          <span>ver no github</span>
        </nav>
        <Title>{post.title}</Title>
        <InfoBox>
          <span>cameronwll</span>
          <span>Há 1 dia</span>
          <span>comentários</span>
        </InfoBox>
      </PostInfo>
      <Content>
        <p>{post.body}</p>
      </Content>
    </PostContainer>
  );
}
