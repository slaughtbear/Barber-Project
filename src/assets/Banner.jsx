import React from "react";


function Banner(){
    return(
        <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-100 sm:text-3xl">Nuestros mejores cortes</h2>
            <br/>
            <p className="mx-auto mt-4 max-w-md text-gray-100">
            ¡Descubre la experiencia de un corte de pelo de primera clase con nuestro equipo de barberos expertos! Desde cortes modernos hasta estilos clásicos, resaltamos tu estilo. ¡Ven hoy y transforma tu look en nuestra barbería!
            </p>
          </header>
      
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="./src/assets/img/TaperedFade.jpg"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
      
                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-900 group-hover:underline group-hover:underline-offset-4">
                    Tapered Fade
                  </h3>
      
                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>
      
                    <span className="tracking-wider text-gray-900"> $150.00 </span>
                  </p>
                </div>
              </a>
            </li>
      
            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="./src/assets/img/Mullet.jpeg"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
      
                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-900 group-hover:underline group-hover:underline-offset-4">
                    Mullet
                  </h3>
      
                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>
      
                    <span className="tracking-wider text-gray-900"> $200.00</span>
                  </p>
                </div>
              </a>
            </li>
      
            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="./src/assets/img/Textured.webp"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
      
                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-900 group-hover:underline group-hover:underline-offset-4">
                  Textured 
                  </h3>
      
                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>
      
                    <span className="tracking-wider text-gray-900"> $150.00</span>
                  </p>
                </div>
              </a>
            </li>
      
            <li>
              <a href="#" className="group block overflow-hidden">
                <img
                  src="./src/assets/img/Highfade.webp"
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
      
                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-900 group-hover:underline group-hover:underline-offset-4">
                  High Fade
                  </h3>
      
                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>
      
                    <span className="tracking-wider text-gray-900"> $130.00 </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section> 
    )
}

export default Banner;