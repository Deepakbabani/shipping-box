import { useState } from "react";

const Form = ({ onAddBox }) => {
  const [formData, setFormData] = useState({
    receiver: "",
    weight: "",
    color: "#000000",
    destination: "",
  });
  const [errors, setErrors] = useState({});

  const countries = [
    { name: "Sweden", multiplier: 7.35 },
    { name: "China", multiplier: 11.53 },
    { name: "Brazil", multiplier: 15.63 },
    { name: "Australia", multiplier: 50.09 },
  ];

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.receiver.trim())
      newErrors.receiver = "Receiver name is required";
    if (!formData.weight) newErrors.weight = "Weight is required";
    else if (parseFloat(formData.weight) < 0) {
      newErrors.weight = "Weight cannot be negative";
      setFormData({ ...formData, weight: 0 });
    }
    if (!formData.destination)
      newErrors.destination = "Destination is required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      const rgb = hexToRgb(formData.color);
      const box = {
        receiver: formData.receiver,
        weight: parseFloat(formData.weight),
        color: `(${rgb.r}, ${rgb.g}, ${rgb.b})`,
        destination: formData.destination,
        cost: (
          parseFloat(formData.weight) *
          countries.find((c) => c.name === formData.destination).multiplier
        ).toFixed(2),
      };
      onAddBox(box);
      setFormData({
        receiver: "",
        weight: "",
        color: "#000000",
        destination: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl mb-4">Add Box</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Receiver Name</label>
          <input
            type="text"
            name="receiver"
            value={formData.receiver}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.receiver && (
            <p className="text-red-500 text-sm">{errors.receiver}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Weight (kg)</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.weight && (
            <p className="text-red-500 text-sm">{errors.weight}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Box Colour</label>
          <input
            type="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Destination Country</label>
          <select
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Country</option>
            {countries.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
          {errors.destination && (
            <p className="text-red-500 text-sm">{errors.destination}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Form;
