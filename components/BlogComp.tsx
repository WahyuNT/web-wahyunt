import React from 'react'

export default function BlogComp() {
    return (
        <div><div className="card-body  px-1" style={{ maxHeight: "100%" }}>

            <div className="d-flex">

            </div>
            <h4 className="text-white mt-2 text-center"><b>Blog</b></h4>
            <div className="d-flex  flex-wrap">


                <div className="col-4 mb-2 p-2">
                    <div className=" bg-transparent card card-glass card-porto pb-2">
                        <div className="card bg-transparent  card-banner flex-column">
                            <div className="card bg-transparent">

                                <img src="https://i.pinimg.com/564x/d7/fb/95/d7fb95f5d8ebd333665e4b9d33c2ce2b.jpg" className="cover-blog mb-2" alt="" />

                            </div>
                            <div className="px-3">

                                <small className='mt-2'>
                                    <small className='text-muted mt-2'>4 August 2023</small>
                                </small>
                                <p className='text-white fw-bold mt-0 mb-0'>Get Winner in Boim Amikom 2023</p>
                                <p className='text-muted mb-1 mt-1' style={{ fontSize: "13px" }}>


                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus 

                                </p>

                                <a href="" className='text-decoration-none'>

                                    <small className='text-white fw-bold '>Read More<i className="fa-solid fa-caret-right ms-1 fa-sm"></i></small>
                                </a>

                            </div>
                            <div className="d-flex justify-content-start align-items-center mt-2">

                            </div>


                        </div>
                    </div>
                </div>

            </div>

        </div></div>
    )
}
