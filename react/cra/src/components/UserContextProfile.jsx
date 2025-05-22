import { useContext } from "react";
import PersonContext from "./PersonContext";

export function UserContextProfile() {
  const user = useContext(PersonContext);

  return (
    <div>
      <h3>User Profile</h3>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Tel:</strong> {user.tel}
      </p>
    </div>
  );
}
