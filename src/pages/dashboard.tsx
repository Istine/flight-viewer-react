import Layout from "../components/Layout";
import Table from "../components/Table";
import TableSkeleton from "../components/TableSkeleton";

const DashBoard: React.FC<{}> = () => {
  return (
    <Layout>
      {/* <Table /> */}
      <TableSkeleton />
    </Layout>
  );
};

export default DashBoard;
