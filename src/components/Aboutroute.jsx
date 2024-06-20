import Link from "next/link";

const Aboutroute = () => {
    const blogs = [
        {
            "slug": "introduction-to-python",
            "title": "Introduction to Python",
            "description": "A comprehensive guide to getting started with Python, covering basics to advanced topics."
        },
        {
            "slug": "advanced-javascript",
            "title": "Advanced JavaScript",
            "description": "Deep dive into JavaScript, exploring advanced concepts, ES6 features, and best practices."
        },
        {
            "slug": "web-development-with-react",
            "title": "Web Development with React",
            "description": "Learn how to build modern web applications using React, including state management and hooks."
        },
        {
            "slug": "data-science-with-r",
            "title": "Data Science with R",
            "description": "Explore data analysis, visualization, and machine learning techniques using R programming."
        },
        {
            "slug": "introduction-to-cyber-security",
            "title": "Introduction to Cyber Security",
            "description": "An essential course on the fundamentals of cyber security, including threat detection and prevention."
        }
    ]
    
    return (
        <div className="text-red-500 p-4">
            <Link href='/about/history'>History Link</Link>
            {
               blogs.map((blog)=>(
                 <div key={blog.slug} className="border-2 p-12">
                 <h3>{blog.title}</h3>
                 <h3>{blog.description}</h3>
                 <button className="btn">
                    <Link href={`/blogs/${blog.slug}`}>Details</Link>
                 </button>
                 </div>
               ))
            }
        </div>
    );
};

export default Aboutroute; 