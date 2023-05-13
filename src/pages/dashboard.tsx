import React from "react";
import Layout from "../components/Layout";
import Table, { IOpenSkyData } from "../components/Table";
import TableSkeleton from "../components/TableSkeleton";
import { useGet } from "../hooks/useGet";
import ReactPaginate from "react-paginate";
import { useTimeRange } from "../context/time-range";
import { filterbySearchInput, formatData } from "../utils";

const itemsPerPage = 30;

const DashBoard: React.FC<{}> = () => {
  const [search, setSearch] = React.useState("");

  const [begin, end, loading] = useTimeRange();

  const [data, , isLoading] = useGet(begin, end, loading);

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = React.useState(0);

  const tableData = data as IOpenSkyData;

  const formattedData = formatData(tableData);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  let currentItems = tableData.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(tableData.length / itemsPerPage);
  if (search)
    currentItems = filterbySearchInput(formattedData, search, tableData);

  if (currentItems.length > 1) {
    currentItems = tableData.slice(itemOffset, endOffset);
  }

  // Invoke when user click to request another page.
  const handlePageClick = (e: any) => {
    const newOffset = (e.selected * itemsPerPage) % tableData.length;

    setItemOffset(newOffset);
  };

  const handleSearchInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    [search]
  );

  if (isLoading) {
    return (
      <Layout>
        <TableSkeleton />
      </Layout>
    );
  }

  return (
    <Layout search={search} handleSearchInputChange={handleSearchInputChange}>
      <Table data={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        pageLinkClassName="page-name"
        pageClassName="page-link"
        previousClassName="next-page-item"
        nextClassName="next-page-item"
        nextLinkClassName="next-page-link"
        breakLinkClassName="page-name"
        containerClassName="pagination"
        activeLinkClassName="active"
      />
    </Layout>
  );
};

export default DashBoard;
