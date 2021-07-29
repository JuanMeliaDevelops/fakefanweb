import './css/navBar.css'

function NavBar () {
    return (
        
        <div className="navbarmain">
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Teko:wght@500&display=swap');
          </style>

        <h1 className="logo" >FAKEFAN</h1> 
        <h3 className="subtitulo">THELABEL</h3>
        
        <ul>
          <li><a className="hovernormal" href="#tienda">TIENDA\\\\</a></li>
          <li><a className="hoverespecial" href="#drops">NEW DROPS||||</a></li>
          <li><a className="hovernormal" href="#connect">CONNECT+</a></li>
        </ul>
      </div>

    )
}

export default NavBar;
