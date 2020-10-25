import React, { useState, useEffect } from 'react'
import data from './service/data.json'
import JobBoardComponent from './components/JobComponentBoard'

function App() {
  // Initialize as empty array
  const [jobs, setJobs] = useState([])
  const [filters, setFilters] = useState([])

  useEffect(() => setJobs(data, []))

  const filterFunc = ({ role, level, tools, languages }) => {
    const tags = [role, level]

    if (tools) {
      tags.push(...tools)
    }

    if (languages) {
      tags.push(...languages)
    }

    if (filters.length === 0) {
      return true
    }

    return tags.some(tag => filters.includes(tag))
  }

  const handleTagClick = (tag) => {
    setFilters([...filters, tag])
  }

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter)
    );
  }


  const filteredJobs = jobs.filter(filterFunc)



  console.log(data)
  return (
    <div className="App">
      <header className='bg-teal-500 mb-12'>
        <img src='/images/bg-header-desktop.svg'
          alt='bg-image' />
      </header>
      <div className="bg-white shadow-md">
        {
          filters.length > 0 && (
            filters.map(filter =>
              <span
                onClick={() => handleFilterClick(filter)}
                className='text-teal-500 bg-teal-100 font-bold mr-4
                mb-4 p-2 rounded sm:mb-0'
              >{filter}</span>)
          )
        }
      </div>
      {
        jobs.length === 0 ? (
          <p>Jobs are fetching...</p>
        ) : (
            // For every job object in data; create a job component
            filteredJobs.map(job => (
              (<JobBoardComponent
                job={job}
                key={job.id}
                handleTagClick={handleTagClick}
              />)
            ))
          )
      }

    </div>
  );
}

export default App;


// TODO
// 1. Study the design and data/API *
// 2. Create Job Board component (receive the data) *
// 3. Get the data from JSON *
// 4. Pass down data to the Job Board component *
// 5. Styling
// 6. Filter component
// 7. Filter the data