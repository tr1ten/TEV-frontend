import React, { useEffect, useState } from 'react';
const BASE_URL = 'https://tev-backend.vercel.app/api'
const Filters = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [domain, setDomain] = useState('');
  const [gender, setGender] = useState('');
  const [available, setavailable] = useState('');
  const [allDomains, setAllDomains] = useState([]); 
  const [allGenders,setAllGenders] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/domains`)
      .then(res => res.json())
      .then(data => setAllDomains(data.domains));
    fetch(`${BASE_URL}/genders`)
      .then(res => res.json())
      .then(data => setAllGenders(data.genders));
  },[]);
  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleFilter = () => {
    const filters = { domain, gender, available };
    onFilter(filters);
  };

  return (
    <div className='
      flex
      flex-col
      justify-between
      items-center
      border-gray-200
      py-4
      mb-4
      
    '>
      <div
        className='
          flex
          flex-col
          justify-between
          items-center
          w-full
          max-w-xs
          mb-4
          md:flex-row
        '
      > 
      <input 
        className='
          appearance-none
          bg-transparent
          border-2
          w-full
          text-gray-700
          mr-3
          py-1
          px-2
          leading-tight
          focus:outline-none
        '
        placeholder='Search by name'
      type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      <button 
        className='
         btn
        '
      onClick={handleSearch}>Search</button>
      </div>
<div
        className='
          flex
          flex-row
          items-center
          justify-center
          gap-2
          w-full
          mb-4
          flex-wrap
        '
>
<select 
        className='filter-menu'
 value={domain} onChange={e => setDomain(e.target.value)}>
        <option value="">Select Domain</option>
        {
          allDomains.map((value, index) => {
            return <option key={index} value={value}>{value}</option>
          })
        }
      </select>

      <select 
        className='filter-menu'
      value={gender} onChange={e => setGender(e.target.value)}>
        <option value="">Select Gender</option>
        {
          allGenders.map((value, index) => {
            return <option key={index} value={value}>{value}</option>
          })
        }
      </select>

      <select 
        className='filter-menu'
      value={available} onChange={e => setavailable(e.target.value)}>
        <option value="">Select available</option>
        <option value="true">Available</option>
        <option value="false">Not Available</option>
      </select>

      <button 
        className='
          btn
        '
      onClick={handleFilter}>Apply Filters</button>
</div>
    </div>
  );
};

export default Filters;
