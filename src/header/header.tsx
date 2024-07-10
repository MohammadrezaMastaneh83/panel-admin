import "./header.css";
import dashbordSvg from "../public2/presention-chart.svg"
import zangSvg from "../public2/notification.svg"
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import infocercle from "../public2/info-circle-gray.svg"
import profile from "../public2/profile-2user-gray.svg"
import message from "../public2/messages-gray.svg"
import folder from "../public2/folder-favorite-gray.svg"
import note from "../public2/note_gray.svg"
import book from "../public2/book-saved_gray.svg"
import card from "../public2/book-saved_gray.svg"
export default function Header() {
    let ali;
    let svg;
    const location = useLocation();
    console.log(location.pathname);
    if (location.pathname === "/Information") {
        ali = "اطلاعات"
        svg = infocercle
    } else {
        if (location.pathname === '/Users') {
            ali = "کاربران"
            svg = profile
        } else {
            if (location.pathname === '/Ticket') {
                ali = "تیکت ها"
                svg = message
            }else {
                if (location.pathname === '/Dashbord') {
                    ali = "داشبورد"
                    svg = dashbordSvg
                }else {
                    if (location.pathname === '/Support') {
                        ali = "حمایت ها"
                        svg = folder
                    }else {
                        if (location.pathname === '/Services') {
                            ali = "خدمات"
                            svg = note
                        }else {
                            if (location.pathname === '/AplouaNews') {
                                ali = "آپلود اخبار"
                                svg = book
                            }else {
                                if (location.pathname === '/Transaction') {
                                    ali = "تراکنش ها"
                                    svg = card
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return (

        <div className="header_all">
            <div className="header_right_div">
                <div className="header_right_div_dad">
                    <img src={svg} alt="" width={28} height={28} />
                    <p className="header_p">{ali}
                    </p>
                </div>
            </div>
            <div className="header_left_div">
                <img src={zangSvg} alt="" width={24} height={24} />
            </div>
        </div>
    )
}