import AdministrationManagement from "@/Components/Main/AdministrationManagement";
import BlogCatagoryGeneralManagement from "@/Components/Main/BlogCatagoryGeneralManagement";
import List from "@/Components/Small Pieces/List";
import TopPageHeader from "@/Components/Small Pieces/TopPageHeader";

export default function page() {
    return (
        <main className="max-md:px-10 md:px-7 xl:px-24 mb-20">
            <TopPageHeader pageCode="PG32" pageName="Functions Page" pageDescription="In this page different managers of the website can assess their functions" />
            <div className="mt-6">
                {/* ADMINISTARTION MANAGER */}
                <List title="Administration Manager">
                    <AdministrationManagement />
                </List>
                 {/* BLOG CATAGORY GENERAL MANAGER */}
                <List title="Blog Catagory General Manager">
                    <BlogCatagoryGeneralManagement />
                </List>
                {/* BLOG CATAGORY MANAGER */}
                <List title="Blog Catagory Manager">
                    <div>

                    </div>
                </List>
                {/* DEPARTMENT MANAGER */}
                <List title="Department Manager">
                    <div>

                    </div>
                </List>
                {/* ACCOUNT APPROVED MANAGER */}
                <List title="Account Approved Manager">
                    <div>

                    </div>
                </List>
                {/* LEGISLATION MANAGER */}
                <List title="Legislation Manager">
                    <div>

                    </div>
                </List>
                {/* GENERAL FUNCTION */}
                <List title="General Function">
                    <div>

                    </div>
                </List>
            </div>
        </main>
    )
}
