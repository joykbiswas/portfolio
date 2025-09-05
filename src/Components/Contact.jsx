import Swal from "sweetalert2";

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
        title: "Success!",
        text: "Your message has been successfully sent.",
        icon: "success",
        confirmButtonText: "Okay",
      });
      form.reset();
    }
  };

  return (
    <section
      
      id="contact"
      className="py-20 text-white "
    >
      
      
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-4xl font-bold">Let's get in touch</h3>
            <p className="text-lg leading-relaxed">
              I enjoy discussing new projects and design challenges. Please share
              as much info as possible so we can get the most out of our first
              catch-up.
            </p>
            <div className="space-y-4 text-xl">
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-blue-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-3.31 0-6 2.69-6 6h12c0-3.31-2.69-6-6-6Z" />
                </svg>
                <p>Khulna shador, Khulna, Bangladesh</p>
              </div>
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-blue-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884 10 9.882l8-3.998A3.001 3.001 0 0 0 15 3H7a3 3 0 0 0-4.997 2.884Z" />
                  <path d="m2 7.516 6.345 3.172c1.782.891 3.655.891 5.437 0L20 7.516v8.421c0 2.228-1.77 4.025-3.987 4.063H5.987A4.004 4.004 0 0 1 2 15.937V7.516Z" />
                </svg>
                <a
                  href="mailto:joykumarbiswas@gmail.com"
                  className="hover:underline"
                >
                  joykumarbiswas@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-blue-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14H9v-2h4v2zm2-4H9V8h6v4z" />
                </svg>
                <p>+8801744293156</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="number" className="block text-sm font-medium mb-1">
                  Number
                </label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  placeholder="+8801..."
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-blue-500 transition-colors"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-4 mt-4 font-bold rounded-md bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;