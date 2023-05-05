import { useQuery } from "@tanstack/react-query";
import APICLient, { FetchResponse } from "../services/api-client";

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
    staleTime: 24 * 60 * 60 * 1000, //24h
  });

export default usePlatform;
