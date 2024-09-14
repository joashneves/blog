import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import Hud from "../../molecules/Hud/Hud";
import Cabecalho from "../../templates/cabecalho/Cabecalho";
import styles from "./Postagem.module.css";

const Postagem: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/public/publicacao/post${id}.md`);
        if (!response.ok) {
          throw new Error(`Failed to fetch markdown content for post ${id}`);
        }
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error("Error fetching markdown content:", error);
      }
    };

    fetchMarkdown();
  }, [id]);

  return (
    <>
      <Hud />
      <article className={styles.postagem}>
        <div className={styles.content}>
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
      </article>
      <Cabecalho />
    </>
  );
};

export default Postagem;
