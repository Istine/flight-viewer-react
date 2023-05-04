import airplane from "../assets/airplane.png";
import departureAirport from "../assets/airport.png";
import time from "../assets/time.png";
import arrivalAirport from "../assets/airport2.png";
import Badge from "./Badge";
import { formatTime } from "../utils";

export type IOpenSkyData = { [key: string]: string }[];

const Table: React.FC<{ data: IOpenSkyData }> = ({ data }) => {
  return (
    <table>
      <thead>
        <th>
          <span>Flight</span>
          <img src={airplane} alt="flight icon" />
        </th>
        <th>
          <span>Departure Airport</span>
          <img src={departureAirport} alt="departure airport icon" />
        </th>
        <th>
          <span>Departing Time</span>
          <img src={time} alt="departing time icon" />
        </th>
        <th>
          <span>Arrival Airport</span>
          <img src={arrivalAirport} alt="arrival airport icon" />
        </th>
        <th>
          <span>Arrival Time</span>
          <img src={time} alt="arrival time icon" />
        </th>
      </thead>
      <tbody>
        {data.map((record, key) => (
          <tr key={key}>
            <td>
              {record.callsign ? (
                record.callsign
              ) : (
                <Badge text="not available" />
              )}
            </td>
            <td>
              {record.estDepartureAirport ? (
                record.estDepartureAirport
              ) : (
                <Badge text="not available" />
              )}
            </td>
            <td>
              {record.firstSeen ? (
                formatTime(parseInt(record.firstSeen))
              ) : (
                <Badge text="not available" />
              )}
            </td>
            <td>
              {record.estArrivalAirport ? (
                record.estArrivalAirport
              ) : (
                <Badge text="not available" />
              )}
            </td>
            <td>
              {record.lastSeen ? (
                formatTime(parseInt(record.lastSeen))
              ) : (
                <Badge text="not available" />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
