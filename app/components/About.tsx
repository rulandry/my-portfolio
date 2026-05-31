import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-16 space-y-5 sm:space-y-6">
          <p className="text-purple-400 text-base sm:text-lg mb-2 font-medium">
            About Me
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Get to know me
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
            I&apos;m an{" "}
            <span className="text-purple-400">Azure Support Engineer L-2</span> passionate 
            about cloud technologies, identity management, and cybersecurity. I specialize in 
            supporting Microsoft 365 and Microsoft Entra ID environments, helping organizations 
            resolve technical challenges and maintain secure, reliable cloud services.
          </p>

          <p className="text-sm sm:text-base lg:text-lg max-w-4xl mx-auto theme-muted leading-relaxed px-2 sm:px-0">
            My experience spans technical support, troubleshooting, user administration, and 
            cloud-based collaboration platforms, with a strong focus on delivering excellent 
            customer experiences. I enjoy tackling complex problems, learning new technologies, 
            and turning technical challenges into practical solutions.
          </p>

          <p className="text-sm sm:text-base lg:text-lg max-w-4xl mx-auto theme-muted leading-relaxed px-2 sm:px-0">
            Currently, I&apos;m expanding my expertise in cloud engineering, cloud security, and 
            security operations while seeking opportunities to contribute to innovative teams and 
            impactful technology projects.
          </p>
        </div>

       {/*<div className="flex justify-center">
          <Image
            src="/assets/body.png"
            alt="About Landry Rugomoka skills and experience"
            width={800}
            height={800}
            className="w-full max-w-30px sm:max-w-50px lg:max-w-80px h-auto object-contain"
          />
        </div>*/}
      </div>
    </section>
  );
}
