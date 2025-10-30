import React from 'react'
import {IoLogoGithub} from '../assets/Icons'

const Todo = () => {
    return (
        <div className='flex flex-row justify-evenly'>
            <div>
                <h1>ToDo</h1>
                <div className='flex flex-col'>
                    <div className='flex items-center w-64 gap-4 p-4 rounded-lg mb-4 bg-white shadow-md'>
                        <div className='p-2 border rounded-full'>
                            <IoLogoGithub size={25} />
                        </div>
                        <div>
                            <h1 className=' font-semibold'>Title</h1>
                            <p className='text-gray-400 text-xs md:text-sm'>Description</p>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <h1>In Progress</h1>
                <div className='flex flex-col'>

                </div>
            </div>
            <div>
                <h1>Completed</h1>
                <div className='flex flex-col'>

                </div>
            </div>
        </div>
    )
}

export default Todo