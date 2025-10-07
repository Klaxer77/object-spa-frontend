import { useQuery } from '@tanstack/react-query';
import { $api } from '../../../shared/api/api';
import { $endpoints } from '../../../shared/api/endpoints';
import { IMenu } from '@/shared/types/menu.type';

const getMenu = async () => {
  const { data } = await $api.get<IMenu>($endpoints.menu.menu);
  return data;
};

export function useGetMenu() {
  return useQuery<IMenu>({
    queryKey: ['menu'], 
    queryFn: getMenu,
  });
}
