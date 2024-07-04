import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import Hud from "../../molecules/Hud/Hud";
import Cabecalho from "../../templates/cabecalho/Cabecalho";
import styles from "./Postagem.module.css";





const Postagem = () => {
  const { id } = useParams();

  // Importa dinamicamente o conteúdo do arquivo MDX como texto
  const [mdxContent, setMdxContent] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Função para importar o conteúdo do arquivo MDX como texto
    const fetchMDXContent = async () => {
      try {
        const response = await fetch(`../../../../post/publicacao/post${id}.md`);
        if (!response.ok) {
          throw new Error(`Failed to fetch MDX content for post ${id}`);
        }
        const mdxText = await response.text();
        setMdxContent(mdxText);
      } catch (error) {
        console.error("Error fetching MDX content:", error);
        // Trate o erro como achar adequado
      }
    };

    fetchMDXContent();
  }, [id]);

  return (
    <>
      <Hud />
      <article className={styles.postagem}>
        <div className={styles.content}>
          {mdxContent && <ReactMarkdown children={mdxContent} />}
        </div>
      </article>
      <Cabecalho />
    </>
  );
};


export default Postagem;
