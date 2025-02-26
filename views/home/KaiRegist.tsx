import StarBorder from "@/blocks/Animations/StarBorder/StarBorder";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IoIosArrowForward } from "react-icons/io";

const KaiRegist = () => {
  return (
    <div className="text-[24px] xl:text-[1.5vw] w-[80rem] mx-auto py-[10rem]">
      <div className="flex justify-between items-center gap-[1em] max-md:flex-col">
        <p className="text-[3em] max-md:text-[1.5em] font-bold flex-1">
          Be part of SEI Gaming Ecosystem
        </p>
        <div className="md:w-1/2 bg-primary p-[1em] rounded-xl">
          <p className="text-[1.5em] max-md:text-[1.2em] font-bold mb-[1.5em]">
            Go fully on-chain have never been so easy
          </p>
          <div className="flex gap-[1em] flex-col mb-[1.5em]">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="projectName" className="font-bold text-[0.8em]">
                Project Name
              </Label>
              <Input
                type="text"
                id="projectName"
                placeholder="Input your project name"
                className="outline-none border-none rounded-md text-[0.8em] bg-dark-primary/25"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label
                htmlFor="projectInformation"
                className="font-bold text-[0.8em]"
              >
                Project information
              </Label>
              <Input
                type="text"
                id="projectInformation"
                placeholder="Input your X account or Website"
                className="outline-none border-none rounded-md bg-dark-primary/25 text-[0.8em]"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label
                htmlFor="pointOfContact"
                className="font-bold text-[0.8em]"
              >
                Point of contact
              </Label>
              <Input
                type="text"
                id="pointOfContact"
                placeholder="Input your Telegram handle"
                className="outline-none border-none rounded-md bg-dark-primary/25 text-[0.8em]"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <StarBorder
              as="button"
              classContainer="w-fit ]"
              className="bg-white px-[24px]"
              speed="5s"
            >
              <div className="flex items-center gap-1 group">
                <p className="font-bold text-[0.6em] text-primary">Submit</p>
                <IoIosArrowForward className="group-hover:translate-x-1 transition-all text-primary text-[0.6em]" />
              </div>
            </StarBorder>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KaiRegist;
