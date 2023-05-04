import airplane from "../assets/airplane.png";
import departureAirport from "../assets/airport.png";
import time from "../assets/time.png";
import arrivalAirport from "../assets/airport2.png";

const Table: React.FC<{}> = () => {
  return (
    <table>
      <tr>
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
      </tr>
    </table>
  );
};

export default Table;
