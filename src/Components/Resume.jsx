const Resume = () => {
  return (
    <div className="bg-slate-100">
        <div id="resume" className="max-w-7xl mx-auto my-12 py-8">
      <div className="m-4">
        <h1 className="text-4xl font-bold text-center mb-10">
          A Summary of My Resume
        </h1>
      </div>
      <div className="md:flex gap-8 m-3">
      <div className="flex-1 space-y-5 mt-5 md:mt-0">
          <h2 className="text-3xl font-semibold">Experience</h2>
          <div className="border-l-2 border-yellow-600 space-y-4">
          <div className="text-2xl font-semibold ml-4 pl-2 bg-green-100">
              <h3>Frontend Web Developer (Intern)</h3>
              <p>Aug 2024 - Present</p>
              <h4>The Tann Mann Gaadi</h4>
              <p></p>
            </div>
            <div className="text-2xl font-semibold ml-4 pl-2 bg-green-100">
              <h3>Jr. Frontend Developer (Intern)</h3>
              <p>Oct 2023 - Feb 2024</p>
              <h4>Flex Softr</h4>
              <p></p>
            </div>
            
          </div>
        </div>
        <div className="flex-1 space-y-5   ">
          <h3 className="text-3xl font-semibold">Education</h3>
          <div className="border-l-2 border-yellow-600 space-y-4">
            <div className="text-2xl font-semibold ml-4 pl-2 bg-green-100">
              <h3>Bsc in Botanical science</h3>
              <p>2021 - Present</p>
              <p>Govt. Sundarban Adarsha College, Khulna</p>
            </div>
            <div className="text-2xl font-semibold ml-4 pl-2 bg-green-100">
              <h3>Higher Secondary</h3>
              <p>2018 - 2020</p>
              <p>Satkhira Govt College , Science Group</p>
            </div>
          </div>
        </div>

        
      </div>
      {/* my skills */}
      <div className="my-14 md:flex m-2 gap-16">
        <div className="flex-1">
          <h3 className="text-3xl font-semibold">My Skills</h3>
          <div className=" mt-8">
            <div className="flex justify-between text-xl">
              <h1>Next.js</h1>
              <p>80%</p>
            </div>
            <progress
              className="progress progress-warning "
              value="80"
              max="100"
            ></progress>
            
            <div className="flex justify-between text-xl">
              <h1>React JS</h1>
              <p>85%</p>
            </div>
            <progress
              className="progress progress-warning "
              value="85"
              max="100"
            ></progress>
            <div className="flex justify-between text-xl">
              <h1>Javascript</h1>
              <p>75%</p>
            </div>
            <progress
              className="progress progress-warning "
              value="75"
              max="100"
            ></progress>
            <div className="flex justify-between text-xl">
              <h1>Tailwind CSS</h1>
              <p>80%</p>
            </div>
            <progress
              className="progress progress-warning "
              value="80"
              max="100"
            ></progress>
            <div className="flex justify-between text-xl">
              <h1>HTML/CSS</h1>
              <p>85%</p>
            </div>
            <progress
              className="progress progress-warning "
              value="85"
              max="100"
            ></progress>
          </div>
        </div>

        <div className="flex-1">
          <div className=" mt-16">
            <div className="flex justify-between text-xl">
              <h1>Visual Studio Code</h1>
              <p>80%</p>
            </div>
            <progress
              className="progress progress-warning "
              value="80"
              max="100"
            ></progress>
            <div className="flex justify-between text-xl">
              <h1>Figma</h1>
              <p>80%</p>
            </div>
            <progress
              className="progress progress-warning "
              value="80"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Resume;
