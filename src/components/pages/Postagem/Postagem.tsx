import React from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";
import Hud from "../../molecules/Hud/Hud";
import Cabecalho from "../../templates/cabecalho/Cabecalho";
import styles from "./Postagem.module.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism"; // Escolha um tema de realce de sintaxe


interface PostagemProps {
  id: string; // Alterado para string, já que está sendo obtido como string de useParams
}

const Postagem: React.FC<PostagemProps> = () => {
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

    // Função para renderizar o código com realce de sintaxe
    const renderizaCodigo = ({ language, value }: { language: string; value: string }) => {
        return <SyntaxHighlighter style={tomorrow} language={language} children={value} />;
      };
      
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

// Componente para renderizar o conteúdo MDX como Markdown simples
const MarkdownRenderer: React.FC<{ mdxContent: string }> = ({ mdxContent }) => {
  return (
    <div>
      {/* Inserir aqui a lógica para renderizar o conteúdo Markdown */}
      <pre>{mdxContent}</pre>
    </div>
  );
};

export default Postagem;
