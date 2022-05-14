
import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import Link from 'next/link'
export default function Dropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
  
    return (
      <>
        <ul
          onClick={handleClick}
          className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link href="#"

                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                    <a>
                  {item.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
}
