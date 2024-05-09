import { ContainerProfile, ContentProfile } from "./Profile.styles";
import { useScreenSize } from "../../../../hooks/useScreenSize";
import { HeaderProfile } from "./components/HeaderProfile";
import { apiGitHub } from "../../../../services/api";
import { useEffect, useState } from "react";

interface UserProps {
  name: string;
  followers: number;
  githubUsername: string;
  company: string;
  url: string;
  imgUrl: string;
  description: string;
}

export function Profile() {
  
  const [user, setUser] = useState<UserProps>();
  const screenSize = useScreenSize();
  
  async function fetchUsers() {
    const response = await apiGitHub.get("users/carialira");
    const { name, followers, login, company, html_url, avatar_url, bio } =
      response.data;

    const newUserObj = {
      name,
      followers,
      githubUsername: login,
      company,
      url: html_url,
      imgUrl: avatar_url,
      description: bio,
    };
    setUser(newUserObj);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ContainerProfile>
      {screenSize.width <= 960 ? (
        <div>
          <img src={user?.imgUrl} alt="" />
          <HeaderProfile name={user?.name} />
        </div>
      ) : (
        <img src={user?.imgUrl} alt="" />
      )}

      <ContentProfile>
        {screenSize.width > 960 && <HeaderProfile name={user?.name} />}
        <main>
          <p>{user?.description}</p>
        </main>
        <footer>
          <span>
            <i className="fa-brands fa-github"></i>
            {user?.githubUsername}
          </span>
          <span>
            <i className="fa-solid fa-building"></i>
            {user?.company}
          </span>
          <span>
            <i className="fa-solid fa-user-group"></i>
            {user?.followers} Followers
          </span>
        </footer>
      </ContentProfile>
    </ContainerProfile>
  );
}
