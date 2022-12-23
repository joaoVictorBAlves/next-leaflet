import Footer from "../Footer";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Sidebar />
            <main style={{marginTop: "58px"}}>
                <div className=" pt-4 d-flex justify-content-center">
                    {children}
                </div>
            </main>
            <Footer />
        </div >

    );
}

export default Layout;