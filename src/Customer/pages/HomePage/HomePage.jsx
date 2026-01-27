import React from 'react'
import MainCaraousel from '../../component/HomeCaraousel/MainCaraousel'
import HomeSectioncaraousel from '../../component/HomeSectionCaraousel/HomeSectioncaraousel';
import { mens_kurta } from '../../../Data/kurta';
import { mensShoesPage1 } from '../../../Data/shoes';
import { sareePage1 } from '../../../Data/sharee';
export const HomePage = () => {
  return (
    <div>
        <MainCaraousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
          <HomeSectioncaraousel data={mens_kurta} SectionName="Men's Kurta"/>
          <HomeSectioncaraousel data={mensShoesPage1} SectionName="Shoes"/>
          <HomeSectioncaraousel data={sareePage1} SectionName="Saree"/>

        </div>
        <div>
        </div>
    </div>
  )
}
export default HomePage;
