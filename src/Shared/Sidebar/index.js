import { Link } from 'react-router-dom';

import style from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            <ul>
                <li>
                    <Link to='/clients'>Clientes</Link>
                </li>
                <li>
                    <Link to='/cabanas'>Cabanas</Link>
                </li>
            </ul>
        </div>
    );
  };
  
  export default Sidebar;