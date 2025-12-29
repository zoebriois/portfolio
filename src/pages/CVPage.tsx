import React from 'react';
import styles from './CVPage.module.css';

const CVPage: React.FC = () => {
  const cvPdfUrl = "/CV.pdf";

  return (
    <div className={styles.cvPage}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>CV</h1>
        </div>

        <div className={styles.iframeContainer}>
          <div className={styles.pdfWrapper}>
            <a
              href={cvPdfUrl}
              className={styles.primaryButton}
              download="CV_Zoe_Briois.pdf"
            >
              Télécharger (PDF)
            </a>

            <object
              data={`${cvPdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
              type="application/pdf"
              className={styles.iframe}
              aria-label="CV - Zoé Briois"
            >
              <p>
                Votre navigateur ne peut pas afficher le PDF.{' '}
                <a href={cvPdfUrl} download="CV_Zoe_Briois.pdf">
                  Téléchargez-le ici
                </a>
              </p>
            </object>
          </div>
        </div>

        </div>
      </div>
      );
      };

      export default CVPage;
