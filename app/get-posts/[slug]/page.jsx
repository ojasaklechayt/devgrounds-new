'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const BlogPage = ({ params }) => {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(params.slug);
        const fetchBlog = async () => {
            try {
                const response = await fetch(`
                http://localhost:3000/api/v1/blog/${params.slug}`, { method: 'GET' });


                const data = await response.json();
                console.log(data);
                if (response.ok) {
                    setBlog(data);
                } else {
                    console.error('Failed to fetch blog:', data);
                }
            } catch (error) {
                console.error('Error fetching blog:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [params.slug]);

    return (
        <div className="bg-green-200 h-full flex flex-col justify-start items-center text-black font-sans px-4 py-6">
            <div className="max-w-2xl mx-auto mt-8 p-4 bg-white rounded-md shadow-md">
                {loading ? (
                    <>
                        <h1 className="text-4xl font-bold mb-4">Loading the blog title</h1>
                        <p className="text-gray-600 mb-4">Loading the blog content</p>
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-gray-500">Author: Loading the author</p>
                            <p className="text-gray-500">Category: Loading the category</p>
                            <p className="text-gray-500">Date: Loading the date</p>
                        </div>
                    </>
                ) : blog ? (
                    <>
                        <Image src={blog.coverImage} alt={blog.title} className="w-full h-64 object-cover mb-4 rounded-md" />
                        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
                        <p className="text-gray-600 mb-4">{blog.content}</p>
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-gray-500">Author: {blog.author}</p>
                            <p className="text-gray-500">Category: {blog.category}</p>
                            <p className="text-gray-500">Date: {new Date(blog.date).toLocaleDateString()}</p>
                        </div>
                    </>
                ) : (
                    <p className="text-red-500">Failed to load blog. Please try again later.</p>
                )}
            </div>
        </div>
    );
};

export default BlogPage;
