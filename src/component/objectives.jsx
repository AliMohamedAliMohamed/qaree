import React from 'react';
import b from './Reading View.png'
import c from './category.png'
import d from './community.png'
import x from './library (1).png'
import e from './down.png'
const Objectives = () => {
    return (
      <>
        <h1 className="text-6xl mt-7 text-slate-600 text-center">
          Objectives
        </h1>
        <div>
          <div className="ml-12 text-xl text-slate-600 mt-20 ">
            <ul className="flex ml-2 mr-20 justify-between text-center">
              <li>
                Categorization
                <img src={c} alt="" className="mr-1 max-h-80 mt-10" />
              </li>
              <li>
                Your Own Library
                <img src={x} alt="" className=" mx-10 max-h-80 mt-10" />
              </li>
              <li>
                Community
                <img src={d} alt="" className="mx-10 max-h-80 mt-10" />
              </li>
              <li>
                Intractive Reading 
                <img src={b} alt="" className=" mx-10 max-h-80 mt-10" />
              </li>
              <li>
                Track Reading Progress
                <img src={e} alt="" className=" mx-10 max-h-80 mt-10" />
              </li>
            </ul>
          </div>
        </div>
      </>
    );
}
 
export default Objectives;