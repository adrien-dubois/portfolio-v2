import { Outlet } from 'react-router-dom';
import SwitchLanguage from '../../translations/SwitchLanguage';
import Sidebar from '../Sidebar/Sidebar';
import { App } from './Layout.elements';

const Layout = () => {
  return  (
      <App>
        <Sidebar/>
        {/* <SwitchLanguage/> */}
        <div className="page">
          <span className="tags top-tags">&lt;body&gt;</span>

            <Outlet/>

          <span className="tags bottom-tags">
            &lt;/body&gt;
            <br/>
            <span className="bottom-tag-html">&lt;/html&gt;</span>
          </span>
        </div>
      </App>
  )
}

export default Layout