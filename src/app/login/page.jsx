import Form from "./Form.jsx";
import Link from 'next/link'

const page = () => {
  return (
    <main className="bg-[#5D25FE] min-h-screen flex items-center justify-center bg-[url('/hero-pattern.svg')] bg-cover bg-center bg-repeat">
      <div className="sm:p-7.5 w-full max-w-md rounded-3xl bg-white p-4">
        <div
          className={` flex grow items-center justify-center  px-4 py-12`}
        >
          <div className="sm:p-7.5 w-full max-w-md rounded-3xl bg-white p-4">
            <div className="mb-7.5 flex items-center justify-between sm:mb-10">
              <p className="inline-block text-2xl font-semibold uppercase drop-shadow-md transition  text-neutral-800 ">
                HeyDevs
              </p>
           
            <div>
              <button className="relative select-none items-center gap-2 overflow-hidden whitespace-nowrap text-sm font-medium transition-colors focus:ring-ring/40 focus:outline-none focus:ring-2 data-disabled:cursor-not-allowed data-disabled:ring-0 inline-flex justify-center rounded-md border-input border [&:not([data-disabled])]:hover:bg-accent [&:not([data-disabled])]:hover:text-accent-foreground [&:not([data-disabled])]:focus:bg-accent [&:not([data-disabled])]:focus:text-accent-foreground data-disabled:opacity-60 px-4.75 h-10 !font-normal">
                LanguageButton
              </button>
            </div>
            </div>
            <Form/>
            
            <div className="text-center mt-4">
          <p className="text-sm text-neutral-600">
        Dont have an account? <Link className="text-blue-600 font-medium hover:underline" href="/signUp">
          Sign Up</Link>
          </p>
          </div>
          </div>
        </div>
      </div>
      
    </main>
  );
};
export default page;
