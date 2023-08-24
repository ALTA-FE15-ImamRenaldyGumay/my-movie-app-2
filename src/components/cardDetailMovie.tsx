import React from 'react'

const cardDetailMovie = () => {
    return (
        <div>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    <div className="lg:col-span-4 flex justify-center">
                        <img
                            className='w-80 h-auto rounded-md m-5'
                            src="https://upload.wikimedia.org/wikipedia/id/2/20/Cek_Toko_Sebelah.jpg" alt="cek-toko-sebelah" />
                    </div>
                    <div className="lg:col-span-8 justify-item-stretch content-stretch">
                        <div className="judul">
                            <h1 className='text-5xl font-bold my-3'>Cek Toko Sebelah</h1>
                            <p>Check The Store Next Door</p>
                            <hr />
                        </div>
                        <div className="flex">
                            <h6>Genres : </h6>
                            <section>
                                <p> Comedy, </p>
                            </section>
                            <section>
                                <p>Family</p>
                            </section>
                            <hr />
                        </div>
                        <hr />
                        <h6>Release Date : 28 December 2016</h6>
                        <hr />
                        <h6>Duration : 98 minute</h6>
                        <hr />
                        <h6>Original Language : Indonesian</h6>
                        <hr />
                        <div className="overview ">
                            <h2>Overview</h2>
                            <p>Film Cek Toko Sebelah ini mengisahkan sebuah keluarga kecil yang terdiri dari seorang ayah dan juga dua orang putranya. Sang ayah sangat menyayangi kedua anaknya, dan ingin mereka selalu bersama. Walaupun dia nantinya sudah tidak ada lagi bersama mereka, dan untuk itu dia membuat sebuah wasiat yang berisi mengenai pembagian warisan yang Ia lakukan berupa sebuah toko sembako milik Koh Afuk. Film Cek Toko Sebelah merupakan sebuah film komedi terbaru asal Indonesia. Film ini merupakan arahan sutradara Ernest Prakasa yang sekaligus penulis skenario dalam film ini. Sedangkan produser film ini adalah Chand Parwez Servia. Film Cek Toko Sebelah ini akan dibintangi oleh Ernest Prakasa, Dion Wiyoko, Gisella Anastasia dan Adinia Wirasta. Sedangkan rumah produksi akan dinaungi oleh Starvision Plus. Rencananya film ini akan dirilis perdana pada 28 Desember 2016 (Indonesia).</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cardDetailMovie