import { useQuery } from "@tanstack/react-query";
import APICLient from "../services/api-client";
import ms from "ms";

const apiClient = new APICLient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24h
  });

export default usePlatform;
