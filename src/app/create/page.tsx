import FormPost from "@/components/formPost"

const CreatePage = () => {
    return (
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8  flex flex-col mt-10  items-center justify-center ">
            <FormPost action = "Create"/>
        </div>
    )
}

export default CreatePage 
