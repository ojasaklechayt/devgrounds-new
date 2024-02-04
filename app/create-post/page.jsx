// pages/create-post.js
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/router';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [img, setImg] = useState('');
    const [catSlug, setCatSlug] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

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
                }),
            });

            console.log(response);
            console.log(title, desc, img, catSlug);
        } catch (error) {
            console.error('An unexpected error happened:', error);
        }

    };

    return (
        <div>
            <h1>Create a New Post</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <br />
                <label>
                    Description:
                    <textarea id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} />
                </label>
                <br />
                <label>
                    Image URL:
                    <input id="img" type="text" value={img} onChange={(e) => setImg(e.target.value)} />
                </label>
                <br />
                <label>
                    Category Slug:
                    <input id="catSlug" type="text" value={catSlug} onChange={(e) => setCatSlug(e.target.value)} />
                </label>
                <br />
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
};

export default CreatePost;
