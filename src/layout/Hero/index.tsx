export default function Hero() {
  return (
    <section
      id="home"
      className="h-[70vh] md:h-[30vh] lg:h-[50vh] xl:h-[75vh] bg-green-900 bg-cover bg-no-repeat bg-left"
    >
      <div className="container flex flex-col items-center justify-center h-full p-8 mx-auto">
        <h1 className="mb-2 text-2xl text-center text-white lg:mb-4 lg:text-7xl font-latoBlack">
          Nature's Beauty Delivered to You
        </h1>
        <p className="mb-4 text-center text-white lg:mb-8 lg:text-lg">
          Nature's beauty is just a click away with our online flower and plant
          shop. We offer a <br /> wide variety of flowers that will bring a
          touch of nature to your home!
        </p>
        <div>
          <button className="px-6 py-2 text-white transition duration-200 ease-in-out bg-green-500 rounded-md lg:text-xl hover:bg-white hover:text-green-900 lg:px-20">
            Book now
          </button>
        </div>
      </div>
    </section>
  );
}
