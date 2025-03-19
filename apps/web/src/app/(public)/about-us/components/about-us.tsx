import { Typography } from "@/components/ui";
import Image from "next/image";

export const AboutEdust = () => {
  return (
    <section className="py-16 mb-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          {/* Image Section */}
          <div className="flex justify-center">
            <Image 
              src="/images/about-us/about-edust.jpg" 
              alt="about-edust" 
              width={500} 
              height={300} 
              className="rounded-lg shadow-md w-full lg:max-w-[500px]"
            />
          </div>

          {/* Text Section */}
          <div>
            <Typography variant="h2" className="text-5xl font-bold text-gray-900 mb-4">
              About Us
            </Typography>
            <Typography variant="p" className="text-gray-700 leading-relaxed mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro id provident ex accusantium autem iure recusandae, odio reprehenderit, temporibus illum, laboriosam vitae quisquam error quo commodi quam maxime ullam libero.
            </Typography>
            <Typography variant="p" className="text-gray-700 leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro id provident ex accusantium autem iure recusandae, odio reprehenderit, temporibus illum, laboriosam vitae quisquam error quo commodi quam maxime ullam libero.
            </Typography>
          </div>

        </div>
      </div>
    </section>
  );
};
