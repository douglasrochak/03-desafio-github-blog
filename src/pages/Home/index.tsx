import { Profile } from "../../components/Profile";
import { PostCard } from "./components/PostCard";
import { SearchForm } from "./components/SearchForm";
import { Content, Info, PostList, HomeContainer } from "./style";

export function Home() {
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
          <PostCard />
          <PostCard />
        </PostList>
      </Content>
    </HomeContainer>
  );
}
