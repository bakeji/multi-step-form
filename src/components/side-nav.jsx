import React from "react";
import { Link, useLocation } from "react-router-dom";
export default function SideNav(){
    const pagePaths = ["/", "/plans", "/add-ons", "/summary", "/thanks"]
    const location = useLocation();
  const activePage = location.pathname;
  const activePageIndex = pagePaths.indexOf(activePage);

    const pageNo =[1, 2, 3, 4]
    return(
    <div className="sidenav">
        <div className= {`steps step1 ${activePageIndex === 0 ? 'active' : ''}`}>
      
            <button>
                1
            </button>
   
        <span>
            <p>STEP 1</p>
            <p>YOUR INFO</p>
        </span>
        </div>

        <div className= {`steps ${activePageIndex === 1 ? 'active' : ''}`}>
      
            <button>
                2
            </button>
    
        <span>
            <p>STEP 2</p>
            <p>SELECT PLAN</p>
        </span>
        </div>


        <div className={`steps ${activePageIndex === 2 ? 'active' : ''}`}>
        
            <button>
                3
            </button>
    
        <span>
            <p>STEP 3</p>
            <p>ADD-ONS</p>
        </span>
        </div>


        <div className= {`steps ${activePageIndex === 3 || activePageIndex ===4 ? 'active' : ''}`}>
            <button>
                4
            </button>
        <span>
            <p>STEP 4</p>
            <p>SUMMARY</p>
        </span>
        </div>
    </div>

    )
}