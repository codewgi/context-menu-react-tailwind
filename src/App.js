import logo from './logo.svg';
import './css/style.css';
import Card from './components/card';
import ContextMenu from './components/ContextMenu';
import { useContext, useEffect, useRef, useState } from 'react';

function App() {
  // const [contextMenuPosition, setContextMenuPosition] = useState(false);
  const contextMenu = useRef();
  const card = useRef();

  useEffect(() => {
    const handleRightClick = (e) => {
      e.preventDefault();
      // setContextMenuPosition([e.pageX,e.pageY]);
      if(card.current.contains(e.target)) {
        contextMenu.current.classList.remove("hidden")
        contextMenu.current.style.left = `${e.clientX}px`
        contextMenu.current.style.top = `${e.clientY}px`
      } else {
        contextMenu.current.classList.add("hidden")
      }
    }
    window.addEventListener("contextmenu", handleRightClick);
    
    const handleCloseContextMenu = (e) => {
      if(!contextMenu.current.contains(e.target)) {
        contextMenu.current.classList.add("hidden")
      }
    }
    window.addEventListener("click", handleCloseContextMenu);

    return () => {
      window.removeEventListener("contextmenu", handleRightClick);
      window.removeEventListener("click", handleCloseContextMenu);
    }
  }, [])

  return (
    <div className='w-full grid place-content-center min-h-screen bg-[#151515] p-72 overflow-x-hidden'> 
      <div className='w-fit' ref={card}>
        <Card/>
      </div>
      <div className='w-fit absolute hidden' ref={contextMenu}>
        <ContextMenu/>
      </div>
    </div>
  );
}

export default App;
