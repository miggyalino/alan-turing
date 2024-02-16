import List from "./List"
import { Separator } from "@/components/ui/separator"
import Reveal from "./Reveal"

const Achievements = () => {

  return (
    <section id="achievements" className='h-full w-full bg-bg-img-1 pt-20'>
      <Separator />
      <Reveal>
      <div className='flex flex-col lg:flex-row max-container flexBetween'>
        {/* Left Section */}
        <div className="w-1/2 max-md:w-3/4 flex flex-col gap-8 max-md:items-start max-md:my-12 max-md:px-0">
          <h2 className="bold-64 max-md:bold-40">My Notable Achievements</h2>
          <p className="regular-20 max-md:regular-16 text-gray">Welcome to the realm of my achievements, where the tapestry of innovation and mathematical brilliance weaves together a narrative that has shaped the very foundations of science and technology. I am Alan Turing, and it is my pleasure to guide you through the hallmarks of a journey marked by codebreaking triumphs, theoretical revelations, and a vision for artificial intelligence that has echoed through the ages.</p>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 h-screen flexCenter overflow-hidden">
          <List />
        </div>
      </div>
      </Reveal>
      <Separator />
    </section>
  )
}

export default Achievements