"use client";

import Image from "next/image";
import { useFetch } from "../ultils/hooks/useFetch";

import logo from "../../public/images/Brust Makeup.png";

export const Navbar = () => {
  const { data, error, isLoading } = useFetch();

  const typeProductFilter = data?.map((typeProductFilter) => {
    return typeProductFilter.product_type;
  });
  const typeProduct = typeProductFilter?.filter(
    (typeProduct, i) => typeProductFilter.indexOf(typeProduct) === i
  );

  return (
    <>
      <header className="bg-tertiary flex justify-between items-center h-32">
        <button className="flex items-center justify-center w-10 h-10 bg-primary">
          <span className="border-2 border-t-primary w-8"></span>
        </button>
        <Image src={logo} alt="logo" width={300} priority={true} />
        <input type="search" name="" id="" />
      </header>
      <div className="bg-tertiary flex justify-center items-center">
        {" "}
        {isLoading && <p>Loading</p>}
        {typeProduct?.map((typeProduct) => (
          <ul
            key={typeProduct}
            className="bg-tertiary flex justify-between items-center p-3"
          >
            <li>
              <a
                href={`/`}
                id={typeProduct}
                className="py-1 px-2 block  border border-transparent hover:border-b-primary  text-xs"
              >
                {typeProduct[0].toUpperCase() +
                  typeProduct.substring(1).replace("_", " ")}
              </a>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};
