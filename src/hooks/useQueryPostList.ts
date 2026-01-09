import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { getPostList } from "@/services/post";

const useQueryPostList = () => {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  return useQuery({
    queryKey: ["postList", currentPage],
    queryFn: () => getPostList(currentPage),
  });
};

export default useQueryPostList;
