import { Navbar } from "./_components/navbar";
import { Orgsidebar } from "./_components/org-sidebar";
import { Sidebar } from "./_components/sidebar";


interface DashBoardLayoutprops {
    children : React.ReactNode
}

const DashBoardLayout = ({children} : DashBoardLayoutprops)=>{
    return (
        <main className="h-full">
            <Sidebar/>
            <div className="pl-[60px] h-full">
                <div className="flex gap-x-3 h-full">
                    <Orgsidebar/>
                    <div className="h-full flex-1">
                        <Navbar/>
                        {children}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DashBoardLayout