import Navbar from "../components/Navigator/Navbar";
import Footer from "../components/Footer";
import Api from "../cryptocurrencies/UBI";
import UBI from "../assets/logo-ubi.png";
import Form from "../assets/formPoH.jpg";
import Metamask from "../assets/metamask-ubi.webp";
import Arrow from "../assets/arrow-up.png";
import { Link } from "react-router-dom";

export default function UBIMain() {
 
  return (
    <>
    <div className="dashboard-containerUBI">
    <Navbar/>
      <h1 className="titleCriptos" id="UBI">UNIVERSAL BASIC INCOME</h1>
      <div className="containerCriptoETH">
      <img className="criptoUBI" src={UBI} alt="logo-universal-basic-income" />
      </div>
      <div className="containerChart">
    <Api/>
    <p className="epigrafe">Fuente: Coingecko</p>
    <p className="epigrafe">*El precio se actualiza cada 60 segundos.</p>
    <p className="epigrafe">*El gráfico muestra un período de 24 horas.</p>
    <p className="epigrafe">*Las barras de la base muestran el market cap de las últimas 24 horas.</p>
      </div>
      <div className="containerText">
    <seccion className="infoCriptos">
      <h2>La historia de <a href="https://www.proofofhumanity.id/" target="_blank" rel="noreferrer">UBI</a></h2>
      <p>UBI o <span>Universal Basic Income (Renta Básica Universal)</span> es un token creado para el proyecto en desarrollo de <span>Proof of Humanity (PoH) o Prueba de Humanidad</span>, donde se usa como moneda de pago en un sueldo para todos y todas las personas del planeta que acrediten su identidad en la web del proyecto. PoH es relativamente nuevo, fue lanzado en marzo de 2021 e impulsado por la ONG <span>Democracy Earth</span> y la empresa <span>Kleros</span>, teniendo como referente al argentino <span>Santiago Siri</span>. </p>
      <p>PoH o Proof of Humanity nace con la idea de crear un sistema social de verificación de identidades de humanos, algo así como Facebook, pero sin la centralización y los estados. La base de datos de PoH es puesta en la blockchain de Ethereum, lo que le aporta una capa grande de seguridad. El proyecto combina redes de confianza y resolución de disputas para crear una lista de humanos curada y a prueba de ataques <span>Sybil</span> o la doble identidad, no hay duplicados en la red.</p>
      <h3>¿Cómo funciona UBI?</h3>
      <p>El precio de UBI se puede seguir minuto a minuto al comienzo de esta página, su cotización fluctúa como la mayoría de las criptomonedas del mercado, pero ha llegado a valer más de 4 dólares en sus inicios. Proof of Humanity otorga <span>1 UBI por hora</span> a sus humanos registrados, lo que da un total de <span>720 UBI al mes</span>.</p>
      <p>Para que sea considerado renta, primero debería mantener su valor, ¿Pero qué le da valor en principio? Como toda moneda, empresa o marca, el valor intrínseco de algo está dado por el <span>mercado</span> o lo que la gente esté dispuesta a pagar por cierto activo.</p>
      <p>Tal como en el caso de Bitcoin, Ethereum o las acciones de cualquier empresa, el valor puede aumentar o bajar, y dependerá de la confianza de la gente en el proyecto, la aceptación de la moneda como medio de pago y solucionar la característica inflacionaria de UBI. Para este último problema se ha propuesto una solución llamada <span>Bóveda de Ahorro Humanitario o UBI Vault</span>, que propone la quema de UBI y lograr su apreciación con escasez a largo plazo. Con la ventaja de obtener intereses ganados en DAI.</p>
      <div className="video-container">
      <div className="videos">
      <iframe src="https://www.youtube.com/embed/WeZUoJ5f4To" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <p className="epigrafe">Créditos: UBI Blockchain Collective</p>
      </div>
      <p>Se proyecta crear comunidades donde se pueda intercambiar UBI por productos y servicios, hay algunas no oficiales en Telegram. También es posible cambiarlo o <span>"swapearlo"</span> por ether (ETH) u otros tokens en el exchange descentralizado Uniswap o en algunos exchanges y brókeres centralizados, como Ripio.</p>
      <p>Por último, si confías en que el proyecto UBI crecerá y, junto con ese crecimiento, se incremente el precio de su token, puedes <span>«holdearlo»</span>. Esto es, mantenerlo en tu wallet a modo de ahorro, a la espera de su valorización.</p>
      <p>Muchos preguntarán por los usos de esta tecnología y podrían ser varios; podemos pensar desde un <span>sistema transparente y democrático</span> que sirva para votar en elecciones limpias, seguras e inalterables. Hasta ser usado por <span>Dapps</span> (aplicaciones descentralizadas) donde el usuario pueda iniciar sesión fácilmente con un click sabiendo que su identidad es real.</p>
      <p>Hoy en día la Renta Básica Universal es su primer uso, una idea que no es nueva, de hecho la primera referencia moderna que se conoce al respecto, surge en 1797, donde <span>Thomas Paine</span>, uno de los padres fundadores de Estados Unidos lo menciona en su libro <span>“Justicia Agraria”</span>. Otro de los defensores de esta idea fue el economista británico, y considerado una de las personas más influyentes del sigo XX, <span>John Maynard Keynes</span>.</p>
      <h3>Registro</h3>
      <p>Darse de alta en la plataforma no es difícil, solo se debe seguir bien los pasos. Contar con una foto de perfil tipo DNI y un video en buena resolución e iluminación que diga una frase en inglés. Hay que tener en cuenta que registrar un perfil requiere de un monto en Ethereum, <span>0.125 ETH</span>, monto que vuelve a su dueño si el registro se hace correctamente y una vez el perfil es validado por otros usuarios.</p>
      <p>En primer lugar, debes dirigirte al sitio web de Proof of Humanity, <a href="https://www.proofofhumanity.id/" target="_blank" rel="noreferrer">https://www.proofofhumanity.id/</a>. Recomendamos que hagas clic en ese link o copies la dirección en tu navegador para evitar sitios fraudulentos.</p>
      <p>Una vez allí, haz clic en <span>«Start»</span>, en la parte superior derecha de la pantalla. Se te mostrará un listado de miles de personas ya registradas, cada una con su nombre, foto, una breve descripción y la fase del registro en la que se encuentran. Grandes figuras ya forman parte del registro en apoyo al proyecto, tal como <span>Marcos Galperín</span> (CEO Mercado Libre), el basquetbolista <span>Manu Ginóbili</span> y <span>Vitalik Buterin</span>, creador de la red Ethereum.</p>
      <p>Deberás contar con una dirección de Ethereum, dicha dirección que utilices quedará ligada a tu identidad y todos los datos que brindes en el formulario de registro serán públicos (esto incluye tu foto, un video con tu voz y, mediante un explorador de bloques, podrán verse las transacciones que hagas y hayas hecho con esa dirección). Esa información será imborrable durante todo el tiempo que la red Ethereum exista.</p>
      <p>A continuación debés vincular tu wallet de <span>Metamask</span> al sitio web, teniendo previamente instalado Metamask en tu navegador habitual (recomendamos Chrome).</p>
      <img src={Form} alt="arte digital" width="500vw" style={{"float": "left", "padding": ".5rem", "border-radius": "2rem"}}/>
      <p>Si estás convencido de que quieres continuar, entonces, lo siguiente que debes hacer es cliquear <span>«Submit Profile»</span> (Enviar perfil) en la parte superior de la pantalla. Se te abrirá un formulario que deberás completar.</p>
      <p>En <span>«Display Name»</span> eliges el nombre que quieres mostrar. Puede ser tu nombre verdadero o un apodo.</p>
      <p>En <span>«First Name»</span> pones tu nombre de pila y en «Last Name» tu apellido. No es necesario que sean tus datos reales.</p>
      <p>Donde dice <span>«Short Bio»</span>, es un espacio destinado a que escribas algo sobre ti. Una breve biografía con los datos que tú quieras poner. Si quieres escribir sobre tus hobbies, profesión e intereses, puedes hacerlo; y si solo quieres poner «Soy un ser humano», también puedes hacerlo.</p>
      <p>Una vez que completaste eso, sigue avanzando en la página. Verás dos cuadros de textos, uno para subir una foto de perfil («Face Photo») y otro para subir un video («Video»).</p>
      <p>En el primero de ellos debes subir una fotografía tuya. Puedes usar una preexistente (recomendable) o tomarte una en el momento con tu webcam. Ten en cuenta algunos detalles:</p>
      <span><li>El peso máximo de la imagen puede ser de 2MB.</li>
      <li>El archivo puede ser jpg, jpeg o png.</li>
      <li>Tu cara y rasgos faciales deben ser visibles. No puedes usar mucho maquillaje o máscaras que dificulten la visibilidad de tus rasgos. Mientras más iluminación, mejor.</li>
      <li>Se aceptan cubiertas para la cabeza que no cubran la región interna de la cara (a modo de ejemplo, indican que un hiyab es aceptable pero un niqab no lo es).</li>
      <li>Pueden usarse velos, turbantes o pelucas siempre que no se incumplan los puntos anteriores.</li></span>
      <p>Una vez subida tu foto, es el momento del video. Se trata de un archivo mp4, webm, avi o movi de un máximo de 2 minutos de duración y con un peso no mayor a <span>7MB</span>.</p>
      <p>Allí debes mostrar tu dirección de Ethereum (puede ser en un papel escrita a mano y legible, impresa, o en una pantalla). Debe verse completa y ser exactamente la misma dirección con la que te estás registrando.</p>
      <p>Además, mientras muestras tu dirección, con tu voz normal tienes que decir <span>«I certify that I am a real human and that I am not already registered in this registre»</span>. Esta frase, en inglés (si la dices en otro idioma no es válido) significa: <span>«Certifico que soy un humano real y que no estoy ya registrado en este registro»</span>. Si tu pronunciación en inglés no es buena, no te preocupes, porque eso no es algo a evaluar para el registro en Proof of Humanity.</p>
      <p>Ahora es necesario que te dirijas al botón que está en la parte inferior de la página web y hagas clic en <span>«Submit»</span>. Al hacerlo, enviarás tus datos para que sean evaluados por otro usuario.</p>
      <h3>Validación</h3>
      <p>Cuando cliquees allí, se te cobrará de tu wallet Metamask la suma de 0,125 ETH (más comisiones de la red Ethereum). Ten en cuenta que una vez que tu perfil sea aprobado, se te <span>reintegrarán</span> esos ETH depositados (no así las comisiones de la red).</p>
      <p>Una vez que haces todo esto, pasas a la <span>«Vouching phase»</span> (fase de aval). Algún otro usuario con un perfil ya registrado y aceptado tiene que aprobarlo (o, como suele decirse en los grupos hispanos de PoH, tiene que <span>«vouchearte»</span>). Esto significa que debe validar que te conoce y que tú eres un humano real.</p>
      <p>Si conoces a alguien ya registrado en Proof of Humanity, puedes pedirle que te «vouchee». Si no, ten en cuenta que hay comunidades virtuales donde los usuarios se verifican mutuamente sus identidades. Para verificar que la otra persona a la que nunca han visto realmente existe, suele emplearse una videollamada. En el grupo <a href="https://t.me/proofofhumanityenespanol" target="_blank" rel="noreferrer">Proof of Humanity en Español</a>, de Telegram, puedes conocer virtualmente a otros usuarios y, quizás, lograr ser verificado por alguien.</p>
      <img src={Metamask} alt="arte digital" width="200vw" style={{"float": "left", "padding": ".5rem", "border-radius": "2rem"}}/>
      <p>Una vez que tienes tu perfil verificado por algún otro usuario, estarás durante tres días y medio como <span>«Pending registration»</span> (registro pendiente). Durante este período, cualquier persona verificada que observe algún error en tu perfil o considere que has cometido alguna falta en el registro, puede hacerlo saber. Si, efectivamente, hay algún incumplimiento a las reglas, tu registro será dado de baja y perderás el depósito de 0,125 ETH, que pasará al denunciante. La jerga usa el término <span>challengeado</span>, que viene del inglés “desafiado” o “impugnado”</p>
      <p>Si nadie hace ningún reclamo sobre tu registro, pasados los tres días y medio verás que, en la parte superior de tu perfil se observa la leyenda <span>«Registred»</span> (registrado).</p>
      <p>¡Eso es todo! Significa que no quedan dudas de que eres un usuario real y, por eso, Proof of Humanity te recompensará con una renta básica de <span>1 UBI por hora</span>. Para recibir este ingreso, no tienes que hacer nada. Constantemente, en tu wallet MetaMask podrás ver como se va incrementando la cantidad de UBI que posees.</p>
      <p>Cuando quieras disponer de ese dinero para utilizarlo, puedes intercambiarlo por alguna otra criptomoneda o token, por ejemplo, alguna stablecoin. El exchange descentralizado (DEX) <span>Uniswap</span> es el lugar para ello.</p>
      <p>Si vives en Argentina, puedes utilizar los servicios del bróker <span>Ripio</span> para cambiar tus UBI por pesos o alguna otra criptomoneda.</p>
      <p>Por último, si no tienes el fondo suficiente de Ethereum para subir tu perfil, hay un grupo no oficial en telegram que se dedica a <span>"fondear"</span> o prestar esos ethers a gente que lo esté necesitando, a cambio de colaboración para administrar el grupo. Puedes acceder <a href="https://t.me/PoHCrowdfunding" target="_blank" rel="noreferrer">aquí.</a></p>
    </seccion>
    <div className="prefooter">
    <Link to="/Criptos" className="back">Volver a Criptos</Link>
    <a href="#UBI"><img src={Arrow} alt="flecha arriba" width="45" style={{"padding": ".5rem", "margin-bottom": "-2.5rem"}}/></a>
    </div>
    </div>
    <Footer/>
    </div>
    </>
  );
}
