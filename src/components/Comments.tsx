import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'

interface TypeComments {
  _id: string,
  usuario: string,
  comentario: string
}


const Comments = () => {

  const router = useRouter();

  const [comentarios, setComentarios] = useState<TypeComments[]>();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => { 
    
    // const pageId = router.query.id
    
    // await fetch("/api/addcomment", {
    //   method: "POST",
    //   body: JSON.stringify({...data , pageId}),
    // });   
  }

  // useEffect(() => {    
  //   (async () => {
  //     await fetch("/api/comments", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => setComentarios(data.filter( (data: any) => data.pageId === router.query.id )));
  //   })();    
    
  // }, [comentarios, router.query.id]);

  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            ¡Preguntale al vendedor! (20)
          </h2>
        </div>
        <form className="mb-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <input
              className="px-0 w-full text-sm  text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Ingrese su nombre"
              {...register("usuario", {required: true, maxLength: 40})}
            />
            {errors.usuario?.type === "maxLength" && (
              <h2 className="text-red-500">El limite de caracteres es 40</h2>
            )}
          </div>
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <textarea
              id="comment"
              className="px-0 w-full text-sm  text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Escribe tu consulta..."
              required
              {...register("comentario", { required: true, maxLength: 400 })}
            ></textarea>
            {errors.comentario?.type === "maxLength" && (
              <h2 className="text-red-500">El limite de caracteres es 400</h2>
            )}
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Enviar comentario
          </button>
        </form>
        <div className="mt-[20%] text-[27px]">Por razones de seguridad a la base de datos, los comentarios estan desactivados. Puede descomentar la peticion en el codigo y poder acceder al chat en tiempo real.</div>
        {/* {comentarios?.map((comentario, index) => {
          return (
            <article
              key={index}
              className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900"
            >
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    <img
                      className="mr-2 w-6 h-6 rounded-full"
                      src="https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_640.png"
                      alt="Michael Gough"
                    />
                    {comentario.usuario}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400"></p>
                </div>
                <button
                  id="dropdownComment1Button"
                  data-dropdown-toggle="dropdownComment1"
                  className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  type="button"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  </svg>
                </button>
              </footer>
              <p className="text-gray-500 dark:text-gray-400 ">
                {comentario.comentario}
              </p>
            </article>
          );
        })} */}
      </div>
    </section>
  );
};

export default Comments;
