import request from "./interceptor";

export async function getAllPosts(url) {
  return request
    .get(url)
    .then((response) => response)
    .catch((err) => err);
}
