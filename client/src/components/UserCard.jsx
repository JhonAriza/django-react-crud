import { useNavigate } from "react-router-dom";

export function UserCard({ user }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => {
        navigate(`/users/${user.id}`);
      }}
    >
      <h1 className="text-white font-bold uppercase rounded-lg">
        {user.name}
      </h1>
      <p className="text-slate-400">{user.lastname}</p>
    </div>
  );
}
