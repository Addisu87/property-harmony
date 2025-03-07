
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">PropertyHarmony</h3>
            <p className="text-sm text-gray-600">
              Your trusted partner in finding the perfect home.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/buy" className="text-sm text-gray-600 hover:text-gray-900">
                  Buy Property
                </Link>
              </li>
              <li>
                <Link to="/rent" className="text-sm text-gray-600 hover:text-gray-900">
                  Rent Property
                </Link>
              </li>
              <li>
                <Link to="/sell" className="text-sm text-gray-600 hover:text-gray-900">
                  Sell Property
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-sm text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-sm text-gray-600 hover:text-gray-900">
                  Guides
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-sm text-gray-600 hover:text-gray-900">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">
                1234 Property Street
              </li>
              <li className="text-sm text-gray-600">
                Real Estate City, RE 12345
              </li>
              <li className="text-sm text-gray-600">
                contact@propertyharmony.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} PropertyHarmony. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
