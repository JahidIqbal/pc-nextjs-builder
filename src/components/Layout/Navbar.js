import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar bg-base-300">
            <div className="flex-1 px-2 lg:flex-none">
                <a className="text-lg font-bold">PC</a>
            </div>
            <div className="flex justify-end flex-1 px-2">
                <div className="flex items-stretch">
                    <a className="btn btn-ghost rounded-btn">PC BUilder</a>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost rounded-btn">Categories<FontAwesomeIcon
                            icon={faCaretDown}
                        /></label>
                        <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                            <li><Link href="/cpu">CPU / Processor</Link></li>
                            <li><Link href="/motherboard">Motherboard</Link></li>
                            <li><Link href="/ram">RAM</Link></li>
                            <li><Link href="/powersupply">Power Supply Unit</Link></li>
                            <li><Link href="/storage">Storage Device</Link></li>
                            <li><Link href="/monitor">Monitor</Link></li>
                            <li><Link href="/others">Others</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;