import Link from 'next/link';



const HeaderC = () => {
    return(
        <>
            <header>
                <div className="row">
            <div className="col-sm-3">
                <nav>
                    <a className="navbar-brand" href="#" >
                    <img src="logo.png" width="100" height="100" alt="" />
                     </a>
                 </nav>
             </div>



            <div className="col-sm-2">
                
            
                <button type="button" className="btn btn-dark my-5 my-sm-5" data-toggle="cupon1" data-target="#modalcupon1">Cupón 1</button>
                <button type="button" className="btn btn-outline-dark my-5 my-sm-5" data-toggle="cupon2" data-target="#modalcupon2">Cupón 2</button>
           
            </div>


                     <div className="col-sm-1"></div>
                     <form className="form-inline">               
                        <input className="form-control mr-sm-1" type="search" placeholder="Buscador" aria-label="Search" />
                        <button className="btn btn-outline-dark my-5 my-sm-5" type="submit">Buscar</button>
                    </form>
                </div>
            </header>

            <style jsx>{`
                
                header {
                    background-color: #AB1500;
                    height: 100px;
                    padding: 0px;
                    
                }
                btn:hover {
                    opacity:0.7;
                    border: 1px solid black;
                  }
                `}</style>   
        </>
    );
}

export default HeaderC;

