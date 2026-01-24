import React from 'react'
import MainCaraousel from '../../component/HomeCaraousel/MainCaraousel'
import HomeSectioncaraousel from '../../component/HomeSectionCaraousel/HomeSectioncaraousel';
export const HomePage = () => {
  return (
    <div>
        <MainCaraousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
          <HomeSectioncaraousel/>
          <HomeSectioncaraousel/>
          <HomeSectioncaraousel/>

        </div>
    </div>
  )
}
export default HomePage;
