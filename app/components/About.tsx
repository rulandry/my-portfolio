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
            <span className="text-purple-400">Azure Support Engineer</span> with
            experience in Microsoft 365, Microsoft Entra ID, Windows
            troubleshooting, and cloud-based user support.
          </p>

          <p className="text-sm sm:text-base lg:text-lg max-w-4xl mx-auto theme-muted leading-relaxed px-2 sm:px-0">
            My background combines technical support, identity and access
            troubleshooting, and customer-focused problem solving. I enjoy
            helping organizations keep their environments secure, functional,
            and efficient while continuing to grow in cloud engineering and
            cybersecurity.
          </p>

          <p className="text-sm sm:text-base lg:text-lg max-w-4xl mx-auto theme-muted leading-relaxed px-2 sm:px-0">
            I am especially interested in opportunities where I can contribute
            to cloud support, identity management, security operations, and
            modern workplace technologies while building impactful and reliable
            solutions.
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
