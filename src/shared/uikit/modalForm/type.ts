export interface ModalProps {
  currentImage: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  totalPrice: number;
  additionalServices: { title: string; price: number }[];
  setAdditionalServices: React.Dispatch<
    React.SetStateAction<{ title: string; price: number }[]>
  >;
}

export interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  wishes: string;
}