import prisma from "@/utils/connect";

export const POST = async (request) => {
    const body = await request.json();
    console.log("body is: ", body);
    try {
        const newPost = await prisma.Posts.create({
            data: {
                title: body.title,
                desc: body.desc,
                img: body.img,
                catSlug: body.catSlug,
                userEmail: body.userEmail,
                slug: body.slug
            },
        });
        return new Response(JSON.stringify(newPost), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ error }));
    }
}


export const GET = async (request) => {
    try {
        const Posts = await prisma.Posts.findMany();
        return new Response(JSON.stringify(Posts), {status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error }), {status: 500});
    }
}
