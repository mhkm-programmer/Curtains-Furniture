import { useState } from "react";
import PageTitle from "../pages/reusable/PageTitle";
import ParallaxSection from "../pages/reusable/Parallax";
import CustomerReviews from "../pages/Home/CustomerReviews";
import Modal from "react-modal";
import { FaCogs, FaLightbulb, FaRulerCombined, FaCertificate } from "react-icons/fa";

const windowsCurtainsGallery = [
{ type: "image", src: "https://8upload.com/image/685f24621688c/IMG-20250625-WA0022.jpg" },
  { type: "video", src: "https://streamable.com/e/t2nkyv" },
  { type: "image", src: "https://8upload.com/image/685f246287121/IMG-20250625-WA0023.jpg" },
  { type: "video", src: "https://streamable.com/e/f1xvgq" },
  { type: "image", src: "https://8upload.com/image/685f2462d6bbb/IMG-20250625-WA0024.jpg" },
  { type: "video", src: "https://streamable.com/e/3er68t" },
];
Modal.setAppElement('#root');

const CurtainsWindows = () => {
  const [modalMedia, setModalMedia] = useState(null);

  return (
    <div className="font-sans text-gray-800 dark:text-gray-100 bg-[#fdfbf9] dark:bg-gray-900">
      {/* SEO Title */}
      <PageTitle title="Window Curtains in Qatar | Stylish & Custom | Curtains Furniture" />

      {/* Hero Section */}
      <ParallaxSection
        imagePath="https://8upload.com/image/685f23afa26f2/IMG-20250625-WA0012.jpg"
        title="Window Curtains Collection"
        subTitle="Stylish Drapes to Enhance Any Room"
      />

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A342E] dark:text-white mb-6">
          Beautiful Window Curtains for Every Space
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Our expertly crafted window curtains combine elegance and functionality to complement your décor. Choose from a wide selection of fabrics and styles tailored for homes, offices, and commercial spaces across Qatar.
        </p>
      </section>

      {/* Features */}
      <section className="bg-[#f5f0e8] dark:bg-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaRulerCombined size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Custom Measurements",
              desc: "Precision measuring ensures perfect fit and flawless installation for any window size.",
            },
            {
              icon: <FaLightbulb size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Light & Privacy Control",
              desc: "Select from sheer, semi-opaque, or blackout fabrics to create the perfect ambiance.",
            },
            {
              icon: <FaCogs size={36} className="mx-auto mb-4 text-[#6B4226]" />,
              title: "Smooth Functionality",
              desc: "Durable tracks and mechanisms for effortless, quiet operation day after day.",
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
    Recent Window Curtain Installations
  </h3>
  <p className="text-center text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
    Explore our recent projects showcasing elegant window curtains in homes, offices, and hospitality venues across Qatar.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {windowsCurtainsGallery.map((media, index) => (
      <button
        key={index}
        onClick={() => setModalMedia(media)}
        className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
        aria-label={`Open media ${index + 1}`}
      >
        {media.type === "image" ? (
          <img
            src={media.src}
            alt={`Window curtain ${index + 1}`}
            className="w-full h-64 object-cover transform hover:scale-105 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-64 bg-black overflow-hidden relative">
            <iframe
              src={media.src}
              title={`Window curtain video ${index + 1}`}
              className="w-full h-full object-cover"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        )}
      </button>
    ))}
  </div>

  <Modal
             isOpen={!!modalMedia}
             onRequestClose={() => setModalMedia(null)}
             contentLabel="Media Preview"
             // Ensure modal is above all elements
             className="fixed inset-0 flex items-center justify-center p-4 z-[9999]"
             overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-[9998]"
           >
             <div className="relative bg-white dark:bg-gray-900 rounded-xl p-4 max-w-4xl max-h-[90vh] w-full overflow-auto">
               
               {/* Close Button */}
               <button
                 onClick={() => setModalMedia(null)}
                 className="absolute top-4 right-4 text-2xl z-[10000] text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition"
                 aria-label="Close Modal"
               >
                 ✕
               </button>
           
               {/* Image or Video Preview */}
               {modalMedia && (
                 modalMedia.type === "image" ? (
                   <img
                     src={modalMedia.src}
                     alt="Media Preview"
                     className="max-w-full max-h-[80vh] mx-auto rounded"
                   />
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

      {/* Why Curtains Furniture */}
      <section className="py-20 px-6 bg-[#f2ede8] dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#4A342E] dark:text-white mb-6">
            Why Choose Curtains Furniture for Window Curtains?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            We provide expert consultation, custom design, and professional installation to deliver window curtains that perfectly match your style and needs.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Free Consultation & Measuring", desc: "Our team visits your location to take precise measurements and help you choose ideal fabrics and styles." },
              { title: "Fast & Reliable Installation", desc: "We ensure timely, high-quality stitching and installation within 3–4 working days." },
              { title: "Wide Fabric Range", desc: "Choose from luxurious silks, practical blends, and an array of colors to suit any décor." },
            ].map(({ title, desc }, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
                <h3 className="font-semibold text-lg text-[#6B4226] dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            ))}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow flex items-center gap-3">
              <FaCertificate className="text-[#6B4226]" size={24} />
              <div>
                <h3 className="font-semibold text-lg text-[#6B4226] dark:text-white">Premium Track Systems</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Durable, smooth-operating tracks that ensure long-lasting performance and silent functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#4A342E] text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Enhance Your Windows with Custom Curtains Today
        </h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Schedule your free consultation now and let our experts transform your windows anywhere in Qatar.
        </p>
        <a
         href="https://wa.me/97466280037"
          className="inline-block bg-white text-[#4A342E] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default CurtainsWindows;
