import { Avatar, Content, Info, Link, ProfileContainer, Title } from "./style";
import linkIcon from "../../assets/icons/link.svg";
import githubIcon from "../../assets/icons/github-brand.svg";
import buildingIcon from "../../assets/icons/building.svg";
import userGroupIcon from "../../assets/icons/user-group.svg";
import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  avatar_url: string;
  name: string;
  bio: string;
  followers: number;
  login: string;
  company: string | null;
  html_url: string;
}

export function Profile() {
  const [user, setUser] = useState<User>({} as User);

  async function fetchProfile() {
    const response = await axios.get(
      "https://api.github.com/users/douglasrochak"
    );

    setUser(response.data);
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <ProfileContainer>
      <Avatar src={user.avatar_url} alt="" />
      <Content>
        <Title>
          <strong>{user.name}</strong>
          <Link target="_blank" href={user.html_url}>
            github
            <img src={linkIcon} alt="" />
          </Link>
        </Title>
        <span>{user.bio}</span>
        <Info>
          <span>
            <img src={githubIcon} alt="" />
            {user.login}
          </span>
          {user.company && (
            <span>
              <img src={buildingIcon} alt="" />
              {user.company}
            </span>
          )}
          <span>
            <img src={userGroupIcon} alt="" />
            {user.followers} seguidores
          </span>
        </Info>
      </Content>
    </ProfileContainer>
  );
}
