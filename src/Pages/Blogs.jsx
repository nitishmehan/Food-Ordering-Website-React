import React, { useState } from 'react';
import BlogHeader from '../Components/BlogHeader';
import BlogSidebar from '../Components/BlogSidebar';
import Footer from '../Components/Footer';
import BlogsList from '../Components/BlogsList';
import Blog_r from '../Components/Blog_r';
import '../Static/blog.css';

function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogsData = [
    {
      img: 'images/blog-rt-1.png',
      title: 'Paradise Taste of Meals',
      content: `A world of gourmet ingredients and specialty products that will inspire your
                culinary creativity. From aged balsamic vinegar to truffle-infused oils and imported
                cheeses, these indulgent treats add a touch of luxury to any meal.`,
      author: 'Furion',
      date: 'May 30, 2024',
    },
    {
      img: 'images/blog-rt-2.png',
      title: 'Heaven Flavour Of Dishes',
      content: `A world where crispy tortilla chips meet a symphony of flavors, creating a
                nachos experience like no other. Our signature nachos dish is a testament to culinary
                excellence, promising a fiesta of taste sensations that will leave you.`,
      author: 'John',
      date: 'May 20, 2024',
    },
    {
      img: 'images/blog-rt-3.png',
      title: 'Happiness Taste Of Panner',
      content: `A world of gourmet ingredients and specialty products that will inspire your
                culinary creativity. From aged balsamic vinegar to truffle-infused oils and imported
                cheeses, these indulgent treats add a touch of luxury to any meal.`,
      author: 'Furion',
      date: 'May 30, 2024',
    },
    {
      img: 'images/blog-rt-4.png',
      title: 'The Evolution Of Food',
      content: `The joy of falafel with us and discover why it has become a cherished staple of
                Mediterranean cuisine. With its irresistible flavors, satisfying textures, and endless
                versatility, our falafel dish is sure to leave you smiling and satisfied.`,
      author: 'Johnny',
      date: 'April 10, 2024',
    },
    {
      img: 'images/blog-rt-5.png',
      title: 'Taste Of Peace In Food',
      content: `The magic of samosas with us and discover why they have become a beloved staple of
                Indian cuisine. Whether you're a lifelong fan or trying them for the first time, our
                samosa dish promises to delight your senses and leave you wanting more.`,
      author: 'Mary',
      date: 'March 22, 2024',
    },
    {
      img: 'images/blog-rt-6.png',
      title: 'Perfect Taste Of Cuisine',
      content: `Indulge your senses as you savor the rich, robust flavors of our pasta dish. Each
                bite is a revelation, with layers of savory tomato sauce, fragrant herbs, and creamy
                cheese coming together in perfect harmony to create a taste sensation.`,
      author: 'Celia',
      date: 'March 15, 2024',
    },
  ];
  

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleBackToList = () => {
    setSelectedBlog(null);
  };

  return (
    <>
      <BlogHeader title="Blogs List" />
      <main>
        <div className="main dark_back">
          <BlogSidebar />
          {!selectedBlog ? (
            <BlogsList blogs={blogsData} onBlogClick={handleBlogClick} />
          ) : (
            <Blog_r {...selectedBlog} onBack={handleBackToList} />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Blogs;
