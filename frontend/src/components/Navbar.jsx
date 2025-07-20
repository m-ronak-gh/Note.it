import { Link } from "react-router";
import {NotebookIcon, PlusIcon} from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
        <div className="mx-auto max-w-6xl p-4">
            <div className="flex justify-between items-center">
                <div className="flex px-2 mb-2">
                    <NotebookIcon className="size-10 text-primary" />
                    <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">Note.it</h1>
                </div>
                <div className="flex items-center gap-4">
                    <Link to="/create" className="btn btn-primary rounded-full">
                        <PlusIcon className="size-5" />
                        <span>New Note</span>
                    </Link>
                </div>
            </div>
        </div>
    </header>
  );
}

export default Navbar;