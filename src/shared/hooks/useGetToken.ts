import { useQuery } from '@tanstack/react-query';
import { $api } from '../api/api';
import { $endpoints } from '../api/endpoints';

type TypeTokenResponse = {
  status: string;
  code: number;
  data: {
    token: string;
  };
};

const getToken = async (): Promise<string> => {
  const { data } = await $api.post<TypeTokenResponse>($endpoints.token.token);
  return data.data.token;
};

export const useGetToken = () => {
  return useQuery<string, Error>({
    queryKey: ['token'],
    queryFn: getToken,
    refetchInterval: 1000 * 60 * 30, 
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 31, 
  });
};

