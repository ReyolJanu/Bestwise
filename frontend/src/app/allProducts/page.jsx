"use client";

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productAction';

function AllProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [mounted, setMounted] = useState(false); // ⬅ fix hydration issue
  const productsPerPage = 20;

  const dispatch = useDispatch();
  const { allProducts = [] } = useSelector((state) => state.productsState);

  useEffect(() => {
    dispatch(getProducts());
    setMounted(true); // ⬅ client ready
  }, [dispatch]);

  if (!mounted) return null; // ⬅ don't render until client is ready

  const filteredProducts = allProducts.filter((product) =>
    (product?.name || product?.title || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className='flex flex-col md:flex-row p-4'>
      {/* Left side: Filters */}
      <div className='w-full md:w-[250px] mb-4 md:mb-0 md:mr-4'>
        <div className='bg-white p-4 rounded shadow'>
          <h3 className='text-lg font-semibold mb-2'>Search</h3>
          <input
            type='text'
            placeholder='Search products...'
            value={search}
            onChange={handleSearch}
            className='w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500'
          />
        </div>
      </div>

      {/* Right side: Products Grid */}
      <div className='flex-1'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {currentProducts.map((product) => (
            <div key={product._id} className='bg-white p-4 rounded shadow'>
              <img
                src={product.imageUrl}
                alt={product.title || product.name}
                className='w-full h-[150px] object-cover rounded mb-2'
              />
              <h4 className='font-semibold'>{product.title || product.name}</h4>
              <p className='text-sm text-gray-500'>${product.price}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className='flex justify-center mt-6 space-x-4'>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className='px-4 py-2 bg-gray-200 rounded disabled:opacity-50'
          >
            Previous
          </button>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className='px-4 py-2 bg-gray-200 rounded disabled:opacity-50'
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
