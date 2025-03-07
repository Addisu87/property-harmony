
const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-72 bg-gray-200 rounded-lg w-full" />
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="h-4 bg-gray-200 rounded w-2/3" />
      </div>
    </div>
  );
};

export default LoadingSkeleton;
