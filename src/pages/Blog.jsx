import React, { useEffect, useState } from "react";
import "./styles/BlogSection.css";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "Breaking Free from Addiction: Steps to Recovery",
    excerpt: "Learn the essential steps to overcoming addiction and rebuilding your life...",
    image: "assets/adct1.jpg",
    category: "Rehabilitation & Recovery",
    link: "/breaking-free-from-addiction"
  },
  {
    id: 2,
    title: "Managing Stress & Anxiety: Mental Health Tips",
    excerpt: "Discover effective ways to cope with stress, anxiety, and daily pressures...",
    image: "assets/stress.jpg",
    category: "Mental Health",
    link: "/managing-stress-anxiety"
  },
  {
    id: 3,
    title: "Healing from Trauma: A Step-by-Step Guide",
    excerpt: "Overcome past traumas and regain control over your mental well-being...",
    image: "assets/mental.jpg",
    category: "Mental Health",
    link: "/healing-from-trauma"
  },
  {
    id: 4,
    title: "Strengthening Family Bonds After Rehab",
    excerpt: "Rebuilding trust and connection with your loved ones after addiction recovery...",
    image: "assets/bond.jpg",
    category: "Family & Relationships",
    link: "/strengthening-family-bonds"
  },
  {
    id: 5,
    title: "Healthy Habits for a Balanced Life",
    excerpt: "Tips on fitness, nutrition, and self-care to maintain a healthy lifestyle...",
    image: "assets/healthy.jpg",
    category: "Wellness & Lifestyle",
    link: "/healthy-habits-balanced-life"
  },
  {
    id: 6,
    title: "The Power of Good Sleep: How to Improve Your Sleep Hygiene",
    excerpt: "Discover how quality sleep can transform your energy and mental clarity...",
    image: "/assets/sleep.jpg",
    category: "Wellness & Lifestyle",
    link: "/sleephygiene"
  },

  // Counseling & Therapy
  {
    id: 7,
    title: "CBT Techniques for Managing Negative Thoughts",
    excerpt: "Learn Cognitive Behavioral Therapy (CBT) techniques to control anxious thinking...",
    image: "/assets/cbt.jpg",
    category: "Counseling & Therapy",
    link: ""
  },
  {
    id: 8,
    title: "The Benefits of Group Therapy in Recovery",
    excerpt: "Explore how group therapy helps individuals feel heard, supported, and encouraged...",
    image: "/assets/gterapy.jpg",
    category: "Counseling & Therapy",
    link: ""
  },

  // Spiritual Growth
  {
    id: 9,
    title: "Faith-Based Healing: Overcoming Life’s Challenges with Spiritual Strength",
    excerpt: "Discover how spirituality can be a powerful tool in emotional and mental healing...",
    image: "/assets/group.jpg",
    category: "Spiritual Growth",
    link: ""
  },
  {
    id: 10,
    title: "Finding Inner Peace Through Prayer & Meditation",
    excerpt: "How prayer and meditation can enhance your spiritual journey and bring peace...",
    image: "/assets/inner.jpg",
    category: "Spiritual Growth",
    link: ""
  }
];

const categories = [
  "All",
  "Rehabilitation & Recovery",
  "Mental Health",
  "Family & Relationships",
  "Wellness & Lifestyle",
  "Counseling & Therapy",
  "Success Stories",
  "Spiritual Growth"
];

const BlogSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredArticles = articles.filter((article) =>
    (selectedCategory === "All" || article.category === selectedCategory) &&
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="blog-section">
      <h1 className="blog-title">Featured Articles</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Categories */}
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="articles-grid">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div key={article.id} className="article-card">
              <img src={article.image} alt={article.title} className="article-image" />
              <div className="article-content">
                <h2 className="article-title">{article.title}</h2>
                <p className="article-excerpt">{article.excerpt}</p> 
                <Link to={article.link} className="learn-more">
                  Learn More <IoArrowForward className="arrow-icon" />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="no-articles">No articles found.</p>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
