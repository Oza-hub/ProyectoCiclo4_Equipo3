import React from 'react'


const Header = ({count, setCount}) => {

  const handleClick = () => {
    setCount(count => count+1);
  };

  return (
    <> 
      <header>
        <h1 className="titulo">
          Tienda Virtual <span>"Desarrollo WEB"</span>
          
          <div>
          <a>
              <img src="./Tienda.png" className="logo" alt="Vite logo"/>
          </a>
          </div>
                   
          <div>
            <span>TIENDA EQUIPO 3</span>
          </div>
        <div>
          <div>
            <button
              className="boton w-100" 
              onClick={handleClick}
            >
                Haz Click
            </button>
          </div>

          Visitante # {count}
        </div>
        </h1>
      </header>
    </>
  )
}

export default Header