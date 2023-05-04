import Layout from "../components/Layout";
import Table, { IOpenSkyData } from "../components/Table";
import TableSkeleton from "../components/TableSkeleton";
import { useGet } from "../hooks/useGet";

const DashBoard: React.FC<{}> = () => {
  const [data, errors, isLoading] = useGet();

  if (isLoading) {
    return (
      <Layout>
        <TableSkeleton />
      </Layout>
    );
  }

  return (
    <Layout>
      <Table data={data as IOpenSkyData} />
    </Layout>
  );
};

export default DashBoard;
