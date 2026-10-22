import { ErrorBoundary } from "react-error-boundary";
import DataItem from "./DataItem";
import ErrorFallback from "./ErrorFallback";

function DataList() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <DataItem />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <DataItem />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <DataItem />
      </ErrorBoundary>
    </>
  );
}

export default DataList;
