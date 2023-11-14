"use client"
import { QueryClient,QueryClientProvider } from "@tanstack/react-query"
import { FC } from "react"

type ProviderProps = {
    children: React.ReactNode
}

const queryClient = new QueryClient()
const Providers: FC<ProviderProps> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>

  
  )
}

export default Providers