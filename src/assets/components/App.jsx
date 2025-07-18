import '@styles/App.css'
import Search from '@components/Search'
import GetExtensions from '@components/Extensions'
import { useState } from 'react'
import Extensions from '@lib/GetExtensions.json';

function App() {
  
  const [prevExtension, setExtension] = useState(Extensions);
  const [prevFilter, setFilter] = useState('all');

  function changeFilter(newFilter) {
    setFilter(newFilter);
  };

  return (
    <>
    <div className='bg-linear-to-r/srgb dark:from-[#04091d] dark:to-[#07133b] px-5 px-md-0 py-16 from-[#ebf2fc] to-[#effbf9]'>
      <div className='max-w-[1300px] mx-auto'>
        <Search />
        <div className="flex flex-row flex-wrap gap-4 justify-between mt-10 mb-5">
          <h4 className='text-[#030c2d] text-4xl font-bold dark:text-white'>Extensions List</h4>
          <div className="flex flex-wrap gap-3 items-center">
            <button onClick={() => changeFilter('all')} className={`cursor-pointer rounded-3xl text-lg text-[#030c2d] py-2 px-4  ${prevFilter === 'all' ? 'text-white bg-[#f05b53]' : 'bg-white dark:hover:bg-white/30 dark:text-white dark:bg-white/20'}`} type='button'>All</button>
            <button onClick={() => changeFilter('active')} className={`cursor-pointer rounded-3xl text-lg text-[#030c2d] py-2 px-4 ${prevFilter === 'active' ? 'text-white bg-[#f05b53]' : 'bg-white dark:hover:bg-white/30 dark:text-white dark:bg-white/20'}`} type='button'>Active</button>
            <button onClick={() => changeFilter('inactive')} className={`cursor-pointer rounded-3xl text-lg text-[#030c2d] py-2 px-4  ${prevFilter === 'inactive' ? 'text-white bg-[#f05b53]' : 'bg-white dark:hover:bg-white/30 dark:text-white dark:bg-white/20'}`} type='button'>Inactive</button>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <GetExtensions 
          prevExtension={prevExtension}
          setExtension={setExtension}
          filter={prevFilter}
          />
        </div>
      </div>
    </div>
    </>
  )
}


export default App
