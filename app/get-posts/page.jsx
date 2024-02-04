'use client'
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

const Page = () => {
    const { data: session } = useSession();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/v1/blog', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const data = await response.json();
                console.log(data);
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, [session]);

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4 pl-4">All Posts</h1>
            <div className="flex flex-wrap">
                {posts.map((post) => (
                    <div key={post.id} className="border border-gray-300 p-4 m-4 w-72 hover:bg-white cursor-pointer hover:text-black">
                        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                        <p>{post.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
