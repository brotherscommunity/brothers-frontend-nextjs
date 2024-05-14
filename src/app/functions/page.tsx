import AccountApprovalManagement from "@/Components/Main/AccountApprovalManagement";
import AdministrationManagement from "@/Components/Main/AdministrationManagement";
import BlogCatagoryGeneralManagement from "@/Components/Main/BlogCatagoryGeneralManagement";
import BlogCatagoryManagement from "@/Components/Main/BlogCatagoryManagement";
import LegislationManagement from "@/Components/Main/LegislationManagement";
import List from "@/Components/Small Pieces/List";
import TopPageHeader from "@/Components/Small Pieces/TopPageHeader";
import { TERMS_AND_CONDITIONS } from "@/constants";

export default function page() {

    //TODO: FETCH BLOG CATAGORIES THAT NEED TO BE APPROVED OR REJECTED
    // FAKE DATA
    const blogCatagories = [
        {
            id: 1,
            catagory: "Fulani Festival",
            catagoryCode: "CTG03 Nigerian Festivals",
            description: "festivals have great importance to fulanis"
        },
        {
            id: 2,
            catagory: "How to make money online",
            catagoryCode: "CTG10 Digital income source",
            description: "learning and teaching people how to make money online"
        }
    ]
    //TODO: FETCH ALL THE ACCOUNTS LIST THAT NEED TO BE APPROVED OR REJECTED
    // FAKE DATA
    const accountsList = ["Jhon Albert", "Smith david"]
    //TODO: FETCH THE LEGAL TERMS UPDATE HISTORY
    // FAKE DATA
    const updateHistory = [
        {
            date: "2/03/24",
            managerName: "Jhon Walter",
            article: "legal term article one",
            reason: "Introduction"
        },
        {
            date: "2/02/24",
            managerName: "Mike jason",
            article: "legal term article three",
            reason: "Project"
        },
        {
            date: "2/01/24",
            managerName: "Sara David",
            article: "legal term article six",
            reason: "Typo"
        }
    ]
    // TODO: FETCH THE TERMS AND CONDITIONS FROM THE DATABASE AND PASS IT TO THE LEGISLATION MANAGEMNT COMPONENT


    return (
        <main className="max-md:px-5 md:px-7 xl:px-20 mb-28">
            <TopPageHeader pageCode="PG32" pageName="Functions Page" pageDescription="In this page different managers of the website can assess their functions" />
            <div className="mt-6">
                {/* ADMINISTARTION MANAGER */}
                <List title="Administration Manager">
                    <AdministrationManagement />
                </List>
                 {/* BLOG CATAGORY GENERAL MANAGER */}
                <List title="Blog Category General Manager">
                    <BlogCatagoryGeneralManagement blogCatagoryLists={blogCatagories} />
                </List>
                {/* BLOG CATAGORY MANAGER */}
                <List title="Blog Category Manager">
                    <BlogCatagoryManagement />
                </List>
                {/* DEPARTMENT MANAGER */}
                <List title="Department Manager">
                    <div>

                    </div>
                </List>
                {/* ACCOUNT APPROVED MANAGER */}
                <List title="Account Approval Manager">
                    <AccountApprovalManagement accountsLits={accountsList} />
                </List>
                {/* LEGISLATION MANAGER */}
                <List title="Legislation Manager">
                    <LegislationManagement history={updateHistory} termsAndConditions={TERMS_AND_CONDITIONS} />
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
