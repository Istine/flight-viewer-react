import React from "react";
import { IOpenSkyData } from "../components/Table";
import { convertStringTimeToEpoch, convertStringTimeToEpoch2 } from "../utils";

//time difference on first page load
const fourHoursBefore = new Date(Date.now() - 13200000).toUTCString();
const fiveHoursBefore = new Date(Date.now() - 16800000).toUTCString();

export const useGet = (
  begin = fiveHoursBefore,
  end = fourHoursBefore,
  isloading = false
) => {
  const [data, setData] = React.useState<IOpenSkyData>([]);
  const [errors, setErrors] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchDataFromOpenSky = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          ` https://opensky-network.org/api/flights/all?begin=${convertStringTimeToEpoch2(
            fiveHoursBefore
          )}&end=${convertStringTimeToEpoch2(fourHoursBefore)}`
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

  React.useEffect(() => {
    const fetchDataFromOpenSky = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          ` https://opensky-network.org/api/flights/all?begin=${convertStringTimeToEpoch(
            begin ? begin : fiveHoursBefore
          )}&end=${convertStringTimeToEpoch(end ? end : fourHoursBefore)}`
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
  }, [isloading]);

  return [data, errors, loading];
};
