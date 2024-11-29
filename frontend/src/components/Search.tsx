import React, { useState } from "react";

const SearchPage: React.FC = () => {
    const [area, setArea] = useState<string>('');
    const [date, setDate] = useState<string>('');

    const handleSearch = () => {
        console.log(`検索ページ：${area} on ${date}`);
    };
    
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <h2 className="text-3x1 font-bold mb-6 text-blue-600">Search</h2>
            <div className="bg-white p-6 rounded-lg mb-6 shadow-md w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Area:</label>
                    <input 
                        type="text"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        placeholder="Enter area"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Date:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                </div>
                <button
                  onClick={handleSearch}
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                Search
                </button>
            </div>
        </div>
    );
}

export default SearchPage