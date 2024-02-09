import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
      <a href='#projects' className='h-auto w-auto flex flex-row items-center' id='projects'></a>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-5-- to-cyan-500 py-20'>
            My Projects
        </h1>
      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
        <ProjectCard
        src='/parallaxWebsite.png'
        title='Parallax Website'
        description='Website made with parallax effect using HTML, CSS, JS'
        page='https://parallax-mountain-g2pgwqequ-kf-vmolina.vercel.app'
        />
        <ProjectCard
        src='/weatherWebsite.png'
        title='Weather App Website'
        description='Website widget for weather app using API'
        page='https://weather-lzbmy1qs4-kf-vmolina.vercel.app'
        />
        <ProjectCard
        src='/dashboardWebsite.png'
        title='Dashboard Starter Website'
        description='Website boilerplate for dashboard with analytics'
        page='https://admin-panel-pfn71iovf-kf-vmolina.vercel.app'
        />
      </div>
    </div>
  )
}

export default Projects
