import { create } from 'zustand';

export type AdditionalService = {
  title: string;
  price: number;
};

type AdditionalServicesStore = {
  services: AdditionalService[];
  addService: (service: AdditionalService) => void;
  removeService: (title: string) => void;
  clear: () => void;
  totalPrice: number;
};

export const useAdditionalServicesStore = create<AdditionalServicesStore>((set, get) => ({
  services: [],
  totalPrice: 0,

  addService: (service) =>
    set((state) => {
      // не добавляем дубликаты
      if (state.services.some((s) => s.title === service.title)) return state;

      const updated = [...state.services, service];
      const totalPrice = updated.reduce((sum, s) => sum + s.price, 0);
      return { services: updated, totalPrice };
    }),

  removeService: (title) =>
    set((state) => {
      const updated = state.services.filter((s) => s.title !== title);
      const totalPrice = updated.reduce((sum, s) => sum + s.price, 0);
      return { services: updated, totalPrice };
    }),

  clear: () => set({ services: [], totalPrice: 0 }),
}));
