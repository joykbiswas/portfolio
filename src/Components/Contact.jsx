
import Swal from "sweetalert2";
import { FaUser, FaPhone, FaEnvelope, FaComment, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;
    const email = form.email.value;
    const message = form.message.value;

    const contact = { name, number, email, message };

    if (contact) {
      Swal.fire({
        title: "Message Sent!",
        text: "Thank you for reaching out. I will get back to you as soon as possible.",
        icon: "success",
        confirmButtonText: "Great!",
        background: "#1f2937",
        color: "#ffffff",
        confirmButtonColor: "#3b82f6",
      });
      form.reset();
    }
  };

  return (
    <section id="contact" className="py-20 text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h3 className="text-4xl font-bold">Let's Connect</h3>
            <p className="text-lg leading-relaxed">
              I'm currently available to take on new projects. If you have a project in mind or just want to say hello, feel free to send me a message.
            </p>
            <div className="space-y-6 text-xl">
              <div className="flex items-center gap-4">
                <FaUser className="text-blue-400" />
                <p>Joy Kumar Biswas</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="text-blue-400" />
                <p>+8801744293156</p>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-400" />
                <a href="mailto:joykumarbiswas100@gmail.com" className="hover:underline">
                  joykumarbiswas100@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <FaUser className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 pl-12 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
              <div className="relative">
                <FaPhone className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  id="number"
                  name="number"
                  placeholder="Your Number"
                  className="w-full p-3 pl-12 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 pl-12 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
              <div className="relative">
                <FaComment className="absolute top-6 left-4 text-gray-400" />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3 pl-12 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-4 mt-4 font-bold rounded-md bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
