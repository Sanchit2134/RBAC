  import React, { useState } from "react";

  const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState(""); 
    const [searchResults, setSearchResults] = useState([]); 

  
    const sampleData = [
      "Sanchit Thakur",
      "arjun"
    ];

    const handleSearch = (event) => {
      const value = event.target.value;
      setSearchTerm(value);

      if (value.trim() !== "") {
        const results = sampleData.filter((item) =>
          item.toLowerCase().includes(value.toLowerCase())
        );
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
    };

    return (
      <header className="bg-teal-900 text-white p-4 flex flex-col sm:flex-row justify-between items-center">
        <h1 className="font-bold text-lg mb-4 sm:mb-0">Administrators</h1>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
              className="p-2 rounded border border-gray-300 text-black w-full sm:w-auto"
            />
            {searchTerm && searchResults.length > 0 && (
              <div className="absolute top-12 left-0 w-full bg-white rounded shadow-lg z-10 text-black">
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      alert(`You clicked on: ${result}`);
                      setSearchTerm(""); 
                      setSearchResults([]); 
                    }}
                  >
                    {result}
                  </div>
                ))}
              </div>
            )}
            {searchTerm && searchResults.length === 0 && (
              <div className="absolute top-12 left-0 w-full bg-white rounded shadow-lg z-10 text-black px-4 py-2">
                No results found.
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2">Help</button>
            <button className="bg-teal-700 p-2 rounded">EN</button>
            <img className="w-10 h-10 bg-gray-200 rounded-full" src="data:image/jpeg;base64,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"/>
          </div>
        </div>
      </header>
    );
  };

  export default Navbar;
