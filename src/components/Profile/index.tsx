import { Avatar, Content, Info, Link, ProfileContainer, Title } from "./style";
import linkIcon from "../../assets/icons/link.svg";
import githubIcon from "../../assets/icons/github-brand.svg";
import buildingIcon from "../../assets/icons/building.svg";
import userGroupIcon from "../../assets/icons/user-group.svg";

export function Profile() {
  return (
    <ProfileContainer>
      <Avatar
        src="https://avatars.githubusercontent.com/u/64942084?v=4"
        alt=""
      />
      <Content>
        <Title>
          <strong>Cameron Williamson</strong>
          <Link>
            github
            <img src={linkIcon} alt="" />
          </Link>
        </Title>
        <span>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </span>
        <Info>
          <span>
            <img src={githubIcon} alt="" />
            cameronwll
          </span>
          <span>
            <img src={buildingIcon} alt="" />
            Rocketseat
          </span>
          <span>
            <img src={userGroupIcon} alt="" />
            32 seguidores
          </span>
        </Info>
      </Content>
    </ProfileContainer>
  );
}
