import React, { useState, useEffect } from 'react'
import data from './service/data.json'
import JobBoardComponent from './components/JobComponentBoard'

function App() {
  // Initialize as empty array
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    setJobs(data)
  }, [])

  console.log(data)
  return (
    <div className="App">
      <h1>Hello world!</h1>
      {
        jobs.length === 0 ? (
          <p>Jobs are fetching...</p>
        ) : (
            jobs.map(job => (
              <JobBoardComponent job={job} key={job.id} />
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
// 3. Get the data from JSON 
// 4. Pass down data to the Job Board component
// 5. Styling
// 6. Filter component
// 7. Filter the data