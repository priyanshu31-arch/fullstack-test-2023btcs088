import React,{useState} from "react"; 
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    admissionNo: '',
    phone: '',
    purpose: ''
  });
  
  const [status, setStatus] = useState('');
  const [isSuccess, setIsSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    setIsSuccess(null);

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Thank you for registering! Please check your email for confirmation.');
        setIsSuccess(true);
        setFormData({ name: '', email: '', admissionNo: '', phone: '', purpose: '' });
      } else {
        setStatus(`Error: ${data.message || 'Something went wrong.'}`);
        setIsSuccess(false);
      }
    } catch (error) {
        console.error("Submission Error:", error);
        setStatus('Error: Could not connect to the server. Please try again later.');
        setIsSuccess(false);
    }
    
    setTimeout(() => setStatus(''), 6000); 
  };

  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Register Your Interest</h2>
            <p className="text-gray-600 mt-3">Fill out the form below and we'll get back to you shortly.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="font-semibold text-gray-700 block pb-1">Full Name</label>
                <input id="name" name="name" className="border-gray-300 rounded-lg shadow-sm w-full p-3 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="email" className="font-semibold text-gray-700 block pb-1">Email Address</label>
                <input id="email" name="email" className="border-gray-300 rounded-lg shadow-sm w-full p-3 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="admissionNo" className="font-semibold text-gray-700 block pb-1">Admission No.</label>
                <input id="admissionNo" name="admissionNo" className="border-gray-300 rounded-lg shadow-sm w-full p-3 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="text" value={formData.admissionNo} onChange={handleChange} required/>
              </div>
               <div>
                <label htmlFor="phone" className="font-semibold text-gray-700 block pb-1">Phone Number</label>
                <input id="phone" name="phone" className="border-gray-300 rounded-lg shadow-sm w-full p-3 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" type="tel" value={formData.phone} onChange={handleChange} required />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="purpose" className="font-semibold text-gray-700 block pb-1">Purpose of Registering</label>
              <textarea id="purpose" name="purpose" className="border-gray-300 rounded-lg shadow-sm w-full p-3 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" rows="4" value={formData.purpose} onChange={handleChange} required></textarea>
            </div>
            <div className="mt-8">
              <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300">Submit Registration</button>
            </div>
             {status && (
                <p className={`mt-4 text-center p-3 rounded-lg ${isSuccess ? 'text-green-800 bg-green-100' : 'text-red-800 bg-red-100'}`}>
                    {status}
                </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
