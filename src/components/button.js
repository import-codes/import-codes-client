import React from 'react';

const styles = {
    default: 'inline-flex justify-center w-full rounded-md border px-4 py-2 text-base leading-6 font-medium border-gray-300 bg-white  text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5',
    danger: 'inline-flex justify-center w-full rounded-md border px-4 py-2 text-base leading-6 font-medium border-transparent bg-red-600  text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5',
}

export default function Button(props) {
    const classes = styles[props.style] || styles.default;

    return <button type='button' class={classes}>{props.text}</button>
}