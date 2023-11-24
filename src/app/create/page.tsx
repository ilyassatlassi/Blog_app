import BackButton from "@/components/backButton"
import FormPost from "@/components/formPost"
import { z } from "zod"
import { formSchema } from "@/lib/FormValidatiopn"
import { useMutation } from "react-query"
import axios from "axios"

const CreatePage = () => {
    return (
        <div className="mx-auto w-full max-w-7xl relative px-4 sm:px-6 lg:px-8 mt-10">
            <BackButton className="hidden sm:flex" />
            <FormPost isEditing= {false}  action = "Create"/>
        </div>
    )
}

export default CreatePage 
