import React from "react";
import { Link } from "react-router-dom";
import "./styles/BlogsHome.css";

const LatestBlog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Signs You Need Professional Help for Addiction",
      image: "/assets/addiction.jpg",
      description: "Recognizing when addiction is taking control of your life is the first step toward healing...",
      link: "/signsofaddiction",
    },
    {
      id: 2,
      title: "How to Support a Loved One in Recovery",
      image: "/assets/support.jpg",
      description: "Supporting a friend or family member through recovery requires patience, empathy, and understanding...",
      link: "/supportone",
    },
    {
      id: 3,
      title: "Mental Health & Spiritual Well-being",
      image: "/assets/mental.jpg",
      description: "Discover how mental health and spirituality intersect to promote inner peace and resilience...",
      link: "/mentalhe",
    },
  ];

  return (
    <section className="latest-blog">
      <h2 className="section-title">Resources for Recovery</h2>
      <div className="blog-container">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <Link to={post.link} className="btn btn-secondary">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="blog-cta">
        <Link to="/blogsection" className="btn btn-primary">
          View All Blogs
        </Link>
      </div>
    </section>
  );
};

export default LatestBlog;
