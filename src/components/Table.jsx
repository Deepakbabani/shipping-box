const Table = ({ boxes }) => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl mb-4">List of Boxes</h2>
      {boxes.length === 0 ? (
        <p>No boxes added yet.</p>
      ) : (
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Receiver Name</th>
              <th className="border border-gray-300 p-2">Weight (kg)</th>
              <th className="border border-gray-300 p-2">Box Colour</th>
              <th className="border border-gray-300 p-2">
                Destination Country
              </th>
              <th className="border border-gray-300 p-2">
                Shipping Cost (INR)
              </th>
            </tr>
          </thead>
          <tbody>
            {boxes.map((box, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 p-2">{box.receiver}</td>
                <td className="border border-gray-300 p-2">{box.weight}</td>
                <td className="border border-gray-300 p-2">
                  <div
                    className="w-8 h-8 mx-auto rounded"
                    style={{ backgroundColor: `rgb${box.color}` }}
                  ></div>
                </td>
                <td className="border border-gray-300 p-2">
                  {box.destination}
                </td>
                <td className="border border-gray-300 p-2">₹{box.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
