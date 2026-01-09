import { useQuery } from "@tanstack/react-query";
import { getPost } from "@/services/post";
import { useParams } from "next/navigation";

const useQueryPost = () => {
  const { id } = useParams();
  // Placeholder function to be implemented
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => getPost(id as string),
  });
};
export default useQueryPost;
