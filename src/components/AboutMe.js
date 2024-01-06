import React from "react";

const AboutMePage = () => {
  return (
    <div className=" pt-[50px] " id="contact">
      <div className="  py-4 text-center">
        <span className=" font-semibold   text-[30px]  uppercase text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          About Me
        </span>
      </div>
      <main className=" mx-auto mt-8 px-[200px] max-[800px]:px-[100px] max-[500px]:px-[50px]  text-white rounded-md shadow-md">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Hi, I&apos;m
            <span className="capitalize text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
              vijay rajpara
            </span>
          </h2>
          <p>
            I am a passionate Full Stack MERN Developer with a strong foundation
            in building scalable and efficient web applications. My journey in
            the world of development began in 2023.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">My Tech Skills</h2>

          <p>I specialize in the MERN stack, utilizing:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>MongoDB for database management</li>
            <li>Express.js for server-side development</li>
            <li>React.js for dynamic user interfaces</li>
            <li>Node.js for server-side scripting</li>
          </ul>
          <p>In addition to my MERN stack proficiency, I am experienced in:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              TypeScript, enhancing the maintainability and scalability of
              projects
            </li>
            <li>
              Next.js, a powerful React framework enabling server-side rendering
              and a better developer experience
            </li>
            <li>
              Git for efficient collaboration and code management, with a strong
              presence on GitHub
            </li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <p>Feel free to reach out to me via the following contact details:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Email:{" "}
              <a href="mailto:your.email@example.com">
                vijay22rajpara@gmail.com
              </a>
            </li>
            <li>Mobile:+91 8160093484</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default AboutMePage;

// const AboutMePage = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-gray-800 text-white py-4 text-center">
//         <h1 className="text-2xl font-semibold">About Me - Your Name</h1>
//       </header>
//       <main className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
//         <section className="mb-8">
//           <h2 className="text-xl font-semibold mb-4">Hi, I'm Your Name!</h2>
//           <p>
//             I am a passionate individual with a strong background in [Your
//             Field/Profession]. My journey in [Field/Profession] has equipped me
//             with the skills and knowledge to tackle challenges and create
//             meaningful solutions.
//           </p>
//         </section>

//         <section className="mb-8">
//           <h2 className="text-xl font-semibold mb-4">My Expertise</h2>
//           <p>
//             Specializing in [Your Expertise/Area], I have a keen eye for detail
//             and a commitment to delivering high-quality work. My experience
//             includes [Your Previous Experience] where I [Highlight Achievements
//             or Projects].
//           </p>
//         </section>

//         <section>
//           <h2 className="text-xl font-semibold mb-4">Let's Connect</h2>
//           <p>
//             I'm always open to new opportunities and collaborations. Feel free
//             to reach out to me via email at{" "}
//             <a href="mailto:your.email@example.com">your.email@example.com</a>{" "}
//             or connect with me on [Social Media Platform].
//           </p>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default AboutMePage;
