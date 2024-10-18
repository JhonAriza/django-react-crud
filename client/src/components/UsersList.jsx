import { useEffect, useState } from "react";
import { getAllUsers } from "../api/users.api";
import { UserCard } from "./UserCard";

export function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const res = await getAllUsers();
      setUsers(res.data);
    }
    loadUsers();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
