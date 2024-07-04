import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import Hud from "../../molecules/Hud/Hud";
import Cabecalho from "../../templates/cabecalho/Cabecalho";
import styles from "./Postagem.module.css";

// Lista de arquivos disponíveis (substitua isso pela lógica de buscar do servidor se necessário)
const arquivosDisponiveis = [
  'post0.md',
  'post1.md',

  // Adicione outros arquivos conforme necessário
];

const Postagem = () => {
  const { id } = useParams();
  const [mdxContent, setMdxContent] = useState<string | null>(null);

  useEffect(() => {
    // Função para importar o conteúdo do arquivo MDX como texto
    const fetchMDXContent = async () => {
      try {
        const arquivoEncontrado = arquivosDisponiveis.find(arquivo => arquivo === `post${id}.md`);
        if (!arquivoEncontrado) {
          throw new Error(`Arquivo post${id}.md não encontrado`);
        }

        const response = await fetch(`/public/publicacao/${arquivoEncontrado}`);
        if (!response.ok) {
          throw new Error(`Falha ao buscar conteúdo MDX para o post ${id}`);
        }
        const mdxText = await response.text();
        setMdxContent(mdxText);
      } catch (error) {
        console.error("Erro ao buscar conteúdo MDX:", error);
        // Trate o erro conforme necessário
      }
    };

    fetchMDXContent();
  }, [id]);

  return (
    <>
      <Hud />
      <article className={styles.postagem}>
        <div className={styles.content}>
          {mdxContent ? <ReactMarkdown>{mdxContent}</ReactMarkdown> : <div>Carregando...</div>}
        </div>
      </article>
      <Cabecalho />
    </>
  );
};

export default Postagem;
