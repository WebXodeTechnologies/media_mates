
"use client";
import Image from "next/image";
const ToolsSection = () => {
const tools = [
  {
    id: 1,
    icon: "/tools/Adobe Premiere Pro.svg", // Adobe Premiere Pro icon
    title: "Adobe Premiere Pro",
    description: "Professional video editing software for creating high-quality ads and media content.",
  },
  {
    id: 2,
    icon: "/tools/After Effects.svg", // Adobe After Effects icon
    title: "Adobe After Effects",
    description: "Industry-standard motion graphics and VFX tool for animations and intros.",
  },
  {
    id: 3,
    icon: "/tools/React.svg", // Adobe Lightroom icon
    title: "React",
    description: "Advanced photo editing and color grading for professional visuals.",
  },
  {
    id: 4,
    icon: "/tools/semrush.png", // Ubersuggest icon
    title: "SemRush",
    description: "Comprehensive SEO and marketing tool for digital growth strategies.",
  },
  {
    id: 5,
    icon: "/tools/Adobe Illustrator.svg", // SEMrush icon
    title: "Illustrator",
    description: "Advanced vector graphics software for creating stunning logos and designs.",
  },
  {
    id: 6,
    icon: "/tools/nextjs-icon-svgrepo-com.svg", // Next.js icon
    title: "Next.js",
    description: "A modern React framework for building fast, scalable, and SEO-friendly websites.",
  },
];

  return (
  <section className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Badge */}
        <p className="text-green-400 font-semibold mb-2 flex items-center justify-center gap-2">
          <span className="text-lg">✱</span> TOOLS
        </p>

        {/* Heading */}
        <h2 className="text-4xl font-bold leading-snug mb-12 text-black dark:text-white">
          Empowering <span className="text-green-400">creativity with</span>{" "}
          cutting-edge tools
        </h2>

        {/* Tool Cards */}
        <div className="grid md:grid-cols-3 gap-8 ">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="bg-neutral-900 rounded-4xl px-6 py-8 flex items-center gap-4 shadow-md hover:shadow-[0_0_25px_5px_rgba(34,197,94,0.6)]"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-accent-foreground flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-red-600">
                <Image
                  src={tool.icon}
                  alt={tool.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="text-left text-white">
                <h3 className="font-semibold text-lg">{tool.title}</h3>
                <p className="text-sm text-gray-400">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ToolsSection
