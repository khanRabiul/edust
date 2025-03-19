import Image from "next/image";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

export const TeamMembers = () => {
  return (
    <Card className="bg-[#f9fafb] shadow-md rounded-lg overflow-hidden border border-gray-200 w-80 p-0">
      {/* Profile Image */}
      <div className="w-full h-[250px] relative">
        <Image
          src="/images/about-us/team-member.jpg"
          alt="edust-team-member"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <CardContent className="p-5 text-center">
        <CardTitle className="text-xl font-bold text-gray-900">Bonnie Green</CardTitle>
        <CardHeader className="text-sm text-gray-500">Senior Front-end Developer</CardHeader>
        <CardDescription className="text-gray-600 mt-2">
          Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
        </CardDescription>
      </CardContent>

      {/* Social Media Icons */}
      <CardFooter className="flex justify-center gap-4 pb-5">
        <button className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          <FaFacebookF size={18} />
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:bg-gray-800 transition">
          <BsTwitterX size={18} />
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-gray-900 text-white rounded-full hover:bg-gray-700 transition">
          <FaGithub size={18} />
        </button>
      </CardFooter>
    </Card>
  );
};
