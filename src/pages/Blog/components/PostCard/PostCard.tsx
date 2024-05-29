import { useRef } from "react";
import { formattedDate } from "../../../../utils/formatDate";
import { IPost } from "../../Blog";
import { PostCardContainer, TruncatedMarkdown } from "./PostCard.styles";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";


interface PostCardProps {
  data: IPost;
}


export function PostCard({ data }: PostCardProps) {
  const innerRefPostCard = useRef(null);

  return (
    <PostCardContainer to={`/issues/${data.number}`}>
      <header>
        <h1>{data.title}</h1>
        <span>{formattedDate(data.created_at)}</span>
      </header>
      <main>
          <TruncatedMarkdown
              components={{
                code: ({ children, ...props }) => {
                  const ref = innerRefPostCard.current;
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
              {data.body.length > 180 ? `${data.body.substring(0, 180)}...` : data.body}
            </TruncatedMarkdown>
      </main>
    </PostCardContainer>
  )
}