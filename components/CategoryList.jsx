import React from "react";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/categories", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed");
    }

    return res.json();
};

const CategoryList = async () => {
    const data = await getData();
    return (
        <div className="container">
            <h1 className="title my-10">Popular Categories</h1>
            <div className="flex flex-wrap justify-between gap-4">
                {data?.map((item) => (
                    <Link
                        href="/rumi"
                        className={`category ${item.slug === 'hiring' ? 'bg-blue-200' : ''} ${item.slug === 'web3' ? 'bg-yellow-200' : ''} ${item.slug === 'rust' ? 'bg-green-200' : ''} ${item.slug === 'rust' ? 'bg-orange-200' : ''} ${item.slug === 'rust' ? 'bg-red-200' : ''} ${item.slug === 'rust' ? 'bg-indigo-200' : ''} rounded-lg p-4 flex items-center text-capitalize w-full md:w-1/5 md:w-1/4 lg:w-1/5 text-black`}
                        key={item._id}
                    >
                        {item.img && (
                            <Image
                                src={item.img}
                                alt=""
                                width={32}
                                height={32}
                                className="rounded-full"
                            />
                        )}
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
