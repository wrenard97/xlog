import { useForm } from "react-hook-form";
import Logo from "../assets/logo/Logo.png";
import InputProps from "../components/InputProps";

interface LoginForm {
  username: string;
  password: string;
  rememberMe: boolean;
}

function AdminLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <div className="bg-xlogbg bg-no-repeat bg-cover h-screen px-[2rem] py-[3rem] ">
      <div className="flex justify-center items-center h-full bg-white py-[2rem]">
        <div className="flex flex-col border-[1.5px] border-[#707070] text-center items-center w-80 h-[] py-4 ">
          <img src={Logo} alt="logo" className="w-[6rem] h-[6.75rem]" />
          <div className="flex flex-col">
            <h1 className=" flex flex-row justify-center text-[#fc8e03]">
              X <span className="text-[#0095d8]">LOG</span>
            </h1>
            <h2 className="pb-4 text-[#0095d8]">ADMIN ACCOUNT</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4 w-72 text-[0.5rem] items-center pb-2">
              <InputProps
                type="text"
                placeholder="Username*"
                register={register("username", {
                  required: "Username is required*",
                })}
                error={errors.username}
              />

              <InputProps
                type="password"
                placeholder="Password*"
                register={register("password", {
                  required: "Password is required*",
                })}
                error={errors.password}
              />
            </div>
            <div className="flex flex-row items-center text-[0.5rem] pb-6 gap-2 px-6">
              <input
                type="checkbox"
                {...register("rememberMe")}
                className="border border-gray-400 rounded-sm h-4 w-4"
              />
              <span className="text-left">Remember Me?</span>
            </div>
            <div className="">
              <button className=" text-white  bg-orange-500 rounded-lg py-2 px-8">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
