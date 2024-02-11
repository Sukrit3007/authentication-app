import React from 'react'

const UserProfile = ({params}) => {
  return (
    <div className='flex justify-center content-center items-center min-h-screen py-2'>
      <p>profile page {params.id} </p>
    </div>
  )
}

export default UserProfile
 