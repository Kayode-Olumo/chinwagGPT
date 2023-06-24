import React from 'react'
import NewChat from './NewChat';

const Sidebar = () => {
  return (
    <div className='p-2 flex flex-col h-screen'>
        <div className='flex-1'>
            {/* new chat */}
            <NewChat />
            <div>
                {/* ModelSelection */}
            </div>
            {/* map through the chatRow */}
        </div>
    </div>
  )
}

export default Sidebar;