import { PostDetailsContainer, PostDetailsHeader } from "./PostDetails.styles";

export function PostDetails() {
  return (
    <PostDetailsContainer>
      <PostDetailsHeader>
        <div className="links">
          <a href={"#"} type="button">
            <i className="fa-solid fa-chevron-left"/>Back
          </a>
          <a href={"#"} target="_blank">
            See on Github
            <i className="fa-solid fa-arrow-up-right-from-square" />
          </a>
        </div>
        <h1>JavaScript data types and data structures</h1>
        <footer>
          <span>
            <i className="fa-brands fa-github" />
            carialira
          </span>
          <span>
            <i className="fa-solid fa-calendar" />
            Há 1 dia
          </span>
          <span>
            <i className="fa-solid fa-comment" />
            5 comentários
          </span>
        </footer>
      </PostDetailsHeader>
    </PostDetailsContainer>
  );
}
