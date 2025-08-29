import React from "react";

const GoogleMap = () => {
  return (
    <section className="w-full flex justify-center py-8 px-4">
      <div className="w-full max-w-7xl rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12241.259707504378!2d78.19275580593374!3d11.217255938060687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1693334444444!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default GoogleMap;
