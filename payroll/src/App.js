import Iconbar from './Configurations/Iconbar/Iconbar';
import LogoConfig from "./Configurations/logo/LogoConfig";
import Sidebar from "./Configurations/navigation/Sidebar";
import Profile from "./Configurations/profile/Profile";
import { submenus } from './Configurations/navigation/Menu'

import {tableContent} from './Configurations/tables/Tabledata'
import TableComponent from "./Configurations/tables/TableComponent";
import Layout from './Layouts/Layout';
import Head from './Configurations/Head/Head'


function App() {
  return (
    <div className="App">
     {/* <Iconbar />
     <LogoConfig />
     <Profile/>
     <Sidebar menuConfigs={submenus} /> */}
     {/* <SearchableComp  searchKey="name" config={SearchInputConfig} /> */}
     
     {/* <TableComponent tableConfig= {tableContent} data={data} /> */}
     <Layout />

     {/* <Head /> */}
    </div>
  );
}

export default App;
