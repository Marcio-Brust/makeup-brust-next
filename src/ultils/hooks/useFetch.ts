import axios from "axios";
import { useQuery } from "react-query";

interface colorsProps {
  hex_value: string;
  colour_name: string;
}
export interface MakeupProps {
  id: number;
  brand: string;
  name: string;
  price: string;
  price_sign: string;
  image_link: string;
  api_featured_image: string;
  description: string;
  rating: number | null;
  category: string | null;
  product_type: string;
  tag_list: string[];
  product_colors: colorsProps[];
}

const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products.json";

//Criar um useContext para gerenciar o estado de tipo da pagina produto!!

export const useFetch = () => {
  const fetchProduct = async (): Promise<MakeupProps[]> => {
    const { data } = await axios.get(BASE_URL);
    return data;
  };

  return useQuery("product", fetchProduct, {
    refetchOnWindowFocus: false,
  });
};
