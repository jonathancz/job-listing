import React from 'react';

const JobBoardComponent = ({ job }) => {
    const tags = [job.role, job.level]

    if(job.languages) {
        tags.push(...job.languages)
    }

    if(job.tools) {
        tags.push(...job.tools)
    }
    
    return (
        <div className="flex bg-white shadow-md m-4 p-6 rounded">
            <div>
                <img src={job.logo} alt={job.company} />
            </div>
            <div className="flex flex-col justify-between ml-4">
                <h3 className="font-bold text-teal-500">
                    {job.company}
                    {job.isNew && <span>New</span>}
                    {console.log(job.featured)}
                    {job.featured && <span>New</span>}
                </h3>
                <h2 className="font-bold text-xl">{job.position}</h2>
                <p className="text-gray-700">
                    {job.postedAt} · {job.contract} · {job.location}
                </p>
            </div>

            <div className='flex items-center justify-end ml-auto'>
                {tags ? tags.map((tag) => (
                    <span className='text-teal-500 bg-teal-100 font-bold m-2 p-2 rounded'>
                        {tag}
                    </span>
                )) : ''}
            </div>
        </div>
    )
}

export default JobBoardComponent;