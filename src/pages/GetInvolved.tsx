import { useState } from "react";
import {
  Building2,
  ShoppingCart,
  Users,
  Heart,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle,
  Play,
  Share2,
  FacebookIcon,
  InstagramIcon,
} from "lucide-react";

const GetInvolved = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const partnershipOptions = [
    {
      icon: Building2,
      title: "Become a Corporate Sponsor",
      description:
        "Align your brand with a powerful cause. Sponsor a student's training or place a bulk order for uniforms and merchandise for your staff.",
      contact: "partnerships@zandainitiative.com",
      image:
        "https://www.shutterstock.com/image-photo/close-two-business-people-shaking-600nw-2172227403.jpg",
      benefits: ["Brand visibility", "CSR impact", "Tax benefits"],
    },
    {
      icon: ShoppingCart,
      title: "Place an Order",
      description:
        "Do you need high-quality bags, uniforms, or custom sewn products for your school, company, or hotel? Your purchase directly funds our students' education.",
      contact: "orders@zandainitiative.com",
      image:
        "https://thumbs.dreamstime.com/b/order-now-cursor-icon-glossy-green-round-button-isolated-abstract-illustration-88077183.jpg",
      benefits: ["Quality products", "Direct impact", "Custom designs"],
    },
    {
      icon: Users,
      title: "Provide Pro-Bono Services",
      description:
        "We welcome support from marketers, developers, and business mentors to help us grow and improve our programs.",
      contact: "info@zandainitiative.com",
      image:
        "https://homenetworkofafrica.org/wp-content/uploads/2025/05/tw-pro-bono-920x576-1.webp",
      benefits: [
        "Skill sharing",
        "Network building",
        "Meaningful contribution",
      ],
    },
  ];

  const impactStats = [
    { number: "50+", label: "Women Annually" },
    { number: "85%", label: "Employment Rate" },
    { number: "100%", label: "Skills Certification" },
    { number: "5+", label: "Partner Organizations" },
  ];

  const videos = [
    {
      id: 1,
      title: "Meet Our Students",
      thumbnail:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "Impact Stories",
      thumbnail:
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  const DonationModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black/50bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
          >
            ✕
          </button>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-green-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Make a Donation
            </h3>
            <p className="text-gray-600 mb-6">
              Your contribution helps empower young women with skills for life.
            </p>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">
                  Bank Transfer
                </p>
                <p className="text-sm text-gray-600">
                  Account: Zanda Initiative
                </p>
                <p className="text-sm text-gray-600">Bank: Bank of Kigali</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Mobile Money</p>
                <p className="text-sm text-gray-600">MTN: +250 780 162 164</p>
              </div>
            </div>
            <a
              href="mailto:info@zandainitiative.com"
              className="mt-6 inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
            >
              <Mail size={16} className="mr-2" />
              Contact for more options
            </a>
          </div>
        </div>
      </div>
    );
  };

  const VideoModal = ({ video, onClose }) => {
    if (!video) return null;

    return (
      <div
        className="fixed inset-0 bg-black/50bg-opacity-90 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
          >
            ✕
          </button>
          <iframe
            className="w-full aspect-video rounded-lg"
            src={video.url}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(22, 163, 74, 0.9), rgba(21, 128, 61, 0.9)), url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-2 bg-white bg-opacity-20 rounded-full">
            <span className="text-green-800 font-semibold">
              Join Our Mission
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Be a Part of Her
            <br />
            New Beginning
          </h1>
          <p className="text-xl text-green-50 max-w-3xl mx-auto mb-8 leading-relaxed">
            Join our mission to empower marginalized young women and create
            lasting change in Rwanda
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setIsDonationModalOpen(true)}
              className="bg-white text-green-600 px-8 py-4 rounded-full font-bold hover:bg-green-50 transition-all shadow-lg hover:shadow-xl inline-flex items-center group"
            >
              <Heart size={20} className="mr-2" />
              Donate Now
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </button>
            <a
              href="mailto:info@zandainitiative.com"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-green-600 transition-all inline-flex items-center"
            >
              <Mail size={20} className="mr-2" />
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See Our Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch stories of transformation and hope from our community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                onClick={() => setSelectedVideo(video)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50bg-opacity-40 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                  <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play
                      className="text-green-600 ml-1"
                      size={28}
                      fill="currentColor"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-white font-bold text-xl">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Partner With Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the way you'd like to make an impact and join our community
              of change-makers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={option.image}
                    alt={option.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <option.icon className="text-white" size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {option.description}
                  </p>
                  <div className="mb-4 space-y-2">
                    {option.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <CheckCircle
                          size={16}
                          className="text-green-600 mr-2 flex-shrink-0"
                        />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={`mailto:${option.contact}`}
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold group"
                  >
                    <Mail size={16} className="mr-2" />
                    Contact Us
                    <ArrowRight
                      size={16}
                      className="ml-1 group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80"
                alt="Women learning tailoring"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900 to-transparent opacity-40"></div>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Heart className="text-green-600" size={32} />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Make a Donation
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Your financial contribution directly fuels our mission. The
                8,500,000 RWF grant we are seeking will allow us to scale our
                impact, rent a proper workshop, purchase equipment, and launch
                our digital platform to serve over 50 women annually.
              </p>
              <div className="bg-green-50 rounded-xl p-6 mb-8">
                <h4 className="font-bold text-gray-900 mb-3">
                  Your donation helps provide:
                </h4>
                <ul className="space-y-2">
                  {[
                    "Professional training for marginalized women",
                    "Quality equipment and materials",
                    "Safe workshop environment",
                    "Business development support",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <CheckCircle
                        size={20}
                        className="text-green-600 mr-2 flex-shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => setIsDonationModalOpen(true)}
                className="bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:bg-green-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center group"
              >
                <Heart size={20} className="mr-2" />
                Donate Now
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-800 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Share2 size={48} className="mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl font-bold mb-6">Spread the Word</h2>
          <p className="text-xl text-green-50 mb-10 max-w-2xl mx-auto leading-relaxed">
            Follow us on social media, share our story, and help us break the
            stigma. Awareness is the first step toward change.
          </p>
          <div className="flex justify-center space-x-6 mb-10">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white bg-opacity-20 backdrop-blur rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all transform hover:scale-110"
            >
              <span className="text-green-800 text-2xl font-bold"><FacebookIcon /></span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white bg-opacity-20 backdrop-blur rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all transform hover:scale-110"
            >
              <span className="text-green-800 text-2xl font-bold"><InstagramIcon/></span>
            </a>
            <a
              href="https://wa.me/250780162164"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white bg-opacity-20 backdrop-blur rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all transform hover:scale-110"
            >
              <Phone className="text-green-800" size={24} />
            </a>
          </div>
          <p className="text-green-100 text-sm">
            Use #ZandaInitiative to share your support
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-10 text-gray-300 leading-relaxed">
            Get in touch with us to discuss how you can contribute to our
            mission and transform lives.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:info@zandainitiative.com"
              className="bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:bg-green-700 transition-all inline-flex items-center justify-center group"
            >
              <Mail size={20} className="mr-2" />
              Email Us
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="tel:+250780162164"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-gray-900 transition-all inline-flex items-center justify-center"
            >
              <Phone size={20} className="mr-2" />
              Call Us: +250 780 162 164
            </a>
          </div>
        </div>
      </section>

      {/* Modals */}
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
};

export default GetInvolved;
