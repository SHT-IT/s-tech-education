"use client";

const SHTMap = () => {
  return (
    <div className="w-full bg-zinc-100  flex flex-col items-center justify-center p-6">
      {/* Heading Section */}
      <div className="text-center mb-6 p-4 rounded-lg">
        <h1 className="rs-shop-header text-3xl sm:text-4xl font-bold text-center">
        Find Us at S-Tech Educations
        </h1>
        <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
          Visit our store location in the heart of Maharashtra
        </p>
      </div>

      {/* Map Section */}
      <div className="w-full max-w-6xl h-[500px] shadow-lg rounded-2xl overflow-hidden border border-gray-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7497.2860322137885!2d73.843138!3d20.023492!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddc176d17d725d%3A0x95a131bfe5d0a453!2sSHT%20IT%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1767865328341!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>

        
      </div>
    </div>
  );
};

export default SHTMap;

