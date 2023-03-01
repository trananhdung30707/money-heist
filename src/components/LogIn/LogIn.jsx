export default function LogIn() {
  return (
    <div className="h-screen w-screen bg-[#ebebeb]">
      {/* heading */}
      <div className="h-[10vh] w-screen bg-[#fa5d5d] flex justify-center items-center md:h-[40vh]">
        <button
          className="flex flex-col justigy-center items-center md:mt-[-15vh]"
          type="button"
        >
          <img
            className="h-[8vh] w-auto md:h-[16vh]"
            src={"https://img.icons8.com/color/12x/money-heist-dali.png"}
            alt="Money Heist"
          />

          <h1 className="hidden font-semibold text-3xl text-white md:block">
            Money Heist
          </h1>
        </button>
      </div>

      {/* login form */}
      <div className="py-10 bg-white flex flex-col justify-start items-center md:h-[50vh] md:w-[35vw] md:rounded-3xl md:absolute md:m-auto md:top-0 md:left-0 md:right-0 md:bottom-0">
        <h2 className="font-semibold text-3xl">Log In</h2>

        <form className="mt-5 flex flex-col justify-center items-center gap-5">
          <input className="login-input" type="text" placeholder="Username" />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
          />
          <button className="mt-[-1.5vh] self-end font-medium text-[0.95rem] text-[#fa5d5d] hover:text-[#fa1d1d]" type="button">Forgot Password</button>

          <button className="h-[5vh] w-[90vw] md:w-[30vw] bg-[#fa5d5d] hover:bg-[#fa1d1d] duration-150 rounded-lg text-white font-semibold" type="button">LOGIN</button>

          <p>Don’t have an account? <span><button type="button" className="text-[#fa5d5d] hover:text-[#fa1d1d] underline font-medium text-[0.95rem]">Register</button></span></p>
        </form>
      </div>
    </div>
  );
}
