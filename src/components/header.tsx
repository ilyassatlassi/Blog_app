import Link from "next/link"
import Container from "./ui/container"
import { Button } from "./ui/button"
import { BookmarkFilledIcon } from '@radix-ui/react-icons'

const Header = () => {
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b bg-neutral-200">
      <Container>
        <div className="flex h-16 items-center justify-between w-full">
          <Link href="/">
           <BookmarkFilledIcon className="h-10 w-10"/>
          </Link>
          <Link href={'/create'}>
          <Button>
            Create a post
          </Button>
          </Link>

        </div>
      </Container>
    </header>
  )
}

export default Header