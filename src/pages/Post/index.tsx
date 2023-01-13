import { useCallback, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import { Link, useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { dateRelativeToNow } from "../../utils/date-formatter";
import { Content, InfoBox, PostContainer, PostInfo, Title } from "./style";

interface PostData {
  title: string;
  body: string;
  comments: number;
  created_at: string;
  html_url: string;
  user: {
    login: string;
  };
}

export function Post() {
  const [post, setPost] = useState({} as PostData);
  const { postNumber } = useParams();

  const fetchPost = useCallback(async () => {
    const response = await api.get(
      `/repos/douglasrochak/03-desafio-github-blog/issues/${postNumber}`
    );
    setPost(response.data);
  }, [postNumber]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  return (
    <PostContainer>
      <PostInfo>
        <nav>
          <span>
            <Link to={"/"}>voltar</Link>
          </span>
          <span>
            <a target="_blank" href={post.html_url} rel="noreferrer">
              ver no github
            </a>
          </span>
        </nav>
        <Title>{post.title}</Title>
        <InfoBox>
          <span>{post.user && post.user.login}</span>
          <span>
            {post.created_at && dateRelativeToNow(new Date(post.created_at))}
          </span>
          <span>comentários {post.comments}</span>
        </InfoBox>
      </PostInfo>
      <Content>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </Content>
    </PostContainer>
  );
}
