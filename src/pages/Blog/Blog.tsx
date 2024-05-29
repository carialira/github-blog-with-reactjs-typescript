import { ContainerBlog } from "./Blog.styles";
import { Profile } from "./components/Profile/Profile";
import { PostCard } from "./components/PostCard/PostCard";
import { apiGitHub } from "../../services/api";
import { useEffect, useMemo, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";


export interface IPost {
  id: number;
  title: string;
  body: string;
  created_at: string;
  number: string;
}

export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([] as IPost[]);
  const [searchQuery, setSearchQuery] = useState('')
  
  const MIN_QUERY_LENGTH = 3; 
  const debounced = useDebounce(searchQuery.toLowerCase().trim(), 300)

  async function fetchPosts(query = "") {
    const {data} = await apiGitHub.get(
      `search/issues?q=${
        query ? query : ""
      }%20repo:${"carialira"}/github-blog-with-reactjs-typescript`,{
        headers: {
          Accept: "application/vnd.github.v3+json"
        }
      }
    );
    setPosts(data.items);
  }

  const shouldFetchPosts = useMemo(() => {
    return debounced.length >= MIN_QUERY_LENGTH; 
  }, [debounced, MIN_QUERY_LENGTH]);

  useEffect(() => {
    if (shouldFetchPosts) {
      fetchPosts(debounced);
    } else {
      fetchPosts();
    }
  }, [shouldFetchPosts]);

  return (
    <ContainerBlog>
      <Profile/>
      <div className="publi">
        <div className="search">
          <div className="header">
            <span>Publicações</span>
            <small>{posts && posts.length ? `${posts.length} publicações` : 'Nenhum publicação'}</small>
          </div>
          <input type="search" placeholder="Buscar conteúdo"  onChange={(e) => setSearchQuery(e.target.value)}/>
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
