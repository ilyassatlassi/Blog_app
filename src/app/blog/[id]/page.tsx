import ButtonActions from "@/components/ButtonActions"
import BackButton from "@/components/backButton"

const BlogPostPage = () => {
    return (
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8  mt-10">
            <BackButton />
            <h2 className='text-2xl font-bold'>Post One</h2>
            <p className="text-slate-700">Post Content</p>
            <ButtonActions/>
        </div>
    )
}

export default BlogPostPage