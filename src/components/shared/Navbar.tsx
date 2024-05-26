import { MoveRight, NotepadText } from "lucide-react"
import { Button } from "../ui/button"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 h-14 w-auto px-8">
        <div className="flex items-center">
            <h1 className="font-bold text-2xl text-slate-100">My <span className="text-green-400">Notes</span></h1><NotepadText className="fill-green-600 ml-1 size-7"/>
        </div>
        <div className="flex items-center">
        <Button>See Notes<MoveRight className="ml-2"/></Button>
        </div>
    </nav>
  )
}

export default Navbar