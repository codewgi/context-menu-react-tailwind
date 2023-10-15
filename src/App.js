import logo from './logo.svg';
import "./css/style.css";
import { useEffect, useRef } from 'react';
import Card from './components/Card';
import ContextMenu from './components/ContextMenu';

function App() {
  const card = useRef()
  const contextMenu = useRef();

  useEffect(() => {
    const handleRigthClick = (e) => {
      e.preventDefault()
      if(card.current.contains(e.target)) {
        contextMenu.current.classList.remove("hidden");
        contextMenu.current.style.left = `${e.clientX}px`;
        contextMenu.current.style.top = `${e.clientY}px`;
      } else {
        contextMenu.current.classList.add("hidden")
      }
    }
    window.addEventListener("contextmenu", handleRigthClick)

    const handleCloseContextMenu = (e) => {
      if(!contextMenu.current.contains(e.target)) {
        contextMenu.current.classList.add("hidden")
      }
    }
    window.addEventListener("click", handleCloseContextMenu)

    return () => {
      window.removeEventListener("contextmenu", handleRigthClick)
      window.removeEventListener("click", handleCloseContextMenu)
    }
  })

  return (
    <div className="w-full grid place-content-center min-h-screen bg-[#151515] p-72 overflow-hidden">
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
