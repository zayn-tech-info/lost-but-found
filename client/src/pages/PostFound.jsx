import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const PostFound = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    itemName: "",
    description: "",
    locationFound: "",
    dateFound: "",
    contactInfo: "",
  });

  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = new FormData();
    data.append("itemName", formData.itemName);
    data.append("description", formData.description);
    data.append("locationFound", formData.locationFound);
    data.append("dateFound", formData.dateFound);
    data.append("contactInfo", formData.contactInfo);
    if (imageFile) {
      data.append("image", imageFile);
    }

    try {
      await axios.post("http://localhost:5000/api/found", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate("/found");
    } catch (error) {
      console.error(error);
      alert("Error posting item");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/50"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">
            Found Something?
          </h2>
          <p className="text-gray-500">Thank you for being a good samaritan.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
          encType="multipart/form-data"
        >
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Item Name
            </label>
            <input
              type="text"
              name="itemName"
              required
              placeholder="e.g. iPhone 13 Pro"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Upload Image (Optional)
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
              onChange={handleFileChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Description
            </label>
            <textarea
              name="description"
              required
              placeholder="Provide details key details."
              rows="3"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all resize-none"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Location Found
              </label>
              <input
                type="text"
                name="locationFound"
                required
                placeholder="e.g. Cafeteria"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Date Found
              </label>
              <input
                type="date"
                name="dateFound"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-gray-500"
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Contact Info
            </label>
            <input
              type="text"
              name="contactInfo"
              required
              placeholder="e.g. 555-0123"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-linear-to-r from-green-500 to-teal-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex justify-center items-center gap-2"
          >
            {isLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Post Found Item"
            )}
          </button>

          <p className="text-center text-xs text-gray-400 mt-4">
            Your post will be visible to the entire community immediately.
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default PostFound;
