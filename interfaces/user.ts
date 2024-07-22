interface User {
  _id?: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: Date;
  userName: string;
  password: string;
  gender: Boolean;
  phonenumber: number;
  email?: string;
  bio?: string;
  createdOn: Date;
  lastUpdatedOn: Date;
  lastLoggedIn: Date;
  profilePic?: string;
}

export default User;
