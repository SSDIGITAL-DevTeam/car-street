import { brands } from "@/constant/FilterTab";
import { useSearchParams } from "next/navigation";
import { FaChevronDown } from "react-icons/fa6";

export default function SelectBrand(): JSX.Element {
  // search params
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams!.toString());

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBrand = e.target.value;

    params.set("brand", selectedBrand);
    window.history.pushState({}, "", `?${params.toString()}`);
  };
  return (
    <div className="relative inline-block w-full">
      <select
        onChange={handleCategoryChange}
        className="bg-gray-100 py-2.5 pl-4 pr-20 text-black/85 appearance-none w-full rounded-md"
      >
        <option value="">Select a brand</option>
        {brands.map((brand) => (
          <option value={brand.key} key={brand.key}>
            {brand.title}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <FaChevronDown />
      </div>
    </div>
  );
}
