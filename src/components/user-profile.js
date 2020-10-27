import React from 'react';

export default function UserProfile(props) {
    return (
        <div className='flex flex-col'>
            <div className='relative pb-1/1 mb-4'>
                <img className='absolute h-full w-full rounded-full object-center object-cover' src='assets/img/box.png' alt='' />
            </div>
            <div className='text-2xl'>
                <span>User name</span>
            </div>
            <div className='text-lg text-gray-700 mb-4'>
                <span>User</span>
            </div>
            <div className='text-base'>
                <span>User description</span>
            </div>
            <div className='flex flex-row text-sm font-small space-x-2 mb-4'>
                <span>10 Followers</span>
                <span>10 Following</span>
                <span>100 Unboxings</span>
            </div>
            <div className='mb-4'>
                <span>TODO: teams</span>
            </div>
        </div>
    );
}
