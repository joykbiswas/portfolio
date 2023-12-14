import Swal from "sweetalert2";

const Contact = () => {
  const handleSubmit= e =>{
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;
    const email = form.email.value;
    const message = form.message.value;

    const contact = {name, number, email, message} 


    if(contact){
      Swal.fire({
        title: 'success!',
        text: 'user added coffee successfully',
        icon: 'success',
        confirmButtonText: 'Add'
      })
    }



    // fetch('http://localhost:5000/user',{
    //   method: 'POST',
    //   headers:{
    //     'content-type': 'application/json'
    //   },
    //   body:JSON.stringify(contact)
    // })
    // .then(res =>res.json())
    // .then(data =>{
    //   console.log(data);
      
    // })
  }
  return (
    <div id="contact" className=" bg-slate-100 m-4">
      <h1 className="text-6xl font-bold text-center py-14">Contact Me</h1>
      <div className=" md:flex gap-16 max-w-7xl mx-auto">
        <div className="flex-1 space-y-10">
          <h3 className="text-5xl font-bold ">Let is get in touch</h3>
          <p className="text-2xl">
            I enjoy discussing new projects and design challenges. Please share
            as much info, as possible so we can get the most out of our first
            catch-up.
          </p>
          <div className="text-2xl">
            <h4>Living In:</h4>
            <p>Khulna shador, khulna, Bangladesh</p>
            <h4 className="pt-4">Call:</h4>
            <p>01744293156</p>
          </div>
        </div>
        {/* form section */}
        <div className="flex-1">
          <form onSubmit={handleSubmit}
           className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className=" border-b-2 border-black p-3"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Number</span>
              </label>
              <input
                type="text"
                name="number"
                placeholder="+8801..."
                className=" border-b-2 border-black p-3"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className=" border-b-2 border-black p-3"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <input
                type="message"
                name="message"
                placeholder="Message"
                className=" border-b-2 border-black p-3"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
/*
<div className=" m-5  p-6">
            <div className="mb-4 flex-row md:flex">
              
            </div>
            <div className="form-control  space-y-4 ">
              <input
                type="text"
                placeholder="Name"
                className=" border-b-2 border-black p-3"
                required
              />
              
              <input
                type="text"
                placeholder=" Number"
                className=" border-b-2 border-black p-3"
                required
              />
              <input
                type="text"
                placeholder="Email Address"
                className=" border-b-2 border-black p-3"
                required
              />
              
              <input
                type="text"
                placeholder="Message"
                className=" border-b-2 border-black p-6"
                required
              />
            </div>
            <button className="p-3 m-5 font-bold bg-black  text-white text-xl hover:bg-slate-800">
              Send Message
            </button>
          </div>
*/
