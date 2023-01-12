import { useContext } from "react";
import { Link } from "react-router-dom";
import { Profile } from "../../components/Profile";
import { PostsContext } from "../../contexts/PostsContext";
import { PostCard } from "./components/PostCard";
import { SearchForm } from "./components/SearchForm";
import { Content, Info, PostList, HomeContainer } from "./style";

export function Home() {
  const { posts } = useContext(PostsContext);
  return (
    <HomeContainer>
      <Profile />
      <Content>
        <Info>
          <strong>Publicações</strong>
          <span>6 publicações</span>
        </Info>
        <SearchForm />
        <PostList>
          {posts.map((post) => {
            return (
              <Link to={`/post/${post.number}`} key={post.number}>
                <PostCard title={post.title} body={post.body} />
              </Link>
            );
          })}
        </PostList>
      </Content>
    </HomeContainer>
  );
}
