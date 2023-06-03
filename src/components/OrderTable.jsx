import React, { useState } from "react";
import Sidebar from "./Sidebar";
import three from "../assests/three.png"

const OrderTable = ({ orders }) => {
  const [sortBy, setSortBy] = useState("");
  const [sortDirection, setSortDirection] = useState("");
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedData, setEditedData] = useState({});

  const handleSort = (property) => {
    if (property === sortBy) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortBy(property);
      setSortDirection("asc");
    }
  };

  const handleEdit = (orderId) => {
    setSelectedOrderId(orderId);
    setIsModalOpen(true);
    // Fetch the selected order data from the API or any other data source
    const selectedOrder = orders.find((order) => order.id === orderId);
    setEditedData(selectedOrder);
  };

  const handleSave = () => {
    // Handle saving the edited data
    console.log("Save edited data:", editedData);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    // Cancel the editing process
    setIsModalOpen(false);
  };

  const sortedOrders = [...orders].sort((a, b) => {
    if (sortBy === "quantity") {
      return sortDirection === "asc"
        ? a.quantity - b.quantity
        : b.quantity - a.quantity;
    } else if (sortBy === "placed_on") {
      const dateA = new Date(a.placed_on);
      const dateB = new Date(b.placed_on);
      return sortDirection === "asc" ? dateA - dateB : dateB - dateA;
    }
    return 0;
  });

  return (
    <div className=" flex bg-gray-100">
      <Sidebar />
      <div className="w-[80vw] p-6">
        <div className="p-2 flex w-full justify-between">
          <h1 className="text-[26px] font-bold ">Orders</h1>
          <button className="py px-4 bg-blue-600 self-center pb-1 rounded-xl text-white">
            <span className="text-[28px] mr-2">+</span>
            <span className="">Add Order</span>
          </button>
        </div>
        <hr />
        <table className=" mt-4 w-full min-w-max bg-white rounded-3xl ">
          <thead className="text-gray-400">
            <tr className="">
              {" "}
              <th className="p-2">
                {" "}
                Confirmed <span className="text-gray-400 ml-2"> 258 </span>
              </th>
            </tr>
            <hr />
            <tr>
              <th
                className="py-2 px-4 border-b cursor-pointer"
                onClick={() => handleSort("logo")}
              >
                <div className="relative w-[80%]">
                  <input
                    type="text"
                    className="w-full h-10 p-6 rounded-full bg-gray-200"
                    placeholder="Search"
                  />
                  <div className="absolute top-0 right-0 h-full flex items-center justify-center pr-3">
                    {/* <img className=" w-8 h-8 " src={Search} alt="" /> */}
                  </div>
                </div>
              </th>
              <th className="py-2 px-4 border-b">
                <div className="flex items-center">
                  Quantity
                  <div className="ml-1">
                    <select
                      className="p-1 bg-gray-200 rounded-lg"
                      value={sortDirection}
                      onChange={(e) => setSortDirection(e.target.value)}
                    >
                      <option value="asc">Ascending</option>
                      <option value="desc">Descending</option>
                    </select>
                  </div>
                </div>
              </th>
              <th
                className="py-2 px-4 border-b cursor-pointer"
                onClick={() => handleSort("price")}
              >
                Price
              </th>
              <th className="py-2 px-4 border-b">
                <div className="flex items-center">
                  Placed On
                  <div className="ml-1">
                    <select
                      className="p-1  bg-gray-200 rounded-lg"
                      value={sortDirection}
                      onChange={(e) => setSortDirection(e.target.value)}
                    >
                      <option value="asc">Ascending</option>
                      <option value="desc">Descending</option>
                    </select>
                  </div>
                </div>
              </th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {sortedOrders.map((order, index) => (
              <tr key={index} >
                <td className="p-2 border-b flex h-[4rem]">
                  <img src={order.logo} alt="" className="" />
                  <h1 className=" font-bold">{order.brand_name} </h1>
                  <h2 className="text-gray-400"> ({order.product})</h2>
                </td>
                <td className="p-2 border-b">{order.quantity}</td>
                <td className="p-2 border-b">{order.price}</td>
                <td className="p-2 border-b">{order.placed_on}</td>
                <td className="p-2 border-b">
                  <button
                    className=" py-1 px-2 rounded"
                    onClick={() => handleEdit(order.id)}
                  >
                    <img src={three} alt="" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isModalOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-xl font-bold mb-4">Edit Order</h2>
              <form>
                {/* Render form fields for editing the selected order */}
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="brand_name"
                  >
                    Brand Name
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline"
                    type="text"
                    id="brand_name"
                    value={editedData.brand_name || ""}
                    onChange={(e) =>
                      setEditedData({
                        ...editedData,
                        brand_name: e.target.value,
                      })
                    }
                  />
                </div>
                {/* Add more form fields for other properties of the order */}
                <div className="flex justify-end">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded mr-2"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-2 rounded"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        <div className=" mt-8 bg-white rounded-xl p-4 flex w-full justify-between">
            <h1 className="text-[18px] font-bold">ISSUES <span className="text-gray-400">21</span></h1>
            <button className=" bg-gray-400 px-3 py rounded-full ">
            <span className="text-[28px] ">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
