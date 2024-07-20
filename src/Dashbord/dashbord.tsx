import './dashbord.css';
import {useState} from "react";
import chevron from '../public2/Chevron.svg'
import chevrobala from '../public2/Chevronbala.svg'

export default function Dashbord() {

    const [isOpen, setIsOpen] = useState(false);

    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);


    const [isRotated, setIsRotated] = useState(false);
    const items = ['Item 1', 'Item 2', 'Item 3'];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);

        console.log('dsidhsi')

    };
    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);

        console.log('dsidhsi')

    };
    const toggleDropdown3 = () => {
        setIsOpen3(!isOpen);

        console.log('dsidhsi')

    };


    const [view, setview] = useState(2800)
    const [resive, setresive] = useState(350)
    const [subscribe, setsubscribe] = useState(1200)
    const [complitproje, setcomplitproje] = useState(820)
    const [barrasas, setbarrasas] = useState(false)
    const [barrasas2, setbarrasas2] = useState(false)
    const [barrasas3, setbarrasas3] = useState(false)
    const [barrasas4, setbarrasas4] = useState(false)

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


                    <div className='dropdownzir'>


                        <div className='dropdown' onClick={toggleDropdown}>
                            <p style={isOpen ? {color: 'black'} : {color: ''}} className='barasas'>بر اساس</p>
                            <img src={isOpen === false ? chevron : chevrobala}/>
                        </div>

                        <div style={isOpen ? {display: 'flex'} : {display: 'none'}} className='opendropdoewn1'>

                            <div className='eyk'>
                                <p className='nevp'>بر اساس</p>
                                <img src={chevron}/>
                            </div>

                            <div className='eyk2'>
                                <p className='nevp'>بازدید آگهی</p>
                            </div>

                            <div className='eyk'>
                                <p className='nevp'>پروژه تکمیل شده</p>
                            </div>


                        </div>

                    </div>


                    <div className='dropdownzir'>
                        <div className='dropdown' onClick={toggleDropdown2}>
                            <p className='barasas'>از ماه</p>
                            <img src={isOpen2 === false ? chevron : chevrobala}/>
                        </div>

                        <div style={isOpen2 ? {display: 'flex'} : {display: 'none'}} className='opendropdoewn2'>

                            <div className='eyk'>
                                <p className='nevp'>بر اساس</p>
                                <img src={chevron}/>
                            </div>


                            <div className='eyk2'>
                                <p className='nevp'>بازدید آگهی</p>
                            </div>

                            <div className='eyk'>
                                <p className='nevp'>پروژه تکمیل شده</p>
                              </div>

                        </div>


                    </div>
                    <div className='dropdownzir'>

                        <div className='dropdown'  style={isOpen2 ? {display: 'flex'} : {display: 'none'}}>
                            <p className='barasas'>تا ماه</p>
                            <img src={isOpen3 === false ? chevron : chevrobala}/>
                        </div>



                        <div style={isOpen3 ? {display: 'flex'} : {display: 'none'}} className='opendropdoewn2'>

                            <div className='eyk'>
                                <p className='nevp'>بر اساس</p>
                                <img src={chevron}/>
                            </div>



                            <div className='eyk2'>
                                <p className='nevp'>بازدید آگهی</p>
                            </div>

                            <div className='eyk'>
                                <p className='nevp'>پروژه تکمیل شده</p>
                            </div>


                        </div>

                    </div>

                    <div className='dropdown'>
                        <p className='barasas'>سال</p>
                        <img src={chevron}/>
                    </div>

                </div>

            </div>

        </div>

    </div>)
}