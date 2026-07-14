import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'


import './App.css'
import Card from './components/Card'
import User from './components/User'


const App = () => {
  const jobOpenings = [
    {
      "companyLogo": "https://logo.clearbit.com/meta.com",
      "companyName": "Google",
      "datePosted": "2 days ago",
      "post": "Senior Software Developer, Cloud & AI",
      "tag1": "Full-time",
      "tag2": "Senior level",
      "pay": "$95.50",
      "location": "Mumbai, India"
    },
    {
      "companyLogo": "https://logo.clearbit.com/meta.com",
      "companyName": "Meta",
      "datePosted": "1 day ago",
      "post": "Production Engineer, Infrastructure",
      "tag1": "Full-time",
      "tag2": "Junior level",
      "pay": "$72.00",
      "location": "Bengaluru, India"
    },
    {
      "companyLogo": "https://logo.clearbit.com/apple.com",
      "companyName": "Apple",
      "datePosted": "5 days ago",
      "post": "Senior iOS Application Developer",
      "tag1": "Full-time",
      "tag2": "Senior level",
      "pay": "$110.00",
      "location": "Hyderabad, India"
    },
    {
      "companyLogo": "https://logo.clearbit.com/amazon.com",
      "companyName": "Amazon",
      "datePosted": "3 days ago",
      "post": "Frontend Developer, AWS Management Console",
      "tag1": "Part-time",
      "tag2": "Junior level",
      "pay": "$45.00",
      "location": "Chennai, India"
    },
    {
      "companyLogo": "https://logo.clearbit.com/netflix.com",
      "companyName": "Netflix",
      "datePosted": "4 days ago",
      "post": "Senior Distributed Systems Engineer",
      "tag1": "Full-time",
      "tag2": "Senior level",
      "pay": "$135.00",
      "location": "Mumbai, India"
    },
    {
      "companyLogo": "https://logo.clearbit.com/microsoft.com",
      "companyName": "Microsoft",
      "datePosted": "Just now",
      "post": "Azure Cloud Security Developer",
      "tag1": "Full-time",
      "tag2": "Senior level",
      "pay": "$98.00",
      "location": "Noida, India"
    },
    {
      "companyLogo": "https://logo.clearbit.com/nvidia.com",
      "companyName": "NVIDIA",
      "datePosted": "6 days ago",
      "post": "Junior AI/ML Compiler Engineer",
      "tag1": "Full-time",
      "tag2": "Junior level",
      "pay": "$65.00",
      "location": "Pune, India"
    },
    {
      "companyLogo": "https://logo.clearbit.com/salesforce.com",
      "companyName": "Salesforce",
      "datePosted": "2 days ago",
      "post": "Full Stack Developer, MuleSoft",
      "tag1": "Part-time",
      "tag2": "Junior level",
      "pay": "$40.00",
      "location": "Hyderabad, India"
    },
    {
      "companyLogo": "https://logo.clearbit.com/adobe.com",
      "companyName": "Adobe",
      "datePosted": "7 days ago",
      "post": "Senior GenAI Software Engineer",
      "tag1": "Full-time",
      "tag2": "Senior level",
      "pay": "$88.50",
      "location": "Bengaluru, India"
    },
    {
      "companyLogo": "https://logo.clearbit.com/google.com",
      "companyName": "Google",
      "datePosted": "4 days ago",
      "post": "Associate Software Engineer, YouTube Tools",
      "tag1": "Full-time",
      "tag2": "Junior level",
      "pay": "$55.00",
      "location": "Gurugram, India"
    }
  ]
  return (
  <>
    <div className="parent">

      {jobOpenings.map((job,index) => (
        <div key = {index}>
        <Card
          companyLogo={job.companyLogo}
          companyName={job.companyName}
          datePosted={job.datePosted}
          post={job.post}
          tag1={job.tag1}
          tag2={job.tag2}
          pay={job.pay}
          location={job.location} />
         </div>
      ))}

    </div>
    </>
  )
}

export default App