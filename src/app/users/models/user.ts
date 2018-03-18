export interface IUser {
  email: string;
  gender: string;
  phone_number: string;
  birthdate: number;
  location: {
    street: string;
    city: string;
    state: string;
    postcode: number | string;
  };
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  title: string;
  picture: string;
}
