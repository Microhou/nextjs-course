export const getPostList = async (page: number = 1) => {
  // Placeholder function to be implemented
  const response = await fetch(`/api/post/list?page=${page}&limit=2`);
  const resData = await response.json();
  return resData.data;
};

export const addPost = async (post: { title: string; content: string }) => {
  const response = await fetch("/api/post/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  const resData = await response.json();
  return resData.data;
};

export const getPost = async (id: string) => {
  // Placeholder function to be implemented
  const response = await fetch(`/api/post/detail?id=${id}`);
  const resData = await response.json();
  return resData.data;
};
