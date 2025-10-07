const About = () => {
  return (
    <div className="flex justify-center items-center">
      <section className="min-h-screen px-4 py-14 text-black font-sans">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 blur-3xl opacity-30 rounded-full" />
            <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 mb-4">About Royal Store</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 rounded-full" />
            <p className="text-lg text-gray-800 relative z-10">
              From a small idea to a leading online shopping destination — Royal Store has been delivering the latest products, seamless experiences, and trusted service since 2015. We don’t just sell products; we create shopping journeys that shape the future of retail.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="glass-effect shimmer rounded-xl p-8 feature-card">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-rocket text-blue-400 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Our Journey</h3>
              <p className="text-gray-700">
                Royal Store began in 2015 with a vision to make shopping smarter, easier, and more enjoyable. Today, we’re a hub of innovation, technology, and customer satisfaction. Our mission is simple: to offer the best products and experiences for every shopper.
              </p>
              <p className="text-gray-700 mt-4">
                Every project we launch aims to elevate your shopping experience. Our solutions are more than just tools — they’re the spark behind your next great purchase.
              </p>
            </div>
            <div className="glass-effect shimmer rounded-xl p-8 feature-card">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-lightbulb text-purple-400 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">How We Work</h3>
              <p className="text-gray-700">
                Innovation drives Royal Store. Every feature and product is designed to inspire, challenge, and transform your shopping experience. Our expert team is always pushing boundaries to deliver more value.
              </p>
              <p className="text-gray-700 mt-4">
                Whether we’re perfecting the smallest detail or launching something new, our focus is always on quality, performance, and customer happiness. We don’t just follow trends — we set them.
              </p>
            </div>
          </div>
          <div className="glass-effect shimmer rounded-xl p-8 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4">
                <div className="text-4xl font-bold text-blue-400 mb-2">8+</div>
                <div className="text-gray-700">Years of Experience</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-blue-400 mb-2">50k+</div>
                <div className="text-gray-700">Happy Customers</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-700">Uptime</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-gray-700">Support</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-effect shimmer rounded-xl p-8 feature-card">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400/20 to-indigo-600/20 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-clock text-indigo-400 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">The Future of Shopping</h3>
              <p className="text-gray-700">
                The future of retail is limitless, and so is our vision. As Royal Store grows, we’re more determined than ever to shape what’s next in online shopping. Our team is always innovating, researching, and collaborating.
              </p>
              <p className="text-gray-700 mt-4">
                We don’t just build software; we create experiences. Our focus is on next-generation shopping tools that empower customers, streamline buying, and deliver the future of e-commerce.
              </p>
            </div>
            <div className="glass-effect shimmer rounded-xl p-8 feature-card">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-check-circle text-green-400 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Why Choose Us?</h3>
              <p className="text-gray-700">
                In a fast-changing retail world, Royal Store offers more than just products — we offer partnership. We understand the competitive, fast-paced, and ever-evolving nature of online shopping.
              </p>
              <p className="text-gray-700 mt-4">
                Whether you’re a customer looking for the best deals or a seller wanting to reach more buyers, we’re here for you. Our platform is designed to help you shop smarter, sell better, and enjoy every moment.
              </p>
            </div>
          </div>
          <div className="glass-effect shimmer rounded-xl p-8 mt-16">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">Our Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-shield-alt text-blue-400 text-xl" />
                </div>
                <h4 className="text-lg font-semibold text-black mb-2">Security</h4>
                <p className="text-gray-700 text-sm">We protect your data and privacy with the latest security measures.</p>
              </div>
              <div className="text-center p-4">
                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-tachometer-alt text-purple-400 text-xl" />
                </div>
                <h4 className="text-lg font-semibold text-black mb-2">Performance</h4>
                <p className="text-gray-700 text-sm">Our platform is optimized for speed, reliability, and a seamless shopping experience.</p>
              </div>
              <div className="text-center p-4">
                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-headset text-green-400 text-xl" />
                </div>
                <h4 className="text-lg font-semibold text-black mb-2">Support</h4>
                <p className="text-gray-700 text-sm">Our dedicated team is always ready to help you with any questions or issues.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;