import React, { useState, FormEvent, useEffect } from "react";
import emailjs from 'emailjs-com';

import styles from './EmailForm.module.css';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState<string>('Anonimo');
  const [title, setTitle] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [canSubmit, setCanSubmit] = useState<boolean>(true);

  useEffect(() => {
    const lastSent = localStorage.getItem('lastSent');
    if (lastSent) {
      const lastSentDate = new Date(lastSent);
      const now = new Date();
      const timeDifference = now.getTime() - lastSentDate.getTime();
      const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

      if (timeDifference < oneDayInMilliseconds) {
        setCanSubmit(false);
      }
    }
  }, []);

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_REACT_APP_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
        {
          from_name: email,
          tittle: title,
          subject: subject,
          message: subject,
        },
        import.meta.env.VITE_REACT_APP_USER_ID
      );
      console.log(result.text);
      window.alert("Email enviado");

      const now = new Date();
      localStorage.setItem('lastSent', now.toISOString());
      setCanSubmit(false);
    } catch (error) {
      console.log(error);
      window.alert("Erro ao enviar email");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.email_form_container}>
      <form onSubmit={sendEmail} className={styles.email_form}>
        <h2>Me envie um email!</h2>
        <div className={styles.form_group}>
          <label htmlFor="title">Titulo</label>
          <input
            className={styles.titulo}
            type="text"
            placeholder="O Titulo do email vai aqui"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={!canSubmit}
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="subject">Assunto</label>
          <textarea
            className={styles.assunto}
            placeholder="O Assunto do email vai aqui"
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            disabled={!canSubmit}
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="Nome">Nome</label>
          <input
            className={styles.titulo}
            type="text"
            placeholder="O Seu nome vai aqui"
            id="nome"
            name="nome"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!canSubmit}
          />
        </div>
        <input
          type="submit"
          value="Enviar"
          className={styles.submit_button}
          disabled={isSubmitting || !canSubmit}
        />
      </form>
    </div>
  );
};

export default EmailForm;
