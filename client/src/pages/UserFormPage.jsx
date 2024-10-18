import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createUser, deleteUser, getUser, updateUser } from "../api/users.api";
import { toast } from "react-hot-toast";

export function UserFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateUser(params.id, data);
      toast.success("User updated", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createUser(data);
      toast.success("New User Added", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }

    navigate("/users");
  });

  useEffect(() => {
    async function loadUser() {
      if (params.id) {
        const { data } = await getUser(params.id);
        setValue("name", data.name);
        setValue("lastname", data.lastname);
      }
    }
    loadUser();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit} className="bg-zinc-800 p-10 rounded-lg mt-2">
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          autoFocus
        />

        {errors.name && <span>This field is required</span>}

        <textarea
          placeholder="Lastname"
          {...register("lastname", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full"
        />

        {errors.lastname && <span>This field is required</span>}

        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Save
        </button>
      </form>

      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={async () => {
              const accepted = window.confirm("Are you sure?");
              if (accepted) {
                await deleteUser(params.id);
                toast.success("User Removed", {
                  position: "bottom-right",
                  style: {
                    background: "#101010",
                    color: "#fff",
                  },
                });
                navigate("/users");
              }
            }}
          >
            delete
          </button>
        </div>
      )}
    </div>
  );
}
