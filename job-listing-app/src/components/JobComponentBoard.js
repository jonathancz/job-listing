import React from 'react';

const JobBoardComponent = ({
    job: {
        company,
        logo,
        isNew,
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools,
    }, }) => {
    const tags = [role, level]

    if (tools) {
        tags.push(...tools)
    }

    if (languages) {
        tags.push(languages)
    }

    return (
        <div className={`flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded ${featured && 'border-l-8 border-teal-500 border-solid'}`}>
            <div>
                <img className='-mt-16 mb-4 w-20 h-20' src={logo} alt={company} />
            </div>
            <div className="flex flex-col justify-between ml-4">
                <h3 className="font-bold text-teal-500">
                    {company}
                    {isNew && <span className='bg-teal-500 text-teal-100 font-bold m-1 py-1 px-2 rounded-full'>New</span>}
                    {featured && <span className='bg-gray-800 text-white font-bold m-1 py-1 px-2 rounded-full'>Featured</span>}
                </h3>
                <h2 className="font-bold text-xl">{position}</h2>
                <p className="text-gray-700">
                    {postedAt} · {contract} · {location}
                </p>
            </div>

            <div className='flex items-center mt-4 pt-4 border-t border-gray-200 border-solid'>
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