import './dashbord.css';
import {useState} from "react";
import chevron from  '../public2/Chevron.svg'
import blackchevron from  '../public2/blackvhevrolett.svg'
export default function Dashbord() {

    const [view , setview] = useState(2800)
    const [resive , setresive] = useState(350)
    const [subscribe , setsubscribe] = useState(1200)
    const [complitproje , setcomplitproje] = useState(820)
    const [barrasas , setbarrasas] = useState(false)
    const [barrasas2 , setbarrasas2] = useState(false)
    const [barrasas3 , setbarrasas3] = useState(false)
    const [barrasas4 , setbarrasas4] = useState(false)
    return (<div className="aval">

        <div className="dovvom">


            <div className='peleaval'>

                <div className='box'>


                        <div className='numer'>{view}</div>

                        <p className='mabblaq2'>بازدیدکنندگان</p>

                </div>
                <div className='box2'>
                    <div className='divvvhafkhat'>
                    <p className='numer'>{resive}</p>
                        <p className='pprice'>میلیون</p>
                </div>
                    <p className='mabblaq2'>مبلغ کلی دریافت شده</p>
                </div>
                <div className='box'>

                    <div className='numer'>{subscribe}</div>

                    <p className='mabblaq2'>تعداد کاربران</p>

                </div>

                <div className='box2'>

                    <div className='numer'>{complitproje}</div>

                    <p className='mabblaq2'>پروژه تکمیل شده</p>

                </div>


            </div>
            <div className='peldovvom'>

                <div className='nemodarradif'>
                      <p className='nemodarp'>نمودار ها</p>
                </div>
                <div className='nemodarradif2'>

                    <div className='dropdown'>

                    <p className='barasas'>بر اساس</p>

                        <img src={chevron} />
                    </div>

                    <div className='dropdown'>
                        <p className='barasas'>از ماه</p>
                        <img src={chevron} />

                    </div>

                    <div className='dropdown'>
                        <p className='barasas'>تا ماه</p>

                        <img src={chevron} />
                    </div>

                    <div className='dropdown'>
                        <p className='barasas'>سال</p>

                        <img src={chevron} />
                    </div>
                </div>


            </div>

        </div>


    </div>)
}