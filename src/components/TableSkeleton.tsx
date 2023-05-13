const TableSkeleton: React.FC<{}> = () => {
  return (
    <>
      <div className="skeleton-header-container">
        <SkeletonHeader />
        <SkeletonHeader />
        <SkeletonHeader />
        <SkeletonHeader />
      </div>
      <div className="skeleton-container">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, key) => (
          <Skeleton key={key} />
        ))}
      </div>
    </>
  );
};

const Skeleton: React.FC<{}> = () => {
  return <div className="skeleton"></div>;
};

const SkeletonHeader: React.FC<{}> = () => {
  return (
    <div className="header">
      <div className="skeleton-header"></div>
      <div className="skeleton-header-round"></div>
    </div>
  );
};

export default TableSkeleton;
