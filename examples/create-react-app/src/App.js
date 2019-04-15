import React, { useCallback, useState, useRef, useEffect } from "react";
import { Subject, EMPTY } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";

import { getPosts as getPostsRequest } from "./services/posts";

const App = () => {
  const [posts, setPosts] = useState([]);

  const getPosts$ = useRef(new Subject());
  const getPosts = useRef(undefined);
  useEffect(() => {
    getPosts.current = getPosts$.current
      .pipe(
        switchMap(({ postId }) => {
          setPosts([]);
          return getPostsRequest({ postId }).pipe(
            map(response => {
              setPosts(response.data);
            }),
            catchError(() => {
              return EMPTY;
            })
          );
        })
      )
      .subscribe();
    return () => {
      getPosts.current.unsubscribe();
    };
  }, []);

  const handleClick = useCallback(e => {
    for (let i = 1; i <= 20; i++) {
      setTimeout(() => {
        getPosts$.current.next({ postId: i });
      }, 1);
    }
  }, []);
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
        <button onClick={handleClick} style={{ marginRight: 10 }}>
          Request posts
        </button>
        <div>{JSON.stringify(posts)}</div>
      </div>
      <div>
        To see canceled requests go in your Network tab of your dev console.
      </div>
    </div>
  );
};

export default App;
