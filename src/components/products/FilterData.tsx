import { useSortData } from "../../hooks/useSortData";

const FilterData = () => {
  const { getFilteredData, setFilters, filters } = useSortData();

  return (
    <div className="w-1/6 py-10 px-5 border border-gray-300 border-dashed my-8 ml-5 h-50">
      <h3 className="font-semibold">Filters & Sort</h3>
      <div className="py-5">
        <label htmlFor="name"></label>
        <input
          className="border px-2.5 rounded"
          placeholder="filter by name.."
          type="text"
          id="name"
          value={filters.name}
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
        />
      </div>
      <div className="py-2.5 rounded">
        <label htmlFor="name"></label>
        <input
          className="border px-2"
          placeholder="filter by brand.."
          type="text"
          id="brand"
          value={filters.brand}
          onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
        />
      </div>
      <div className="text-center">
        <button
          className="bg-slate-700 text-white rounded mt-10 py-2 px-6 cursor-pointer"
          onClick={getFilteredData}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterData;
