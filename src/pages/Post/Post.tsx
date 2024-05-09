import ReactMarkdown from "react-markdown";
import { PostContainer, PostDetailsContent } from "./Post.styles";
import { PostDetails } from "./components/PostDetails/PostDetails";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiGitHub } from "../../services/api";
import { formattedDate } from "../../utils/formatDate";


interface PostDetailProps {
  title: string;
  comments: number;
  createdAt: string;
  githubUsername: string;
  url: string;
  body: string;
}

export function Post() {
  const [post, setPost] = useState<PostDetailProps>({} as PostDetailProps);
  const { id } = useParams();

  async function fetchPost() {
    const response = await apiGitHub.get(
      `/repos/carialira/github-blog-with-reactjs-typescript/issues/${id}`
    );
    const { title, comments, created_at, user, html_url, body } = response.data;
    const newPostObj = {
      title,
      githubUsername: user.login,
      comments,
      createdAt: formattedDate(created_at),
      url: html_url,
      body,
    };
    setPost(newPostObj);
  }

  useEffect(() => {
    fetchPost();
  }, []);


  return (
    <PostContainer>
      <PostDetails/>
      <PostDetailsContent>
        <div>
          <ReactMarkdown>{post.body}</ReactMarkdown>
          {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown> */}
        </div>
      </PostDetailsContent>
    </PostContainer>
  );
}
