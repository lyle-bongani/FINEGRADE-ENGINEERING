import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!form.name || !form.email || !form.message) return;
    // For now we log and offer mailto fallback; can be wired to backend later
    // eslint-disable-next-line no-console
    console.log('Contact submission:', form);
    setSubmitted(true);
  };

  const mailtoHref = `mailto:sales@appliedcontrols.co.zw?subject=Contact%20Request%20-%20${encodeURIComponent(
    form.company || 'No Company'
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCompany: ${form.company}\n\nMessage:\n${form.message}`
  )}`;

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-blue-50 border-b border-blue-100 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-500">Contact Us</h1>
          <p className="mt-3 text-gray-700 max-w-2xl">
            Let’s discuss your project or service needs. Our team will get back to you promptly.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-5 gap-10">
          {/* Left: Details */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-blue-500">Head Office</h2>
              <p className="mt-2 text-gray-700">161 Gleneagles Road, Southerton, Harare</p>
            </div>
            <div className="space-y-1 text-gray-700">
              <p><span className="font-semibold text-blue-500">Email:</span> sales@appliedcontrols.co.zw</p>
              <p><span className="font-semibold text-blue-500">Sales Hotline:</span> (+263) 242 661 304</p>
            </div>
            <div className="rounded-2xl border border-blue-100 overflow-hidden">
              <iframe
                title="Map to 161 Gleneagles Road, Southerton, Harare"
                className="w-full h-80 md:h-96"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=161%20Gleneagles%20Road%2C%20Southerton%2C%20Harare&output=embed"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-2xl border border-blue-100 shadow-sm p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-blue-500">Send us a message</h2>
              {!submitted ? (
                <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit} noValidate>
                  <div className="md:col-span-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name *</label>
                    <input
                      id="name" name="name" type="text" required value={form.name} onChange={onChange}
                      className="mt-1 w-full rounded-md border border-blue-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                    <input
                      id="email" name="email" type="email" required value={form.email} onChange={onChange}
                      className="mt-1 w-full rounded-md border border-blue-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      id="phone" name="phone" type="tel" value={form.phone} onChange={onChange}
                      className="mt-1 w-full rounded-md border border-blue-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                    <input
                      id="company" name="company" type="text" value={form.company} onChange={onChange}
                      className="mt-1 w-full rounded-md border border-blue-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message *</label>
                    <textarea
                      id="message" name="message" required rows={5} value={form.message} onChange={onChange}
                      className="mt-1 w-full rounded-md border border-blue-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="md:col-span-2 flex items-center gap-3 mt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md px-5 py-2 transition"
                    >
                      Send Message
                    </button>
                    <a
                      href={mailtoHref}
                      className="text-blue-500 font-semibold border-b-2 border-blue-500 pb-0.5 hover:border-blue-700"
                    >
                      or email us directly
                    </a>
                  </div>
                </form>
              ) : (
                <div className="mt-6">
                  <p className="text-green-700 font-semibold">Thanks! Your message has been noted.</p>
                  <p className="text-gray-700 mt-1">We’ll get back to you shortly. You can also reach us at <a className="text-blue-500 underline" href="mailto:sales@appliedcontrols.co.zw">sales@appliedcontrols.co.zw</a>.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;