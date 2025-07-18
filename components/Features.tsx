
import { FaTruck, FaExchangeAlt, FaLock } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

        {/* Free Delivery */}
        <div>
          <FaTruck className="text-5xl mx-auto mb-4 text-black" />
          <h3 className="text-lg font-semibold text-gray-900">Free Standard Delivery</h3>
        </div>

        {/* Easy Exchange */}
        <div>
          <FaExchangeAlt className="text-5xl mx-auto mb-4 text-black" />
          <h3 className="text-lg font-semibold text-gray-900">Easy Exchange & Returns</h3>
        </div>

        {/* Secure Checkout */}
        <div>
          <FaLock className="text-5xl mx-auto mb-4 text-black" />
          <h3 className="text-lg font-semibold text-gray-900">100% Secure Checkout</h3>
        </div>
      </div>
    </section>
  );
};

export default Features;
