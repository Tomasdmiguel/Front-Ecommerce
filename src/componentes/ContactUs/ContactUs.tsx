import React from "react";

const ContactUs: React.FC = ():React.ReactElement => {
  return (
    <div className="max-w-2xl mx-auto p-4 md:p-6">
      <h1 className="text-3xl font-bold mb-4 text-center md:text-left">Contact</h1>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-center md:text-left">¡Where do we meet!</h2>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.9731955818015!2d-59.13621802331021!3d-37.31946260595145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911f8e63529925%3A0x5dee673d85a7a028!2sAv.%20Col%C3%B3n%20992%2C%20B7000%20Tandil%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1715630334729!5m2!1ses-419!2sar"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          className="w-full h-64 md:h-96 mb-6"></iframe>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-center md:text-left">Email</h2>
        <p className="text-center md:text-left">
          <a
            href="mailto:contacto@tuempresa.com"
            className="text-blue-500 hover:underline">
            contacto@tuempresa.com
          </a>
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-center md:text-left">Phone</h2>
        <p className="text-center md:text-left">
          <a href="tel:+1234567890" className="text-blue-500 hover:underline">
            +1 (234) 567-890
          </a>
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-center md:text-left">Social networks</h2>
        <p className="text-center md:text-left">
          <a
            href="https://www.facebook.com/tuempresa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline">
            Facebook
          </a>
          <br />
          <a
            href="https://www.twitter.com/tuempresa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline">
            Twitter
          </a>
          <br />
          <a
            href="https://www.instagram.com/tuempresa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline">
            Instagram
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
//