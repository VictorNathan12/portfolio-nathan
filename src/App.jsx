import styles from "./App.module.css";
import FotoPerfil from "/FOTO.png";
import FacebookIcon from "/LogoFace.webp";
import GitHubIcon from "/LogoGit.png";
import InstagramIcon from "/LogoInsta.webp";
import WhatsappIcon from "/LogoWhats.webp";
// LOGOS DAS TECNOLOGIAS --------------

import htmlIMG from "/HTML.png";
import cssIMG from "/CSS.png";
import jsIMG from "/JS.png";
import viteIMG from "/VITE.jpg";
import reactIMG from "/REACT.png";
import vercelIMG from "/VERCEL.webp";

function App() {
  //javascript

  return (
    <>
      <nav className={styles.menu}>
        <a href="#s1">Home</a>
        <a href="#s2">Cards</a>
        <a href="#s3">Video</a>
        <a href="#s4">Contato</a>
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

        <section id="s4">
          <h2>sessao 4</h2>
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
