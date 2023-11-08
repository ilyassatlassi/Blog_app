import BackButton from "@/components/backButton"
import FormPost from "@/components/formPost"

const EditPost = () => {
    return (

        <div className="mt-10 container relative px-4 sm:px-6 lg:px-8  ">
            <div className="absolute top-0 hidden md:flex ">
                <BackButton />
            </div>
            <div className="flex flex-col items-center justify-center ">
                <FormPost action="Update" />
            </div>
        </div>

    )
}

export default EditPost