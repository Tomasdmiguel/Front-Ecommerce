import Image from "next/image";
const CardHome: React.FC = (): React.ReactElement => {
  return (
    <section className="container mx-auto py-1 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 pr-4 text-center md:text-left">
        <h1 className="text-3xl font-bold mb-4 mt-10 md:mt-32">
          Explore the World of Mac
        </h1>
        <p className="text-gray-700">
          Discover the latest in Apple innovation with our range of Mac
          products, combining powerful performance and sleek design to elevate
          your computing experience.
        </p>
        <div className="flex justify-center md:justify-start">
          <a
            href="/shop"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-5 py-2 px-4 rounded">
            View products
          </a>
        </div>
      </div>

      <div className="md:w-1/2 mt-5 md:mt-0 h-70">
        <Image
          width={900}
          height={900}
          className="w-full h-full object-cover"
          src="https://cdn.pixabay.com/photo/2020/05/07/11/58/black-5141242_1280.jpg"
          alt="Mac Background"
        />
      </div>
    </section>
  );
};

export default CardHome;
//
