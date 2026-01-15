import React from 'react'
import PublicCourseList from '../../courses/components/PublicCourseList'
import PublicHeader from '../../../shared/components/PublicHeader'
import useDocumentTitle from '../../../shared/hooks/useDocumentTitle'

const PublicHomePage = () => {
  
  useDocumentTitle("Elearning Management System");

  return (
    <>
        <PublicHeader />
{/* 
        <HeroSection />

        <CompanyList /> */}

        <PublicCourseList />
    </>
  )
}

export default PublicHomePage