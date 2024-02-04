import prisma from "@/utils/connect";

export const POST = async () => {
    const body = await request.json();

    try {
        const newPost = await prisma.Post.create({
            data: {
                title: body.title,
                desc: body.desc,
                img: body.img,
                catSlug: body.catSlug,
                userEmail: session.user.email
            },
        });
        return new Response(JSON.stringify(newPost), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ error }));
    }
}
