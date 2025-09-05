
import bg from "../assets/round1.webp";
const Resume = () => {
  return (
    <div className="">
        <div id="resume" className="max-w-7xl mx-auto my-12 py-8 ">
        
      <div className="m-4">
        <h1 className="text-5xl  max-sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          A Summary of My Resume
        </h1>
      </div>
      <div className="md:flex gap-8 m-3">
        {/* Experience Section */}
        <div className="flex-1 space-y-6 mt-5 md:mt-0">
          <h2 className="text-4xl max-sm:text-3xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
            
            {/* Experience Cards */}
            <div className="space-y-8">
              <div className="relative flex items-start space-x-6 group hover:scale-105 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center z-10 border-4 border-gray-900">
                  <span className="text-white font-bold text-lg">💼</span>
                </div>
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Web Developer (Contract)</h3>
                  <p className="text-blue-400 font-semibold text-lg mb-2">Nov 2024 - Present</p>
                  <h4 className="text-gray-300 text-xl">Codexign</h4>
                </div>
              </div>

              <div className="relative flex items-start space-x-6 group hover:scale-105 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center z-10 border-4 border-gray-900">
                  <span className="text-white font-bold text-lg">🚀</span>
                </div>
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg hover:shadow-green-500/25 transition-all duration-300 flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Frontend Web Developer (Intern)</h3>
                  <p className="text-green-400 font-semibold text-lg mb-2">Mar 2024 - Oct 2024</p>
                  <h4 className="text-gray-300 text-xl">The Tann Mann Gaadi</h4>
                </div>
              </div>

              <div className="relative flex items-start space-x-6 group hover:scale-105 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center z-10 border-4 border-gray-900">
                  <span className="text-white font-bold text-lg">🎯</span>
                </div>
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Jr. Frontend Developer (Intern)</h3>
                  <p className="text-purple-400 font-semibold text-lg mb-2">Oct 2023 - Feb 2024</p>
                  <h4 className="text-gray-300 text-xl">Flex Softr</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="flex-1 space-y-6">
          <h3 className="text-4xl max-sm:text-3xl font-bold text-white mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Education
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500 rounded-full"></div>
            
            {/* Education Cards */}
            <div className="space-y-8">
              <div className="relative flex items-start space-x-6 group hover:scale-105 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center z-10 border-4 border-gray-900">
                  <span className="text-white font-bold text-lg">🎓</span>
                </div>
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Bsc in Botanical Science</h3>
                  <p className="text-yellow-400 font-semibold text-lg mb-2">2021 - Present</p>
                  <p className="text-gray-300 text-xl">Govt. Sundarban Adarsha College, Khulna</p>
                </div>
              </div>

              <div className="relative flex items-start space-x-6 group hover:scale-105 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center z-10 border-4 border-gray-900">
                  <span className="text-white font-bold text-lg">📚</span>
                </div>
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Higher Secondary</h3>
                  <p className="text-indigo-400 font-semibold text-lg mb-2">2018 - 2020</p>
                  <p className="text-gray-300 text-xl">Satkhira Govt College, Science Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
      
    </div>
    </div>
  );
};

export default Resume;
