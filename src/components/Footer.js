import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    
  //   <div><div classNameName="container">
  //   <footer classNameName="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
  //     <div classNameName="col-md-4 d-flex align-items-center">
  //       <a href="/" classNameName="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
  //       </a>
  //       <span classNameName="text-muted">© 2022 <i>GoFood</i>, Inc</span>
  //     </div>
  
  //     <ul classNameName="nav col-md-4 justify-content-end list-unstyled d-flex">
  //       <li classNameName="ms-3"><a classNameName="text-muted" href="/"><svg classNameName="bi" width="24" height="24"><use ></use></svg></a></li>
  //       <li classNameName="ms-3"><a classNameName="text-muted" href="/"><svg classNameName="bi" width="24" height="24"><use ></use></svg></a></li>
  //       <li classNameName="ms-3"><a classNameName="text-muted" href="/"><svg classNameName="bi" width="24" height="24"><use></use></svg></a></li>
  //     </ul>
  //   </footer>
  // </div>
  // </div>
  <div>
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
  <div className=" col-md-4 d-flex align-items-center">
    <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1 ">

    </Link>
    <span className="mb-3 mb-md-0 ">© 2024 Food_For_Foodie, Inc</span>
  </div>

  <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
    
  </ul>
</footer>
</div>
  )
}
