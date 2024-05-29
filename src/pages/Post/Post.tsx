/* eslint-disable react-hooks/rules-of-hooks */
import { PostContainer, PostDetails } from "./Post.styles";
import { PostHeader } from "./components/PostDetails/PostHeader";
import { Navigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { apiGitHub } from "../../services/api";
import { formattedDate } from "../../utils/formatDate";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export interface PostProps {
  id: number;
  title: string;
  comments: number;
  createdAt: string;
  githubUsername: string;
  url: string;
  body: string;
}

export function Post() {
  const [post, setPost] = useState<PostProps>({} as PostProps);
  const { id: idIssue } = useParams();
  const innerRef = useRef(null);

  const isInvalidId = isNaN(Number(idIssue));

  if (isInvalidId) {
    return <Navigate to="/" replace />;
  }

  useEffect(() => {
    async function fetchIssue() {
      try {
        const response = await apiGitHub.get(
          `/repos/carialira/github-blog-with-reactjs-typescript/issues/${idIssue}`
        );
        const { id, title, comments, created_at, user, html_url, body } =
          response.data;
        const newPostObj = {
          id,
          title,
          githubUsername: user.login,
          comments,
          createdAt: formattedDate(created_at),
          url: html_url,
          body,
        };
        setPost(newPostObj);
      } catch (error) {
        console.log(error);
      }
    }
    if (idIssue) fetchIssue();
  }, [idIssue]);

  return (
    <PostContainer>
      <PostHeader post={post} />
      <PostDetails>
        <div>
          <ReactMarkdown
            components={{
              code: ({ children, ...props }) => {
                const ref = innerRef.current;
                return (
                  <SyntaxHighlighter
                    {...props}
                    style={vscDarkPlus}
                    language="javascript"
                    PreTag="pre"
                    ref={ref}
                  >
                    {String(children)}
                  </SyntaxHighlighter>
                );
              },
            }}
          >
            {post.body}
          </ReactMarkdown>
        </div>
      </PostDetails>
    </PostContainer>
  );
}
