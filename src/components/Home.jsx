import React from "react";


const Home = () => {
  return (
    <div>
      <h2>La Esquizofrenia</h2>
      <p className="p" >
      La esquizofrenia es una enfermedad mental grave que afecta el modo de pensar, sentir y comportarse de las personas. Puede dar lugar a una mezcla de alucinaciones, ideas delirantes y pensamientos y comportamientos desorganizados. Las alucinaciones consisten en ver cosas o escuchar voces que los demás no ven ni escuchan. Las ideas delirantes son creencias firmes sobre cosas que no son ciertas. Puede parecer que las personas con esquizofrenia han perdido contacto con la realidad, lo que puede dificultar mucho su vida cotidiana.
      </p>

      <div class="grid-contenedor">
      <div class="imagen">
        <img src="https://img.freepik.com/free-vector/schizophrenia-concept-illustration_114360-3567.jpg?t=st=1730130558~exp=1730134158~hmac=55c9636ed11176a0ae252af6c84d3e3334b798a4ec20966be464f3f46e467269&w=826"/>
        <a href="http://www.freepik.com">Designed by stories / Freepik</a>
      </div>
        
      <div class="contenido">
        <p className="p" >
          La esquizofrenia sigue siendo uno de los trastornos mentales más estigmatizados en muchas sociedades. Las personas con esquizofrenia a menudo enfrentan incomprensión, miedo o rechazo, lo que puede llevar a aislamiento social y discriminación.
          </p>
          <p className="p" >
          El estigma puede ser una barrera importante para que las personas busquen o continúen con el tratamiento. Cambiar esta percepción implica educación pública y una mayor comprensión de que la esquizofrenia es una condición médica, no una falla personal.
         </p>

         <p className="p">
         A pesar de las dificultades, muchas personas con esquizofrenia pueden llevar vidas satisfactorias con el tratamiento y el apoyo adecuado. La calidad de vida varía según factores como el acceso a atención médica, el apoyo social y el entorno familiar. La inclusión en la comunidad y la promoción de la integración laboral y educativa son importantes para mejorar la autonomía de las personas afectadas.
         </p>
        </div>
      </div>
      <p className="p">
        El trastorno no solo afecta a quien lo padece, sino también a sus familiares y cuidadores. Las familias a menudo enfrentan desafíos emocionales, financieros y sociales, lo que hace que el apoyo a los cuidadores sea esencial. En muchos casos, las familias participan activamente en el cuidado y manejo del tratamiento del paciente, por lo que también necesitan acceso a información y recursos.
        </p>
      </div>
  );
};

export default Home;
