import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Instagram,
  Twitter,
  Facebook,
  Globe,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="w-full mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-red-500 font-bold text-xl">LOGO</div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6">
            <a href="/" className="font-medium text-sm hover:text-gray-600">
              HOME
            </a>
            <a
              href="/discovery"
              className="font-medium text-sm hover:text-gray-600"
            >
              DISCOVERY
            </a>
            <a
              href="/photos"
              className="font-medium text-sm hover:text-gray-600"
            >
              PHOTOS
            </a>
            <a
              href="/contact"
              className="font-medium text-sm hover:text-gray-600"
            >
              CONTACT
            </a>
          </nav>
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src=""
              alt="User avatar"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
        </div>
      </header>

      <main className="flex-1 bg-gray-100">
        {/* Main Content with Hero and More News side by side */}
        <div className="w-full mx-auto bg-white">
          <div className="grid md:grid-cols-3 gap-0">
            {/* Main section */}
            <section className="relative h-[500px] md:col-span-2">
              <img
                src="https://picsum.photos/1200/500"
                alt="Mountain landscape"
                fill
                className="object-cover h-[500px] w-[1200px]"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 flex flex-col justify-center p-6 lg:px-[150px]">
                <div className="text-white">
                  <div className="uppercase tracking-wider text-2xl font-medium mb-8 inline-block">
                    World News
                  </div>
                  <div className="w-full border-b-2 border-white/100 inline-block mb-8"></div>
                  <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-8">
                    Amazing places in America to visit.
                  </h1>
                  <p className="mb-6 text-white/90 text-sm md:text-base">
                    For some reason — this country, this city, this
                    neighborhood, this particular street — is the place you are
                    living a majority of your life in.
                  </p>
                  <button className="btn-primary uppercase transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </section>

            {/* More News Section */}
            <section className="md:col-span-1 m-auto p-4 lg:px-16">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">MORE NEWS</h2>
                <div className="flex gap-2">
                  <button className="w-8 h-8 text-gray-400  flex items-center justify-center">
                    <ChevronLeft size={18}/>
                  </button>
                  <button className="w-8 h-8  flex items-center justify-center">
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
              <div className="w-full border-b-2 border-gray-200 inline-block mb-8"></div>
              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="txt-primary text-sm font-semibold">TRAVEL</div>
                  <h3 className="font-bold">Article title</h3>
                  <p className="text-gray-400 text-sm">
                    Lorem ipsum dolor sit amet, ipsum labore luctus mel et, ad
                    has appareat.
                  </p>
                  <div className="flex items-center text-gray-400 text-sm italic">
                    <Clock size={14} className="mr-1" />
                    <span>2 min ago</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="txt-primary text-sm font-semibold">
                    TECHNOLOGY
                  </div>
                  <h3 className="font-bold">Article title</h3>
                  <p className="text-gray-400 text-sm">
                    Lorem ipsum dolor sit amet, ipsum labore luctus mel et, ad
                    has appareat.
                  </p>
                  <div className="flex items-center text-gray-400 text-sm italic">
                    <Clock size={14} className="mr-1" />
                    <span>2 min ago</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Trending Section */}
        <section className=" max-w-6xl mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">TRENDING</h2>
            <div className="flex gap-2">
              <button className="w-8 h-8 text-gray-400 flex items-center justify-center">
                <ChevronLeft size={18} />
              </button>
              <button className="w-8 h-8  flex items-center justify-center">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-md overflow-hidden bg-white">
                <div className="max-h-48 relative">
                  <img
                    src="https://picsum.photos/500/220"
                    alt="Trending article"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="px-8 py-12">
                  <h3 className="font-bold mb-2">
                    {item === 1
                      ? "Dolore magna aliqua"
                      : "Morbi eleifend a libero"}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Lorem ipsum dolor sit amet, ipsum labore luctus mel et, ad
                    has appareat.
                  </p>
                  <div className="flex items-center text-gray-400 text-sm italic">
                    <Clock size={14} className="mr-1" />
                    <span>
                      {item === 1 ? "2h" : item === 2 ? "1h" : "3h"} ago
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Happening Now Section */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">HAPPENING NOW</h2>
            <div className="flex gap-2">
              <button className="w-8 h-8 text-gray-400 flex items-center justify-center">
                <ChevronLeft size={18} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              {/* Large Article 1 */}
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src="https://picsum.photos/900"
                  alt="Golden Gate Bridge"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-gray-200 px-3 py-1 text-xs font-medium rounded">
                  CITY
                </div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Large article title
                  </h3>
                  <p className="text-white/80 mb-3">
                    Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam
                    detracto, vidit vituperatoribus duo id. Affert detraxit
                    voluptatum vis eu, inermis eloquentiam.
                  </p>
                  <div className="flex items-center text-white/60 text-sm italic">
                    <Clock size={14} className="mr-1" />
                    <span>2m ago</span>
                  </div>
                </div>
              </div>

              {/* Large Article 2 */}
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src="https://picsum.photos/900"
                  alt="Forest path"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-gray-200 px-3 py-1 text-xs font-medium rounded">
                  TRAVEL
                </div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    Large article title
                  </h3>
                  <p className="text-white/80 mb-3">
                    Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam
                    detracto, vidit vituperatoribus duo id. Affert detraxit
                    voluptatum vis eu, inermis eloquentiam.
                  </p>
                  <div className="flex items-center text-white/60 text-sm italic">
                    <Clock size={14} className="mr-1" />
                    <span>2m ago</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex flex-col">
                  <div className="h-48 relative rounded-lg overflow-hidden mb-3">
                    <img
                      src="https://picsum.photos/500"
                      alt="Small article"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold mb-1">Small title</h3>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Clock size={12} className="mr-1" />
                    <span>3h ago by </span>
                    <span className="text-gray-600 ml-1">Author</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-400 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            <div>
              <div className="text-white font-bold text-xl mb-4">LOGO</div>
            </div>
            <div>
              <h4 className="font-medium mb-3">Pages</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/discovery" className="hover:underline">
                    Discovery
                  </a>
                </li>
                <li>
                  <a href="/photos" className="hover:underline">
                    Photos
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Help</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Other</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="hover:underline">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Advertise
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30">
                  <Instagram size={16} />
                </button>
                <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30">
                  <Twitter size={16} />
                </button>
                <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30">
                  <Facebook size={16} />
                </button>
                <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30">
                  <Globe size={16} />
                </button>
              </div>
              <div className="text-sm">
                <p>Stay in touch with the latest posts</p>
                <div className="flex mt-2">
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-3 py-2 text-gray-800 rounded-l-md w-full text-sm"
                  />
                  <button className="bg-white/20 px-3 py-2 rounded-r-md hover:bg-white/30">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-sm border-t border-white/20 pt-6">
            © 2023 All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
