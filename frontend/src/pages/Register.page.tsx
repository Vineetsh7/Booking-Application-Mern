import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

type RegisterFormData = {
  email: string;
  fullName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div className=" px-40">
      <form className="flex flex-col gap-5" onSubmit={onSubmit}>
        <h2 className=" text-3xl font-bold">Create an account</h2>
        <div className="flex flex-col md:flex-row gap-5">
          <label htmlFor="" className="text-gray-700 text-sm font-bold flex-1">
            {" "}
            First Name
            <input
              type="text"
              className="border rounded w-full py-1 px-2 font-normal"
              {...register("fullName", { required: "This field is required" })}
            />
            {errors.fullName && (
              <span className="text-red-500">{errors.fullName.message}</span>
            )}
          </label>

          <label htmlFor="" className="text-gray-700 text-sm font-bold flex-1">
            {" "}
            Last Name
            <input
              type="text"
              className="border rounded w-full py-1 px-2 font-normal"
              {...register("lastName", { required: "This field is required" })}
            />
            {errors.lastName && (
              <span className="text-red-500">{errors.lastName.message}</span>
            )}
          </label>
        </div>

        <label htmlFor="" className="text-gray-700 text-sm font-bold flex-1">
          {" "}
          Email
          <input
            type="email"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </label>

        <label htmlFor="" className="text-gray-700 text-sm font-bold flex-1">
          {" "}
          Password
          <input
            type="password"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 6,
                message: "password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </label>

        <label htmlFor="" className="text-gray-700 text-sm font-bold flex-1">
          {" "}
          Confirm Password
          <input
            type="password"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("confirmPassword", {
              validate: (val) => {
                if (!val) {
                  return "This field is required";
                } else if (watch("password") !== val) {
                  return "Your password do not match";
                }
              },
            })}
          />
          {errors.confirmPassword && (
            <span className="text-red-500">
              {errors.confirmPassword.message}
            </span>
          )}
        </label>

        <span>
          <Button type="submit">Register</Button>
        </span>
      </form>
    </div>
  );
};

export default Register;
