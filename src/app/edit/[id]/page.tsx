import BackButton from "@/components/backButton"
import FormPost from "@/components/formPost"

const EditPost = () => {
    return (

        <div className="mt-10 mx-auto w-full max-w-7xl relative px-4 sm:px-6 lg:px-8  ">
                <BackButton className="hidden sm:flex" />
                <FormPost action="Update" />
        </div>

    )
}

export default EditPost