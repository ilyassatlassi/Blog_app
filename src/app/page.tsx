import PostCard from "@/components/PostCard";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="sm:container p-4 gap-4 grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 mt-10 ">
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
    </main>
  )
}
