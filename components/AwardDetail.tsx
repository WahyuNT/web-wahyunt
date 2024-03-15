import { width } from '@fortawesome/free-solid-svg-icons/fa0'
import Link from 'next/link'
import React from 'react'

export default function AwardDetail() {
    return (
        <div className='p-2'>
            <div className="card-body  px-1" style={{ maxHeight: "100%" }}>

                <div className="d-flex align-items-center justify-content-start mb-0">
                    <Link href="/portofolio">
                        <button className='btn card-sosmed btn-icon me-2 text-utama'>
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                    </Link>
                    <div className="col ">
                        <div className="d-flex justify-content-center ">
                            <div className="card h-100 bg-transparent card-border px-3">
                                <div className="d-flex justify-content-center align-align-items-center">
                                    <h5 className="text-utama my-1"><b>Best of Graduate of periode 89</b></h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="d-flex">
                <div className="col-10 ">
                    <div className="card  bg-transparent ">
                        <img src="https://i.pinimg.com/736x/f3/67/1e/f3671e8449db15d15a4953e330bb6015.jpg" className='w-100 h-100 award-image' alt="" />
                    </div>
                </div>
                <div className="col-2 ps-3">
                    <div className="d-flex align-items-center flex-column ">
                        <div className="col pb-3 ">
                            <img src="https://i.pinimg.com/736x/f3/67/1e/f3671e8449db15d15a4953e330bb6015.jpg" className='w-100 award-image-box' alt="" />
                        </div>
                        <div className="col pb-3 ">
                            <img src="https://i.pinimg.com/736x/f3/67/1e/f3671e8449db15d15a4953e330bb6015.jpg" className='w-100 award-image-box' alt="" />
                        </div>
                        <div className="col pb-3 ">
                            <img src="https://i.pinimg.com/736x/f3/67/1e/f3671e8449db15d15a4953e330bb6015.jpg" className='w-100 award-image-box' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-glass bg-transparent mb-3 mt-1 p-1">
                <div className="d-flex justify-content-start px-3 py-2">
                    <div className="d-flex align-items-center">
                        <i className="fa-solid fa-rocket fa-xl text-utama me-2"></i>
                    </div>
                    <div className=" d-flex align-items-start flex-column ps-1">
                        <small>
                            <small className=" text-second mb-0">From :</small>
                        </small>
                        <small className="text-white ">Amikom</small>
                    </div>
                </div>
            </div>
            <p className='text-second mt-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sed voluptatibus mollitia optio magnam dolorum at animi, quibusdam, quisquam veniam a debitis cum? Mollitia consequatur iure sunt dolore nisi perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni facilis libero vitae fuga? Nemo praesentium sequi aspernatur est veritatis doloribus illum recusandae laboriosam? Ut quia, laborum temporibus consequuntur nemo tempore?
            </p>



        </div >
    )
}
