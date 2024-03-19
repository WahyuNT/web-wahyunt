import { width } from '@fortawesome/free-solid-svg-icons/fa0'
import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function AbouteComp() {
    const [about, setAbout] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://portodb.wahyunt.me/api/about');
            setAbout(response.data.data);

        };
        fetchData();
    }, []);

    return (
        <div>
            <div className="card-body " style={{ maxHeight: "100%" }}>
                <div className="d-flex justify-content-start mb-2 mt-0">

                    <div className="card me-2 color-utama" style={{ width: '5px', height: 'auto' }}></div>
                    <h4 className="text-white mt-2 text-white"><b><span className='text-utama'>About</span> Me</b></h4>
                </div>
                {about.map((item: { desc: string }) => {
                    return (
                        <p className="text-second ps-3">{item.desc} </p>
                    )
                })}
                < div className="d-flex justify-content-start mb-3" >

                    <div className="card me-2 color-utama" style={{ width: '5px', height: 'auto' }}></div>
                    <div className="d-flex align-items-start flex-wrap">
                        <h4 className="text-white mt-2 text-white"><b><span className='text-utama'>Hard </span> Skill</b></h4>

                    </div>
                </div>

                <div className="d-flex justify-content-start flex-wrap ps-3">
                    <div className="avatar avatar-skill me-2 mb-2 pull-up" data-popup="tooltip-custom" data-bs-placement="top" aria-label="Blender" data-bs-original-title="Blender">
                        <img src="/img/icon/blender.png" className="rounded" alt="" />
                    </div>
                    <div className="avatar avatar-skill me-2 mb-2">
                        <img src="/img/icon/express.png" className="rounded" alt="" />
                    </div>
                    <div className="avatar avatar-skill me-2 mb-2">
                        <img src="/img/icon/figma.png" className="rounded" alt="" />
                    </div>
                    <div className="avatar avatar-skill me-2 mb-2">
                        <img src="/img/icon/js.png" className="rounded" alt="" />
                    </div>
                    <div className="avatar avatar-skill me-2 mb-2">
                        <img src="/img/icon/laravel.png" className="rounded" alt="" />
                    </div>
                    <div className="avatar avatar-skill me-2 mb-2">
                        <img src="/img/icon/react.png" className="rounded" alt="" />
                    </div>
                    <div className="avatar avatar-skill me-2 mb-2">
                        <img src="/img/icon/unity.png" className="rounded" alt="" />
                    </div>
                    <div className="avatar avatar-skill me-2 mb-2">
                        <img src="/img/icon/vue.png" className="rounded" alt="" />
                    </div>
                    <div className="avatar avatar-skill me-2 mb-2">
                        <img src="/img/icon/ue.png" className="rounded" alt="" />
                    </div>
                    <div className="avatar avatar-skill me-2 mb-2">
                        <img src="/img/icon/corel.png" className="rounded" alt="" />
                    </div>
                    <div className="avatar avatar-skill me-2 mb-2">
                        <img src="/img/icon/mongo.png" className="rounded" alt="" />
                    </div>
                    <div className="avatar avatar-skill me-2 mb-2">
                        <img src="/img/icon/premiere.png" className="rounded" alt="" />
                    </div>
                    <div className="avatar avatar-skill me-2 mb-2">
                        <img src="/img/icon/ae.png" className="rounded" alt="" />
                    </div>
                    <div className="avatar avatar-skill me-2 mb-2">
                        <img src="/img/icon/ps.png" className="rounded" alt="" />
                    </div>


                </div>
                <div className="d-flex justify-content-start mb-3 mt-3">

                    <div className="card me-2 color-utama" style={{ width: '5px', height: 'auto' }}></div>
                    <div className="d-flex align-items-start flex-wrap">
                        <h4 className=" mt-2  text-white"> <b><span className='text-utama'>What</span> I'm Doing</b></h4>

                    </div>
                </div>

                <div className="d-flex justify-content-start flex-wrap ps-3">
                    <div className="col-4 pe-2 mb-2">
                        <div className="card-glass"><div className="meta">
                            <div className="p-3">
                                <div className="d-flex ">
                                    <div className="col-2 ">
                                        <i className="fa-solid fa-globe fa-xl text-utama"></i>
                                    </div>
                                    <div className="col d-flex align-items-start flex-wrap">

                                        <h6 className="text-white fw-bold mb-0 ">Web Developer</h6>
                                        <small className="text-second text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, facere  </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-4 pe-2 mb-2">
                        <div className="card-glass"><div className="meta">
                            <div className="p-3">
                                <div className="d-flex ">
                                    <div className="col-2 ">
                                        <i className="fa-solid fa-puzzle-piece fa-xl text-utama"></i>
                                    </div>
                                    <div className="col d-flex align-items-start flex-wrap">

                                        <h6 className="text-white fw-bold mb-0">Game Developer</h6>
                                        <small className="text-second text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, facere  </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-4 pe-2 mb-2">
                        <div className="card-glass"><div className="meta">
                            <div className="p-3">
                                <div className="d-flex ">
                                    <div className="col-2 ">
                                        <i className="fa-solid fa-pen-nib fa-xl text-utama"></i>
                                    </div>
                                    <div className="col d-flex align-items-start flex-wrap">

                                        <h6 className="text-white fw-bold mb-0">UI/UX</h6>
                                        <small className="text-second text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, facere  </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-4 pe-2 mb-2">
                        <div className="card-glass"><div className="meta">
                            <div className="p-3">
                                <div className="d-flex ">
                                    <div className="col-2 ">
                                        <i className="fa-solid fa-palette fa-xl text-utama"></i>
                                    </div>
                                    <div className="col d-flex align-items-start flex-wrap">

                                        <h6 className="text-white fw-bold mb-0">Graphic Design</h6>
                                        <small className="text-second text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, facere  </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-4 pe-2 mb-2">
                        <div className="card-glass"><div className="meta">
                            <div className="p-3">
                                <div className="d-flex ">
                                    <div className="col-2 ">
                                        <i className="fa-solid fa-cubes fa-xl text-utama"></i>
                                    </div>
                                    <div className="col d-flex align-items-start flex-wrap">

                                        <h6 className="text-white fw-bold  mb-0">3D Modelling</h6>
                                        <small className="text-second text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, facere  </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-4 pe-2 mb-2">
                        <div className="card-glass"><div className="meta">
                            <div className="p-3">
                                <div className="d-flex ">
                                    <div className="col-2 ">
                                        <i className="fa-solid fa-film fa-xl text-utama"></i>
                                    </div>
                                    <div className="col d-flex align-items-start flex-wrap">

                                        <h6 className="text-white fw-bold mb-0">Motion Graphic</h6>
                                        <small className="text-second text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, facere  </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>

            </div>
        </div >
    )
}
