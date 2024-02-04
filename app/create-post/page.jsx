// pages/create-post.js
'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from "next-auth/react";
const CreatePost = () => {
    const { data: session } = useSession();
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [img, setImg] = useState('');
    const [catSlug, setCatSlug] = useState('');
    const userEmail = session?.user?.email;

    const generateSlug = (title) => {
        const sanitizedTitle = title.toLowerCase().replace(/\s+/g, '-');
        return sanitizedTitle;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const slug = generateSlug(title);
        try {
            const response = await fetch('/api/blog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    desc,
                    img,
                    catSlug,
                    userEmail,
                    slug
                }),
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('An unexpected error happened:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md text-black">
            <h1 className="text-2xl font-bold mb-6">Create a New Post</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title:
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="desc" className="block text-sm font-medium text-gray-700">
                        Description:
                    </label>
                    <textarea
                        id="desc"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="img" className="block text-sm font-medium text-gray-700">
                        Image URL:
                    </label>
                    <input
                        id="img"
                        type="text"
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="catSlug" className="block text-sm font-medium text-gray-700">
                        Category Slug:
                    </label>
                    <input
                        id="catSlug"
                        type="text"
                        value={catSlug}
                        onChange={(e) => setCatSlug(e.target.value)}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Create Post
                </button>
            </form>
        </div>
    );
};

export default CreatePost;
