import React from "react";

function About() {
  return (
    <div className="bg-gray-100 p-6">
      {/* About Us Section */}
      <section className="mb-8 m-5 p-5">
        <div className="heading flex justify-center ml-12 mr-12 mt-8 bg-blue-700 rounded-full">
          <h2 className="text-2xl justify-items-center font-bold text-white border-b-2 border-blue-200 inline-block mb-4">
            About Us
          </h2>
        </div>
        <div className="para p-10 ml-12 mr-12 mt-4 bg-slate-200 rounded-3xl">
          <p className="text-gray-700 text-lg text-justify">
            Welcome to <strong>KnowledgePath</strong>, your premier destination
            for online learning. At <strong>KnowledgePath</strong>, our mission
            is to empower individuals by providing high-quality education
            tailored to diverse needs. Whether you’re a student eager to expand
            your knowledge, a professional looking to upskill, or a lifelong
            learner exploring new interests, we have something for everyone. Our
            platform offers a wide array of courses designed by industry
            experts, ensuring that you gain practical and relevant skills. With
            interactive learning materials, real-time progress tracking, and
            user-friendly navigation, we aim to make your educational journey
            seamless and engaging. At KnowledgePath, we believe in fostering a
            supportive learning environment where you can achieve your goals at
            your own pace. Join our community of passionate learners and unlock
            new opportunities for growth and success. Together, let’s build the
            future you’ve always envisioned. Start your learning journey with
            KnowledgePath today!
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="">
        <div className="flex flex-col bg-slate-200 items-center justify-center p-6 ml-20 mr-20 pt-10 -mt-6 rounded-3xl">
          {/* Heading */}
          <div className="heading flex justify-center ml-12 mr-12 -mt-7 rounded-full">
            <h2 className="text-2xl font-bold text-blue-700 border-b-2 border-blue-500 inline-block mb-4">
              Contact Information
            </h2>
          </div>

          {/* Contact Info */}
          <div className="infoContact flex flex-col w-full max-w-2xl justify-center text-center">
            <p className="text-gray-700 text-lg mb-4">
              Have questions or need assistance? Reach out to us!
            </p>
            <ul className="list-none space-y-1 -mt-3">
              <li>
                <span className="font-semibold text-slate-800">Email:</span>{" "}
                <a
                  href="support@knowledgepath.com"
                  className="text-blue-500 hover:underline"
                >
                  support@knowledgepath.com
                </a>
              </li>
              <li>
                <span className="font-semibold text-slate-800">Phone:</span>{" "}
                <a
                  href="tel:+91 8260714774"
                  className="text-blue-500 hover:underline"
                >
                  +91 8260714774
                </a>
              </li>
              <li>
                <span className="font-semibold text-slate-800">Address:</span>
                <span className="text-black">
                  123 jaydev vihar, Bhubaneswar, PinCode: 761005, Odisha
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
