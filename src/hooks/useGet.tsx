import React from "react";
import { IOpenSkyData } from "../components/Table";

export const useGet = () => {
  const [data, setData] = React.useState<IOpenSkyData>([]);
  const [errors, setErrors] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchDataFromOpenSky = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          " https://opensky-network.org/api/flights/all?begin=1517227200&end=1517230800"
        );
        const json = await res.json();
        setData(json);
      } catch (error) {
        setErrors("Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchDataFromOpenSky();
  }, []);

  return [data, errors, loading];
};
