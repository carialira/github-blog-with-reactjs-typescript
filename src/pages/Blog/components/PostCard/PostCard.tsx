import { formattedDate } from "../../../../utils/formatDate";
import { IPost } from "../../Blog";
import { PostCardContainer } from "./PostCard.styles";

interface PostCardProps {
  data: IPost;
}


export function PostCard({ data }: PostCardProps) {
  return (
    <PostCardContainer to={`/${data.number}`}>
      <header>
        <h1>{data.title}</h1>
        <span>{formattedDate(data.created_at)}</span>
      </header>
      <main>
        <p>{data.body}</p>
      </main>
    </PostCardContainer>
  )
}