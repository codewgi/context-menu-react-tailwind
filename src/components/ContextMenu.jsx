import { faBookmark, faCartShopping, faEye, faMap, faMessage, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContextMenu = () => {
    return ( 
        <div className={`z-20 w-80 rounded-md bg-[#202020] text-neutral-300`}>
            <button className="w-full px-5 py-3 hover:bg-[#181818] duration-200 flex space-x-4 items-center">
                <FontAwesomeIcon icon={faEye}/>
                <span>
                    View Detail
                </span>
            </button>
            <button className="w-full px-5 py-3 hover:bg-[#181818] duration-200 flex space-x-4 items-center">
                <FontAwesomeIcon icon={faMap}/>
                <span>
                    Detail Location
                </span>
            </button>
            <button className="w-full px-5 py-3 hover:bg-[#181818] duration-200 flex space-x-4 items-center">
                <FontAwesomeIcon icon={faShare}/>
                <span>
                    Share
                </span>
            </button>
            <button className="w-full px-5 py-3 hover:bg-[#181818] duration-200 flex space-x-4 items-center">
                <FontAwesomeIcon icon={faMessage}/>
                <span>
                    Discussion
                </span>
            </button>
            <button className="w-full px-5 py-3 hover:bg-[#181818] duration-200 flex space-x-4 items-center">
                <FontAwesomeIcon icon={faCartShopping}/>
                <span>
                    Add to cart
                </span>
            </button>
            <button className="w-full px-5 py-3 hover:bg-[#181818] duration-200 flex space-x-4 items-center">
                <FontAwesomeIcon icon={faBookmark}/>
                <span>
                    Save
                </span>
            </button>
        </div>
     );
}
 
export default ContextMenu;
