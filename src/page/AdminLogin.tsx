import Logo from "../assets/logo/Logo.png";

function adminLogin() {
  return (
    <div className="bg-xlogbg bg-center bg-no-repeat bg-object-cover h-screen w-screen px-4.375 pt-5.938 pb-4.688 ">
      <div className="flex justify-center items-center h-full bg-white">
        <div className="flex flex-col border-2 border-gray-500 text-center justify-center items-center font-barlow text-3xl px-12 pt-4 pb-12">
          <img src={Logo} alt="logo" className="w-[169px] h-[189px]" />
          <div className="flex flex-col gap-8 pb-4">
            <h1 className="">XLOG</h1>
            <h2 className="">ADMIN ACCOUNT</h2>
          </div>
          <div className="flex flex-col gap-4 w-96 text-sm">
            <input
              className="h-14 border-2 border-gray-400 p-2"
              placeholder="Username*"
            ></input>
            <input
              className="h-14 border-2 border-gray-400 p-2"
              placeholder="Password*"
            ></input>
            <div className="flex items-center text-sm pb-10">
              <input type="checkbox" />
              <span>Remember Me?</span>
            </div>
          </div>
          <button className="text-2xl text-white  bg-orange-500 rounded-lg w-36 h-14">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default adminLogin;
