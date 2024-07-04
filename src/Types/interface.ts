export interface categoryType {
  id: number;
  name: string;
  discription: string;
  options: optionType[];
}

export interface optionType {
  id: number;
  image: string;
  name: string;
  price: string;
  discription: string;
}