import BlogHeader from '../Components/BlogHeader'
import BlogSidebar from '../Components/BlogSidebar'
import Footer from "../Components/Footer";
import BlogsList from '../Components/BlogsList'
import '../Static/blog.css'
import React from 'react'

function Blogs() {
  return (
      <>
      <BlogHeader title="Blogs List" />

      <main>
      <div className='main dark_back'>
        <BlogSidebar/>
        <BlogsList/>
      </div>
      </main>
      <Footer/>        
    
      </>
  )
}

export default Blogs
