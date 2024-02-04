import prisma from "@/utils/connect";

export const GET = async (request, { params }) => {
    try {
        const Posts = await prisma.Posts.findUnique({
            where: {
                slug: 'ojas-aklecha',
            },
        });

        console.log(Posts);
        if (!Posts) {
            return new Response("Post not found", { status: 404 });
        }

        return {
            statusCode: 200,
            body: JSON.stringify(Posts),
        };

    } catch (error) {
        console.log(params.slug);
        console.log(error);
        return new Response({ error });
    }
}