import { useState } from "react";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import CustomerReviews from "../pages/Home/CustomerReviews";
import Modal from "react-modal";
import { FaCogs, FaLightbulb, FaRulerCombined, FaCertificate } from "react-icons/fa";

const officeGallery = [
  { type: "image", src: "https://8upload.com/image/685d1590c5f8c/IMG-20250625-WA0036.jpg" },
  { type: "video", src: "https://streamable.com/e/3kuz0c" },
  { type: "image", src: "https://8upload.com/image/685d17ee801b8/IMG-20250625-WA0029.jpg" },
  { type: "video", src: "https://streamable.com/e/477uaw" },
  { type: "image", src: "https://8upload.com/image/685d17eead8bb/IMG-20250625-WA0030.jpg" },
 { type: "video", src: "https://streamable.com/e/ctn42t" },
];
Modal.setAppElement('#root');

const BlindsVertical = () => {
  const [modalMedia, setModalMedia] = useState(null);

  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-[#fdfbf9] dark:bg-gray-900">
      {/* SEO Meta Title */}
      <PageTitle title="Vertical Blinds | Curtains Furniture Qatar | Office Window Blinds & Fitout" />

      {/* Hero Banner */}
      <ParallaxSection
        imagePath="https://8upload.com/image/685d046c35074/WhatsApp_Image_2025-06-24_at_22.51.32_e8609b51.jpg"
        title="Vertical Blinds"
        subTitle="Sleek, Functional & Corporate-Ready"
      />

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A342E] dark:text-white mb-6">
          Modern Vertical Blinds for Professional Interiors
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Stylish and versatile, our vertical blinds are ideal for controlling light and adding structure to your office environment. Perfect for conference rooms, clinics, executive spaces, and reception areas.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-[#f5f0e8] dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaRulerCombined size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Custom Fit",
              desc: "Made-to-measure panels ensure exact alignment and smooth functionality.",
            },
            {
              icon: <FaLightbulb size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Light Control",
              desc: "Adjustable vertical slats offer full control over light and privacy levels.",
            },
            {
              icon: <FaCogs size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Low Maintenance",
              desc: "Durable fabrics that are easy to clean, resistant to dust and moisture.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow hover:shadow-lg transition"
            >
              {icon}
              <h3 className="text-xl font-semibold mb-2 text-[#4A342E] dark:text-white">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      
        {/* Gallery */}
                 <section className="max-w-7xl mx-auto px-6 py-20">
                   <h3 className="text-3xl font-bold text-center text-[#4A342E] dark:text-white mb-8">
                     Roller Blinds Gallery
                   </h3>
                   <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                     See examples of our recent roller blinds installations in offices and commercial buildings throughout Qatar.
                   </p>
                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                     {officeGallery.map((media, index) => {
                       const isObject = typeof media === "object";
                       const type = isObject ? media.type : "image";
                       const src = isObject ? media.src : media;
           
                       return (
                         <button
                           key={index}
                           onClick={() => setModalMedia({ type, src })}
                           className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                         >
                           {type === "image" ? (
                             <img
                               src={src}
                               alt={`Media ${index + 1}`}
                               className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                             />
                           ) : (
                             <div className="w-full h-64 overflow-hidden">
                               <iframe
                                 src={src}
                                 title={`Video ${index + 1}`}
                                 className="w-full h-full"
                                 frameBorder="0"
                                 allow="autoplay; fullscreen"
                                 allowFullScreen
                               />
                             </div>
                           )}
                         </button>
                       );
                     })}
                   </div>
           
                   {/* Modal */}
                   <Modal
                     isOpen={!!modalMedia}
                     onRequestClose={() => setModalMedia(null)}
                     contentLabel="Media Preview"
                     className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-75 z-50"
                     overlayClassName="fixed inset-0 bg-black bg-opacity-60"
                   >
                     <div className="bg-white dark:bg-gray-900 rounded-xl p-4 max-w-3xl max-h-[90vh] overflow-auto relative">
                       <button
                         className="absolute top-4 right-4 text-black dark:text-white text-xl"
                         onClick={() => setModalMedia(null)}
                       >
                         ✕
                       </button>
                       {modalMedia && (
                         modalMedia.type === "image" ? (
                           <img src={modalMedia.src} alt="Preview" className="max-w-full max-h-[80vh] rounded-xl" />
                         ) : (
                           <div className="w-full h-[80vh] overflow-hidden">
                             <iframe
                               src={modalMedia.src}
                               title="Video Preview"
                               className="w-full h-full rounded-xl"
                               frameBorder="0"
                               allow="autoplay; fullscreen"
                               allowFullScreen
                             />
                           </div>
                         )
                       )}
                     </div>
                   </Modal>
                 </section>
     

      {/* Customer Reviews */}
      <CustomerReviews />

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-[#f2ede8] dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#4A342E] dark:text-white mb-6">
            Why Curtains Furniture?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            We deliver expert window treatments backed by quality assurance, fast execution, and unbeatable service throughout Qatar.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Site Visit & Assessment", desc: "Our team visits your space and provides tailored recommendations." },
              { title: "Rapid Delivery & Installation", desc: "Installed within 48 hours of measurement approval." },
              { title: "Commercial Rates", desc: "Special discounts for corporate and bulk orders." },
            ].map(({ title, desc }, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
                <h3 className="font-semibold text-lg text-[#6B4226] dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            ))}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow flex items-center gap-3">
              <FaCertificate className="text-[#6B4226]" size={24} />
              <div>
                <h3 className="font-semibold text-lg text-[#6B4226] dark:text-white">Quality Certified</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  All materials meet ISO and Qatari building compliance standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's Upgrade Your Office Aesthetics
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Contact us now for professional consultation, custom design ideas, and seamless setup.
        </p>
        <a
         href="https://wa.me/97466280037"
          className="inline-block bg-white text-[#4A342E] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Contact via WhatsApp
        </a>
      </section>
    </div>
  );
};

export default BlindsVertical;
