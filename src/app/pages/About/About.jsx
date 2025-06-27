import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import { FaRegSmile, FaSearch, FaTools, FaClipboard } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-28 flex items-center justify-center">
        <div className="flex flex-col justify-center place-items-center">
          <Typography
            variant="h3"
            className="font-extrabold mb-8 leading-tight"
          >
            About Us
          </Typography>
          <Typography
            variant="h6"
            className="max-w-2xl mx-auto leading-relaxed"
          >
            Empowering careers by connecting talented individuals with exciting
            opportunities and enabling organizations to find the right
            candidates.
          </Typography>
        </div>
      </div>
      <div className="w-[80%] mx-auto">
        {/* Mission and Vision Section */}
        <Container className="py-20">
          <Grid container spacing={6} className="items-center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                className="font-bold mb-6 text-blue-600 uppercase tracking-wide"
              >
                Our Mission
              </Typography>
              <Typography
                variant="body1"
                className="text-gray-700 leading-relaxed"
              >
                Our mission is to provide a seamless job search and recruitment
                experience for both job seekers and employers, fostering career
                growth and organizational success.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                className="font-bold mb-6 text-blue-600 uppercase tracking-wide"
              >
                Our Vision
              </Typography>
              <Typography
                variant="body1"
                className="text-gray-700 leading-relaxed"
              >
                To be the leading platform that redefines the hiring process
                with innovation and efficiency, making professional connections
                easier for everyone.
              </Typography>
            </Grid>
          </Grid>
        </Container>

        {/* Features Section */}
        <div className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
              {[
                {
                  title: "Easy Job Search",
                  desc: "Find jobs that match your skills effortlessly.",
                  icon: <FaSearch className="text-blue-600 text-5xl" />,
                },
                {
                  title: "AI-Powered Tools",
                  desc: "Get personalized job recommendations powered by AI.",
                  icon: <FaTools className="text-blue-600 text-5xl" />,
                },
                {
                  title: "Resume Builder",
                  desc: "Create standout resumes to impress employers.",
                  icon: <FaClipboard className="text-blue-600 text-5xl" />,
                },
                {
                  title: "Recruiter Dashboard",
                  desc: "Streamline hiring with our advanced dashboard.",
                  icon: <FaRegSmile className="text-blue-600 text-5xl" />,
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md p-6 max-w-xs mx-auto rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-4">{feature.icon}</div>
                    <h3 className="text-lg font-semibold text-blue-600">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 leading-tight">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "John Doe",
                  feedback: "This platform helped me land my dream job!",
                },
                {
                  name: "Jane Smith",
                  feedback: "Great features and an easy-to-use interface.",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md p-8 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <p className="italic text-gray-700 mb-4 leading-relaxed">
                    "{testimonial.feedback}"
                  </p>
                  <h3 className="font-bold text-blue-600 text-lg">
                    - {testimonial.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
</div>
        {/* Contact Section */}
        <div className="bg-indigo-600 text-white py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 leading-tight">
          Get in Touch
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          Have questions or need support? Reach out to us, and our team will
          assist you promptly.
        </p>
        <div className="text-center">
          <a
            href="#contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-white text-lg px-10 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
     
    </div>
  );
};

export default AboutPage;
