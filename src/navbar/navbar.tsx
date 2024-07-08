import { Link, useLocation } from "react-router-dom"
import "./navbar.css"
import dash from "../public2/presention-chart.svg"
import info from "../public2/info-circle.svg"
import user from "../public2/profile-2user.svg"
import ticket from "../public2/messages.svg"
import support from "../public2/folder-favorite.svg"
import services from "../public2/note.svg"
import news from "../public2/book-saved.svg"
import transaction from "../public2/card-pos.svg"
import user_edeit from "../public2/user-edit.svg"
import chart_black from "../public2/presention-chart-black.svg"
export default function Navbar() {
    const loc = useLocation()
    const navabr = [
        {
            svg: chart_black,
            p: "داشبورد",
            path: "/Dashbord"
        },
        {
            svg: info,
            p: "اطلاعات",
            path: "/Information"
        },
        {
            svg: user,
            p: "کاربران",
            path: "/Users"
        },
        {
            svg: ticket,
            p: "تیکت ها",
            path: "/Ticket"
        },
        {
            svg: support,
            p: "حمایت ها",
            path: "/Support"
        },
        {
            svg: services,
            p: "خدمات",
            path: "/Services"
        },
        {
            svg: news,
            p: "آپلود اخبار",
            path: "/AplouaNews"
        },
        {
            svg: transaction,
            p: "تراکنش ها",
            path: "/Transaction"
        },
    ]
    return (
        <div className="navbar_all">
            <div className="navbar_all2">
                <div className="admin_prof">
                    <div className="admin_prof_cercle">
                        <img src={user_edeit} alt="" width={61} height={61} />
                    </div>
                    <p className="admin_name">اسم ادمین</p>
                    <button className="admin_prof_btn">مدیریت کل</button>
                </div>
                <div className="navbar_item">
                    {navabr.map((item, index) => {
                        return (
                            <Link to={item.path} key={index} style={{
                                textDecoration: "none"
                            }}>
                                <div
                                    className="admi_navbar_map_div"
                                >
                                    <img
                                        style={{
                                            ...(loc.pathname.includes(item.path)
                                                ? {
                                                    filter:
                                                        "brightness(0) saturate(100%) invert(14%) sepia(99%) saturate(2479%) hue-rotate(319deg) brightness(89%) contrast(90%)", borderRight: "2px solid #961D4E"
                                                }
                                                : {}),
                                        }}
                                        src={item.svg}
                                        alt={item.p}
                                    />
                                    <span
                                        className="admi_map_p "
                                        style={{
                                            ...(loc.pathname.includes(item.path)
                                                ? {
                                                    color:"#232323"
                                                }
                                                : {}),
                                        }}
                                    >
                                        {item.p}
                                    </span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}