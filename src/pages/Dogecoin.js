import Navbar from "../components/Navigator/Navbar";
import Footer from "../components/Footer";
import Api from "../cryptocurrencies/Dogecoin";
import Dogecoin from "../assets/logo-dogecoin.png";
import { Link } from "react-router-dom";

export default function DogecoinMain() {
 
  return (
    <>
    <div className="dashboard-containerDoge">
    <Navbar/>
      <h1 className="titleCriptos">DOGECOIN</h1>
      <div className="containerCriptoETH">
      <img className="criptoETH2" src={Dogecoin} alt="logo-ethereum" />
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
      <h2>La historia de Dogecoin</h2>
      <p>Dogecoin, la cripto del perrito o la cripto meme, se encuentra actualmente entre las criptomonedas más populares del mercado ocupando el <span>12° lugar en capitalización del mercado</span> con un valor de 1,93 billones de dólares (abril 2022).</p>
      <p>La moneda fue creada en 2013 por dos expertos que había trabajado previamente en IBM y Adobe, <span>Billy Markus y Jackson Palmer</span> respectivamente. La misma fue lanzada como si fuera una broma ante el incremento constante de Bitcoin en ese entonces: “una alternativa divertida y amigable”.</p>
      <p>Hasta el momento Dogecoin ha sido utilizada para pagar pequeñas cantidades a creadores de contenido en distintas plataformas y redes sociales.</p>
      <p>Esta criptomoneda no es nueva. Y no nació con vocación de ser moneda. El origen de la historia se remonta a hace más de diez años. La imagen que forma parte de la criptomoneda, era parte de una serie de fotos originalmente publicadas en su blog personal por un profesor de guardería japonés que había rescatado a un perro llamado <span>Kabosu</span> en Febrero de 2010. Una de dichas fotos resultó contener una mirada del perro a cámara en la que parecía ojear de forma sospechosa pero tranquila. </p>
      <p>La foto se convirtió en objeto de bromas y memes. Tomando prestada la expresión <span>“doge”</span> para referirse cariñosamente a los perros cuyas imágenes circulaban en Internet (en una broma aún más antigua que este meme, tal y como documenta "Know Your Meme"). A partir de distintas colisiones, coincidencias y, sobre todo, foros digitales generando bromas colectivas, nace el meme que ilustraba con expresión de la tipografía Comic Sans el supuesto monólogo interior que estaba viviendo Kabosu.</p>
      <p>A finales de 2013, los ingenieros de software Billy Markus y Jackson Palmer decidieron crear <span>“Dogecoin”,</span> una criptomoneda que nacía como una broma para ironizar sobre la especulación salvaje que ya empezaba a darse en aquel momento. Tras un impulso inicial en el que aglutinó muy deprisa a una comunidad y obtuvo cierto valor, el hype se redujo y su valor cayó, manteniéndose muy bajo durante años. No fue hasta Julio de 2020 cuando un trend de Tiktok rescató a la moneda de su irrelevancia haciendo que aumentara su valor en más de un 600% en solo día.</p>
      <h3>El efecto Elon Musk</h3>
      <p>En enero 2021, un grupo de usuarios de Reddit comenzó a animar a invertir en Dogecoin. Consiguieron que el valor aumentara en un 800%. Pero no fue hasta que Elon Musk, en una práctica habitual que consiste en publicar memes en su cuenta sin acreditarlos, publicó la imagen de un perro como si fuera protagonista de una revista llamada Dogue. Los usuarios lo interpretaron como una señal a favor de Dogecoin. </p>
      <p>El multimillonario dueño de Tesla aparecía, en ese entonces, en el programa de televisión de <span>Saturday Night Live</span> en el que hacía un sketch donde explicaba sobre la naturaleza y el futuro de Dogecoin en un contexto que parece el más propicio para esta criptomoneda: a medio camino entre la broma y la amenaza al statu-quo.</p>
      <p>Luego Musk anunciaba en Twitter que <span>SpaceX</span> lanzaría un satélite llamado Doge-1 y que sería <span>“la primera misión financiada con dogecoin, la primera criptomoneda en el espacio y el primer meme en órbita”.</span> Un usuario hizo una canción sobre la criptomoneda consiguiendo que el efecto de bola de nieve continúe con esta meme-moneda. </p>
      <p>La retórica de una comunidad robinhoodesca que se salta las reglas del mercado para infiltrar una broma que termina cambiando dichas reglas es muy atractiva. El propio Musk declaraba a TMZ que <span>“las criptomonedas son prometedoras...pero no recomiendo invertir todos los ahorros de una vida”.</span></p>
      <p>Quizás porque para él, invertir en Dogecoin no sea más que un juego como publicar tuits graciosos. Pero para la mayoría de los mortales es la misma especulación de toda la vida, solo que ahora la economía fluye entre memes y virales.</p>
      <h3>Usos de Dogecoin</h3>
      <p>Dogecoin se utiliza como moneda virtual basada en Blockchain (misma red Bitcoin). Se utiliza para realizar pagos y transacciones. Los usuarios de DOGE pueden enviar y recibir la criptomoneda con sus billeteras dogecoin. Las transacciones se realizan en segundos y con tarifas mínimas.</p>
      <p>La criptodivisa también se puede utilizar para dar propina a los creadores de contenido. Es una moneda perfecta para <span>micro transacciones,</span> ya que permite el envío de pequeñas cantidades con tarifas casi nulas.</p>
      <p>Para obtener dogecoin se recomienda la plataforma más grandes de criptomonedas, Binance.</p>
    </seccion>
    <Link to="/Criptos" className="back">Volver a Criptos</Link>
    </div>
    <Footer/>
    </div>
    </>
  );
}