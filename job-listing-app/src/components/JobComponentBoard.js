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
        <div className="flex bg-white shadow-md m-4 p-6 rounded">
            <div>
                <img src={logo} alt={company} />
            </div>
            <div className="flex flex-col justify-between ml-4">
                <h3 className="font-bold text-teal-500">
                    {company}
                    {isNew && <span className='text-teal-500 bg-teal-100 font-bold p-2 rounded'>New</span>}
                    {featured && <span className='text-teal-500 bg-teal-100 font-bold m-2 p-2 rounded'>Featured</span>}
                </h3>
                <h2 className="font-bold text-xl">{position}</h2>
                <p className="text-gray-700">
                    {postedAt} · {contract} · {location}
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