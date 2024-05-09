import { ContainerBlog } from "./Blog.styles";
import { Profile } from "./components/Profile/Profile";
import { PostCard } from "./components/PostCard/PostCard";
import { apiGitHub } from "../../services/api";
import { useEffect, useState } from "react";


export interface IPost {
  id: number;
  title: string;
  body: string;
  created_at: string;
  number: string;
}

export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([] as IPost[]);
  // const [postsCounter, setPostsCounter] = useState(0);
  
  async function fetchPosts() {
    const {data} = await apiGitHub.get(
      `search/issues?q=repo:${"carialira"}/Github-blog-issues`,{
        headers: {
          Authorization: "Bearer " + "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"
          // Accept: "application/vnd.github.v3+json"
        }
      }
    );
    console.log(data,'data')
    setPosts(data.items);
    // setPostsCounter(response.data.total_count);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <ContainerBlog>
      <Profile/>
      <div className="publi">
        <div className="search">
          <div className="header">
            <span>Publicações</span>
            <small>6 publicações</small>
          </div>
          <input type="search" placeholder="Buscar conteúdo" />
        </div>
        <div className="section">
          {posts && posts.length > 0 && posts.map(post =>{
              return(
                <PostCard key={post.id} data={post} />
              )
            })}
        </div>
      </div> 
    </ContainerBlog>
  );
}
