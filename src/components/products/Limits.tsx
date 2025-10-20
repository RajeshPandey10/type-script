
import { useSortData } from '../../hooks/useSortData'

const Limits = () => {
    const {getLimitedData} = useSortData()
  return (
        <div className="mt-10 text-right ">
        <label htmlFor="limit" className="mr-4">
          Limit:
        </label>
        <select
          name="limit"
          id="limit"
          className="border  border-blue-600 p-2 rounded-md"
          onChange={(e) => getLimitedData(e)}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
  )
}

export default Limits