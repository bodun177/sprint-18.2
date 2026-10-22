import { useState } from "react";
import { useErrorHandler } from "react-error-boundary";
import { getData } from "../api";

function DataReceiver() {
  const [data, setData] = useState(0);
  const handleError = useErrorHandler();

  const handleClick = () => {
    try {
      setData(getData());
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <>
      <div className="data">
        <button onClick={handleClick}>Get new data</button>
        <div>{data}</div>
      </div>
    </>
  );
}

export default DataReceiver;
