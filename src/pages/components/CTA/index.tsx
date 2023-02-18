export default function CTA() {
  return (
    <section className={`bg-cta-bg bg-no-repeat bg-cover bg-center h-[400px]`}>
      <div className="container flex flex-col items-center justify-center w-full h-full gap-8 p-12 mx-auto lg:justify-between md:flex-row lg:flex-row">
        <div className="lg:flex-1 lg:mb-0">
          <h3 className="text-2xl leading-relaxed lg:text-[2rem] md:text-[1.5rem] text-white capitalize font-latoRegular">
            Enter your email address for our mailing Promo or other interesting
            things
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-4 lg:flex-1 lg:flex-row">
          <input
            className="w-full  px-2 py-2 bg-[transparent] text-white rounded-md border-2 border-grey-200"
            placeholder="Enter your email"
            type="text"
          />
          <button
            className="px-6 py-2 text-white bg-green-900 border-2 border-green-900 rounded-md hover:bg-green-500 hover:border-green-500 lg:px-12"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}
