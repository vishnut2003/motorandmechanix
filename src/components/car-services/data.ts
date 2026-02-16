export type Model = {
  name: string;
  fuels?: string[];
  id?: number;
  thumbnail?: string;
  image_path?: string;
};

export type Manufacturer = {
  name: string;
  models?: Model[];
  logo?: string;
  icon?: string;
  id?: number;
  is_popular?: number;
};

export type CarData = {
  manufacturers: Manufacturer[];
  popularBrands: string[];
};