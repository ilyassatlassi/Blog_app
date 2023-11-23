import BackButton from "@/components/backButton"
import FormPost from "@/components/formPost"

const CreatePage = () => {
    return (
        <div className="mx-auto w-full max-w-7xl  relative  px-4 sm:px-6 lg:px-8  mt-10  ">
            <BackButton className="hidden sm:flex" />
            <FormPost action = "Create"/>
        </div>
    )
}

export default CreatePage 
