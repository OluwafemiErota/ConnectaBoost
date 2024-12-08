"use client"; // Add this line at the top

import { useState } from "react";
import Navbar from "../../components/Navbar.tsx";
import Footer from "@/components/footer.js";

const AgencyLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to backend)
    console.log("Login Form submitted", formData);
  };

  return (
    <div>
      <Navbar />

      <section className="bg-[#f7f7f7] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6 text-[#333]">
            Welcome Back, Agency!
          </h1>
          <p className="text-lg text-center mb-6 text-[#666]">
            Log in to collaborate with us in managing and optimizing your
            clients digital marketing campaigns and strategies.
          </p>

          <form
            className="space-y-6 bg-white p-8 rounded-lg shadow-md"
            onSubmit={handleSubmit}
          >
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#333]"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#333]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Log In
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p>
              Don&apos;t have an account?{" "}
              <a
                href="/AgencySignup"
                className="text-blue-600 hover:text-blue-800"
              >
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgencyLogin;
