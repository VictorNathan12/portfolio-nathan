import styles from "./App.module.css";
import FotoPerfil from "/FOTO.png";
import FacebookIcon from "/LogoFace.webp";
import GitHubIcon from "/LogoGit.png";
import InstagramIcon from "/LogoInsta.webp";
import WhatsappIcon from "/LogoWhats.webp";
import Curitiba1 from "/foto1.webp";
import Curitiba2 from "/foto2.webp";
import Curitiba3 from "/foto3.webp";
// LOGOS DAS TECNOLOGIAS --------------

import htmlIMG from "/HTML.png";
import cssIMG from "/CSS.png";
import jsIMG from "/JS.png";
import viteIMG from "/Vite.png";
import reactIMG from "/REACT.png";
import vercelIMG from "/VERCEL.webp";

import { useState } from "react";

function App() {
  //javascript

  const defaultPhoneNumber = "5541999613787";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleZap = () => {
    const { name, email, message } = formData;

    const urlZap = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
    Nome:%20${name}%0D%0A
    Email:%20${email}%0D%0A
    Mensagem:%20${message}%0D%0A`;

    window.open(urlZap, "_blank");
  };

  return (
    <>
      <nav className={styles.menu}>
        <a href="#s1">Home</a>
        <a href="#s2">Cards</a>
        <a href="#s3">Video</a>
        <a href="#s4">Contato</a>
        <a href="#s5">Minha Cidade</a>
      </nav>
      <main>
        <section className={styles.s1} id="s1">
          <div className={styles.left}>
            <img
              className={styles.imgPerfil}
              src={FotoPerfil}
              alt="Foto perfil"
            />
          </div>
          <div className={styles.right}>
            <h2 className={styles.title}>Victor Nathan</h2>
            <p className={styles.paragraph}>
              Trabalho com Edição de Video e sou Desenhista, atualmente
              estudando sobre Programação (T.I)
            </p>
          </div>
        </section>

        <section className={styles.s2} id="s2">
          <h2 className={styles.tecTitle}>Tecnologias</h2>
          <div className={styles.wrapCards}>
            <div className={styles.card}>
              <img width={70} src={htmlIMG} alt="HTML" />
              <h3>HTML</h3>
              <p>
                É a linguagem padrão usada para criar e estruturar o conteúdo
                das páginas na Web. Ela define o significado e a organização dos
                elementos (como títulos, parágrafos, imagens, links, etc.) que
                são exibidos pelos navegadores de internet.
              </p>
            </div>
            <div className={styles.card}>
              <img width={70} src={cssIMG} alt="CSS" />
              <h3>CSS</h3>
              <p>
                é a linguagem usada para estilizar e dar a aparência visual ao
                conteúdo estruturado pelo HTML. Enquanto o HTML diz o que é um
                título ou um parágrafo, o CSS diz como esse título ou parágrafo
                deve se parecer.
              </p>
            </div>
            <div className={styles.card}>
              <img width={70} src={jsIMG} alt="JS" />
              <h3>JS</h3>
              <p>
                O JS permite que as páginas sejam interativas. Ele não apenas
                exibe conteúdo estático, mas permite que a página reaja às ações
                do usuário (como cliques, movimentos do mouse ou envio de
                formulários) e manipule o conteúdo em tempo real sem precisar
                recarregar a página inteira.
              </p>
            </div>
            <div className={styles.card}>
              <img width={70} src={viteIMG} alt="VITE" />
              <h3>VITE</h3>
              <p>
                Vite é uma ferramenta de construção (build tool) de frontend que
                tem como foco principal a velocidade e a simplicidade da
                experiência de desenvolvimento.
              </p>
            </div>
            <div className={styles.card}>
              <img width={70} src={reactIMG} alt="REACT" />
              <h3>REACT</h3>
              <p>
                é uma biblioteca JavaScript de código aberto, mantida pelo
                Facebook (agora Meta), que é utilizada para construir interfaces
                de usuário (UI). Em vez de ser uma linguagem em si (como HTML e
                CSS), o React é uma ferramenta que ajuda a organizar a forma
                como o JavaScript manipula o HTML e o CSS.
              </p>
            </div>
            <div className={styles.card}>
              <img width={70} src={vercelIMG} alt="VERCEL" />
              <h3>VERCEL</h3>
              <p>
                Vercel é uma empresa de computação em nuvem focada em fornecer a
                infraestrutura e as ferramentas de desenvolvimento necessárias
                para construir, implantar (deploy) e escalar aplicações web de
                alta performance, especialmente aquelas construídas com
                frameworks modernos como Next.js (que a própria Vercel criou e
                mantém).
              </p>
            </div>
          </div>
        </section>

        <section id="s3">
          <h2>sessao 3</h2>
        </section>

        <section id="s4" className={styles.s4}>
          <h2>CONTATO</h2>
          <div className={styles.formData}>
            <label htmlFor="name">Informe seu nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name">Informe seu email</label>
            <input
              type="emai"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="name">Informe uma mensagem</label>
            <textarea
              type="message"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              cols="30"
              rows="10"
              required
            ></textarea>
            <button onClick={handleZap}>Enviar mensagem</button>
          </div>
        </section>

        <section id="s5" className={styles.s5}>
          <h3>Curitiba</h3>
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={Curitiba1} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={Curitiba2} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={Curitiba3} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </section>
      </main>
      <footer className={styles.rodape}>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width={75} src={FacebookIcon} alt="Facebook" />{" "}
        </a>
        <a
          href="https://www.Instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width={70} src={InstagramIcon} alt="Instagram" />{" "}
        </a>
        <a
          href="https://github.com/VictorNathan12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width={65} src={GitHubIcon} alt="GitHub" />{" "}
        </a>
        <a
          href="https://www.Whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width={70} src={WhatsappIcon} alt="Whatsapp" />{" "}
        </a>
      </footer>
    </>
  );
}

export default App;
