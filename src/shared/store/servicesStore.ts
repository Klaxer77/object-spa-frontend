import { create } from 'zustand';

export interface ServiceItem {
  title: string;
  price: number;
}

interface ServicesStore {
  selectedServices: ServiceItem[];
  addServices: (items: ServiceItem[]) => void;
  removeService: (title: string) => void;
  clear: () => void;
}

export const useServicesStore = create<ServicesStore>((set) => ({
  selectedServices: [],
  addServices: (items) =>
    set((state) => {
      const combined = [...state.selectedServices, ...items];
      const unique = Array.from(new Map(combined.map((i) => [i.title, i])).values());
      return { selectedServices: unique };
    }),
  removeService: (title: string) =>
    set((state) => ({
      selectedServices: state.selectedServices.filter((s) => s.title !== title),
    })),
  clear: () => set({ selectedServices: [] }),
}));
