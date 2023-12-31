import PostCard from "@/components/PostCard";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

 const getPosts = async () => {
     const response = await prisma.post.findMany(
       { select:{
        id: true,
        title:true,
        content: true,
        tag: true
       },
        orderBy:{ createdAt: "asc"
        }
      }
     )
     return response
  }

async function Home() {
  const posts = await getPosts()
  return (
    <main className="mx-auto w-full max-w-7xl p-4 gap-4 grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 my-10">
      {posts.map((post) => (<PostCard key={post.id} post={post}/>)
        )}
    </main>
  )
}

export default Home