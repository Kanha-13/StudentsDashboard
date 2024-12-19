const SkeletonCells = () => {
  return (
    <td className="py-2">
      <div className="h-6 bg-gray-300 rounded w-16"></div>
    </td>
  );
}

const SkeletonRow = ({ cells }) => {
  return (
    <tr className="bg-white border-b animate-pulse">
      {[...Array(cells)].map((_, index) => <SkeletonCells key={index+"skeleton-cells"} />)}
    </tr>
  )
}


const TableSkeleton = ({ cells, rows }) => {
  return (
    [...Array(rows)].map((_, index) => <SkeletonRow key={index+"skeleton-rows"} cells={cells} />)
  );
}


export default TableSkeleton;