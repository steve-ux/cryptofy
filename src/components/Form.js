import "../form.scss";

function Form() {
  return (
    <div className="formulario">
      <div class="login-box">
        <form action="https://formsubmit.co/exe.universal@gmail.com" method="POST">
          <p>ENVIÁ TU CONSULTA</p>
          <div class="user-box">
            <input required type="text" name="Nombre" placeholder="Nombre o apodo" />
            <br />
          </div>
          <div class="user-box">
            <input required type="email" name="Correo" placeholder="Email" />
            <br />
            <textarea
              required
              type="textarea"
              name="Mensaje"
              minLength="4"
              title="Mensaje mínimo de 4 caracteres"
              placeholder="Tu mensaje"
            />
            <br />
          </div>
          <input
            type="hidden"
            name="_next"
            value="https://criptofy.org/Enviado"
          />
          <input
            type="hidden"
            name="_subject"
            value="Nueva consulta desde criptofy!"
          />
          <input type="hidden" name="_captcha" value="false" />

          <div className="btnSend">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <button type="submit" value="Enviar">
              ENVIAR
            </button>
          </div>
          <br />
        </form>
      </div>
    </div>
  );
}
export default Form;
