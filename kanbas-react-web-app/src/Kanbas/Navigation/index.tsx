import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { HiInbox } from "react-icons/hi2";
import { AiOutlineSetting } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import "../styles.css";

export default function KanbasNavigation() {
    return (
        <div id="wd-kanbas-navigation" className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
             style={{ height: '1000px' }}>
            <a id="wd-neu-link" target="_blank"
                href="https://www.northeastern.edu/"
                className="list-group-item bg-black border-0">
                <img src="data:image/png;base64,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" width="75px" />
            </a>

            <a id="wd-account-link" 
                href="#/Kanbas/Account"
                className="list-group-item text-white bg-black text-center border-0">
                <FaRegCircleUser className="fs-1 text text-white" /><br />
                Account
            </a>

            <a id="wd-dashboard-link" 
                href="#/Kanbas/Dashboard"
                className="list-group-item text-center border-0
            bg-white text-danger">
                <AiOutlineDashboard className="fs-1 text-danger" /><br />
                Dashboard
            </a>

            <a id="wd-course-link" 
                href="#/Kanbas/Courses"
                className="list-group-item text-white
            bg-black text-center border-0">
                <LiaBookSolid className="fs-1 text-danger" /><br />
                Courses
            </a>

            <a id="wd-calendar-link" 
                href="#/Kanbas/Calendar"
                className="list-group-item text-center border-0 
            bg-black text-white">
                <IoCalendarOutline className="fs-1 text-danger" /><br />
                Calendar
            </a>

            <a id="wd-inbox-link" 
                href="#/Kanbas/Inbox"
                className="list-group-item text-center border-0 
            bg-black text-white">
                <HiInbox className="fs-1 text-danger" /><br />
                Inbox
            </a>

            <a id="wd-labs-link" 
                href="#/Labs"
                className="list-group-item text-center border-0 
            bg-black text-white">
                <AiOutlineSetting className="fs-1 text-danger" /><br />
                Labs
            </a>
        </div>
    );
}
