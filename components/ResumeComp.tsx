import Image from 'next/image'
import React from 'react'

export default function ResumeComp() {
    return (
        <div>
            <div className="card-body " style={{ maxHeight: "100%" }}>

                <div className="d-flex">

                </div>
                <h4 className="text-utama mt-2 text-center "><b>Resume</b></h4>
                <div className="d-flex justify-content-start mb-3 mt-0">
                    <div className="card me-2 color-utama" style={{ width: '5px', height: 'auto' }}></div>
                    <h4 className="text-white mt-2 text-white"><b><span className='text-utama'>Edu</span>cation</b></h4>
                </div>
                <div className="d-flex justify-content-start gap-3">

                    <div className="col-5 ">
                        <div className="card-glass"><div className="meta">
                            <div className="p-3">
                                <div className="d-flex ">
                                    <div className="col-2 d-flex justify-content-center">
                                        <Image className='me-2 logo-amikom' src="logo-amikom.svg" width={30} height={30} alt="" />
                                    </div>
                                    <div className="col d-flex align-items-start flex-column">
                                        <div className="card  card-year-campus mb-1 " style={{ borderRadius: "7px" }}>
                                            <small className='text-utama' style={{ fontSize: "11px" }}>
                                                2020 - 2023
                                            </small>
                                        </div>
                                        <h6 className="text-white mb-0">AMIKOM University Yogyakarta</h6>
                                        <small className='text-second'>Computer Science</small>
                                        <small className='text-second'>GPA : 3.99/4.00 </small>
                                        <small className='text-utama mt-1'><i className="fa-solid fa-medal me-2 text-utama"></i>Best Graduate</small>

                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-5 ">
                        <div className="card-glass h-100"><div className="meta">
                            <div className="p-3">
                                <div className="d-flex ">
                                    <div className="col-2 d-flex justify-content-center">
                                        <Image className='me-2 logo-amikom' src="logo-amikom.svg" width={30} height={30} alt="" />
                                    </div>
                                    <div className="col d-flex align-items-start flex-column">
                                        <div className="card  card-year-campus mb-1 " style={{ borderRadius: "7px" }}>
                                            <small className='text-utama' style={{ fontSize: "11px" }}>
                                                2016 - 2019
                                            </small>
                                        </div>
                                        <h6 className="text-white mb-0">SMK Tamansiswa Jetis</h6>
                                        <small className='text-second'>Multimedia</small>
                                        <small className='text-utama mt-1'><i className="fa-solid fa-medal me-2 text-utama"></i>Top 10 Best Graduate</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-start mb-3 mt-4">
                    <div className="card me-2 color-utama" style={{ width: '5px', height: 'auto' }}></div>
                    <h4 className="text-white mt-2 text-white"><b><span className='text-utama'> Work</span> Experience</b></h4>
                </div>
                <div className="card bg-transparent">

                    <div className="card-body">

                        <div className="road-map text-white">
                            <div className="road-map-wrapper">


                                <div className="timeline-row">
                                    <div className="timeline-items">
                                        <div className="item">
                                            <div className="timeline-item timeline-not-done">
                                                <div className="timeline-date " data-animation="{&quot;animation&quot;:&quot;&quot;,&quot;duration&quot;:&quot;slow&quot;,&quot;delay&quot;:&quot;&quot;}">
                                                    <span className="date">
                                                        <small>
                                                            Jul 2022 - Des 2023
                                                        </small>
                                                    </span>
                                                </div>
                                                <div className="timeline-info animated ova-move-up" data-animation="{&quot;animation&quot;:&quot;ova-move-up&quot;,&quot;duration&quot;:&quot;&quot;,&quot;delay&quot;:100}">
                                                    <h3 className="timeline-title text-utama">Forum Asisten Amikom </h3>
                                                    <ul className="timeline-content">
                                                        <li>Full Stack Web</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="timeline-item timeline-not-done">
                                                <div className="timeline-date " data-animation="{&quot;animation&quot;:&quot;&quot;,&quot;duration&quot;:&quot;slow&quot;,&quot;delay&quot;:&quot;&quot;}">
                                                    <span className="date">
                                                        <small>
                                                            Mar 2023 - Jul 2023
                                                        </small>
                                                    </span>
                                                </div>
                                                <div className="timeline-info animated ova-move-up" data-animation="{&quot;animation&quot;:&quot;ova-move-up&quot;,&quot;duration&quot;:&quot;&quot;,&quot;delay&quot;:100}">
                                                    <h3 className="timeline-title text-utama">MSV Studio</h3>
                                                    <ul className="timeline-content">
                                                        <li>3D Modelling</li>
                                                        <li ><small>
                                                            <i> Intern</i>
                                                        </small>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="timeline-row">
                                    <div className="timeline-items">
                                        <div className="item">
                                            <div className="timeline-item timeline-not-done">
                                                <div className="timeline-date " data-animation="{&quot;animation&quot;:&quot;&quot;,&quot;duration&quot;:&quot;slow&quot;,&quot;delay&quot;:&quot;&quot;}">
                                                    <span className="date">
                                                        <small>
                                                            May 2019 - Aug 2020
                                                        </small>
                                                    </span>
                                                </div>
                                                <div className="timeline-info ova-invisible" data-animation="{&quot;animation&quot;:&quot;ova-move-up&quot;,&quot;duration&quot;:&quot;&quot;,&quot;delay&quot;:100}">
                                                    <h3 className="timeline-title text-utama">PT SIAP CETAK INSPIRATION</h3>
                                                    <ul className="timeline-content">
                                                        <li>Graphic Design</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="item">
                                            <div className="timeline-item timeline-not-done">
                                                <div className="timeline-date " data-animation="{&quot;animation&quot;:&quot;&quot;,&quot;duration&quot;:&quot;slow&quot;,&quot;delay&quot;:&quot;&quot;}">
                                                    <span className="date">
                                                        <small>Jul 2018 - Sep 2018</small>
                                                    </span>
                                                </div>
                                                <div className="timeline-info ova-invisible" data-animation="{&quot;animation&quot;:&quot;ova-move-up&quot;,&quot;duration&quot;:&quot;&quot;,&quot;delay&quot;:300}">
                                                    <h3 className="timeline-title text-utama">ADiTV Jogja</h3>
                                                    <ul className="timeline-content">
                                                        <li>News Producer</li>
                                                        <li ><small>
                                                            <i> Intern</i>
                                                        </small>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-start mb-3 mt-4">
                    <div className="card me-2 color-utama" style={{ width: '5px', height: 'auto' }}></div>
                    <h4 className="text-white mt-2 text-white"><b><span className='text-utama'>Project</span> And Volunteer</b></h4>

                </div>
                <div className="d-flex justify-content-start flex-wrap">

                    <div className="col-4 ps-3 mb-3">
                        <div className="card-glass"><div className="meta">
                            <div className="p-3">
                                <div className="d-flex ">
                                    <div className="col-2 d-flex justify-content-center">
                                        <Image className='me-2 logo-amikom' src="logo-amikom.svg" width={30} height={30} alt="" />
                                    </div>
                                    <div className="col d-flex align-items-start flex-column">

                                        <h6 className="text-utama mb-0">BOIM AMIKOM 2024 </h6>
                                        <small className='text-white mb-1'>WEB Development</small>
                                        <small className='mb-2'>

                                            <small className='text-second'>
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis nam
                                            </small>
                                        </small>
                                        <div className="card  card-year-volunteer mb-1 " style={{ borderRadius: "7px" }}>
                                            <small className='' style={{ fontSize: "11px" }}>
                                                2020 - 2023
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-4 ps-3 mb-3">
                        <div className="card-glass"><div className="meta">
                            <div className="p-3">
                                <div className="d-flex ">
                                    <div className="col-2 d-flex justify-content-center">
                                        <Image className='me-2 logo-amikom' src="logo-amikom.svg" width={30} height={30} alt="" />
                                    </div>
                                    <div className="col d-flex align-items-start flex-column">

                                        <h6 className="text-utama mb-0">BOIM AMIKOM 2023 </h6>
                                        <small className='text-white mb-1'>WEB Development</small>
                                        <small className='mb-2'>

                                            <small className='text-second'>
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis nam
                                            </small>
                                        </small>
                                        <div className="card  card-year-volunteer mb-1 " style={{ borderRadius: "7px" }}>
                                            <small className='' style={{ fontSize: "11px" }}>
                                                2020 - 2023
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-4 ps-3 mb-3">
                        <div className="card-glass"><div className="meta">
                            <div className="p-3">
                                <div className="d-flex ">
                                    <div className="col-2 d-flex justify-content-center">
                                        <Image className='me-2 logo-amikom' src="logo-amikom.svg" width={30} height={30} alt="" />
                                    </div>
                                    <div className="col d-flex align-items-start flex-column">

                                        <h6 className="text-utama mb-0">EXPO AMIKOM 2022</h6>
                                        <small className='text-white mb-1'>Equipment Division and Web</small>
                                        <small className='mb-2'>

                                            <small className='text-second'>
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis nam
                                            </small>
                                        </small>
                                        <div className="card  card-year-volunteer mb-1 " style={{ borderRadius: "7px" }}>
                                            <small className='' style={{ fontSize: "11px" }}>
                                                2020 - 2023
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-4 ps-3 mb-3">
                        <div className="card-glass"><div className="meta">
                            <div className="p-3">
                                <div className="d-flex ">
                                    <div className="col-2 d-flex justify-content-center">
                                        <Image className='me-2 logo-amikom' src="logo-amikom.svg" width={30} height={30} alt="" />
                                    </div>
                                    <div className="col d-flex align-items-start flex-column">

                                        <h6 className="text-utama mb-0">Pemilwa AMIKOM 2022</h6>
                                        <small className='text-white mb-1'>Graphic Design</small>
                                        <small className='mb-2'>

                                            <small className='text-second'>
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis nam
                                            </small>
                                        </small>
                                        <div className="card  card-year-volunteer mb-1 " style={{ borderRadius: "7px" }}>
                                            <small className='' style={{ fontSize: "11px" }}>
                                                2020 - 2023
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div ></div >
    )
}
