export default function LogIn() {
  return (
    <div>
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
    </div>
  );
}
