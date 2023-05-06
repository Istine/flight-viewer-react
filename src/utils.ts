import { IOpenSkyData } from "./components/Table";

type Login = {
  email: string;
  password: string;
};
export const validateLogin = (data: Login): [boolean, string | null] => {
  const { email, password } = data;
  let error: string = "";
  const re =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email && !password) {
    error = "Please fill in the fields ";
  } else if (!re.test(email)) {
    error = "Please enter a valid email address ";
  } else if (!password) {
    error = "Please enter a password ";
  } else if (email !== "admin@mail.com" || password !== "admin") {
    error = "invalid email or password ";
  }
  if (error) return [false, error];
  else return [true, null];
};

export const waitFor = (seconds: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, seconds * 1000);
  });
};

export const formatTime = (time: number) => {
  return (
    new Date(time * 1000).toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      timeZone: "GMT",
    }) + "  GMT"
  );
};

export const convertStringTimeToEpoch = (time: string) => {
  const today = new Date().toLocaleDateString();
  const newDate = `${today} ${time}`;
  const epoch = new Date(newDate).getTime();

  return epoch / 1000;
};

export const convertStringTimeToEpoch2 = (time: string) => {
  const newDate = `${time}`;
  const epoch = new Date(newDate).getTime();
  return epoch / 1000;
};

export const filterbySearchInput = (
  data: any,
  search: string,
  defaultData: any
) => {
  const found = data[search.toLowerCase()];

  if (found) return found;
  return defaultData;
};
export const formatData = (data: IOpenSkyData) => {
  let hashTable: { [key: string]: any } = {};
  const store = JSON.parse(localStorage.getItem("store") as string);
  if (store) return store;
  else {
    data.forEach((record) => {
      const callsign = record.callsign ? record.callsign : "NILL";
      hashTable[callsign.toLowerCase().trim()] = [record];
    });
    return hashTable;
  }
};
