import { useQuery } from '@tanstack/react-query';
import { $api } from '../../../shared/api/api';
import { $endpoints } from '../../../shared/api/endpoints';
import { IBar } from '@/shared/types/bar.type';

const getBar = async () => {
  const { data } = await $api.get<IBar>($endpoints.menu.bar);
  return data;
};

export function useGetBar() {
  return useQuery<IBar>({
    queryKey: ['bar'], 
    queryFn: getBar,
  });
}
