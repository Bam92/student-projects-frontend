import React from 'react'
import Bed from '../../assets/img.png'
import Bed1 from '../../assets/imgs.png'
import Bed3 from '../../assets/imgss.png'
const CardArticle = () => {
	return (
		        <article className="flex flex-row justify-around mx-1 my-20">
          <section className="flex flex-col gap-14">
            <div className="flex flex-row w-[700px] h-[300px] rounded-2xl shadow-xl">
              <div className="w-[300px] h-[300px]">
                <img
                  src={Bed}
                  alt="bed"
                  className="bg-cover w-[300px] h-[100%] rounded-l-2xl cursor-pointer"
                />
              </div>
              <div className="flex flex-col gap-4 w-[400px] h-[300px] px-8 py-4 ">
                <span className="font-bold">
                  Netus vestibulum a vulputate sollicitudin id vitae convallis
                </span>
                <span className="text-md">
                  At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis
                  eu blandit lectus vestibulum egestas.
                </span>
                <div className="flex flex-row h-12 w-[250px] bg-gray-100 my-auto mt-3">
                  <img
                    className="cursor-pointer inline-block h-10 w-10 rounded-full ring-2 ring-white m-auto mt-1 ml-4"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div>
                    <span className="mr-2 cursor-pointer font-semibold">Jhon Doe</span>
                    <br />
                    <span className="mr-2 cursor-pointer">Blogeur international</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row w-[700px] h-[300px] rounded-2xl shadow-xl">
                <div className="w-[300px] h-[300px]">
                  <img
                    src={Bed3}
                    alt="bed"
                    className="bg-cover w-[300px] h-[100%] rounded-l-2xl cursor-pointer"
                  />
                </div>
                <div className="flex flex-col gap-4 w-[400px] h-[300px] px-8 py-4 ">
                  <span className="font-bold">
                    Netus vestibulum a vulputate sollicitudin id vitae convallis
                  </span>
                  <span className="text-md">
                    At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis
                    eu blandit lectus vestibulum egestas.
                  </span>
                  <div className="flex flex-row h-12 w-[250px] bg-gray-100 my-auto mt-3">
                    <img
                      className="cursor-pointer inline-block h-10 w-10 rounded-full ring-2 ring-white m-auto mt-1 ml-4"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div>
                      <span className="mr-2 cursor-pointer font-semibold">Jhon Doe</span>
                      <br />
                      <span className="mr-2 cursor-pointer">Blogeur international</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="flex flex-col justify-center items-center h-[650px] w-[350px] rounded-2xl shadow-xl">
              <div className="h-[300px] w-[350px]">
                <img
                  src={Bed1}
                  alt="bed"
                  className="bg-cover h-[300px] w-[100%] rounded-t-2xl cursor-pointer"
                />
              </div>
              <div className="flex flex-col justify-center items-center text-center gap-4 h-[350px] w-[350px] px-8 py-4 ">
                <span className="font-bold">
                  Netus vestibulum a vulputate sollicitudin id vitae convallis
                </span>
                <span className="text-md">
                  At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis
                  eu blandit lectus vestibulum egestas.
                </span>
                <div className="flex flex-row text-center h-12 w-[250px] bg-gray-100 my-auto mt-3">
                  <img
                    className="cursor-pointer inline-block h-10 w-10 rounded-full ring-2 ring-white m-auto mt-1 ml-4"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div>
                    <span className="mr-2 cursor-pointer font-semibold">Jhon Doe</span>
                    <br />
                    <span className="mr-2 cursor-pointer">Blogeur international</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
	)
}

export default CardArticle
