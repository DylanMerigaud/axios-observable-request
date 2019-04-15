import { createObservableRequest } from "../utils/api";

export const getPosts = ({ postId }) =>
  createObservableRequest({
    method: "GET",
    url: `/posts/${postId}`
  });
