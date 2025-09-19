import styles from "@/styles/AboutMePage.module.scss";

export default function AboutMe() {
  return (
    <main className={styles.aboutMe}>
      <h1 className={styles.title}>¡Hola! 👋, soy David Polanía M.</h1>
      <h3 className={styles.subtitle}>
        Software Engineer | Golang | Full Stack | Cloud | Arquitecturas
        Escalables
      </h3>

      {/* Enlaces Sociales */}
      <div className={styles.socialLinks}>
        <a
          href="https://x.com/davidpolme"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/badge/-X-000000?style=for-the-badge&logoColor=white"
            alt="Perfil en X"
          />
        </a>
        <a
          href="https://linkedin.com/in/davidpolme"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/badge/-LinkedIn-blue?style=for-the-badge&logo=linkedin"
            alt="Perfil en LinkedIn"
          />
        </a>
        <a
          href="https://dev.to/davidpolme"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/badge/-DEV.to-black?style=for-the-badge&logo=dev.to"
            alt="Perfil en Dev.to"
          />
        </a>
        <a
          href="https://leetcode.com/u/davidpolme/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/badge/-LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=white"
            alt="Perfil en LeetCode"
          />
        </a>
      </div>

      {/* Sobre mí */}
      <section className={styles.section}>
        <h2>🚀 Sobre mí</h2>
        <ul>
          <li>
            💡 Ingeniero de software con experiencia en{" "}
            <b>desarrollo backend en Go</b> y conocimiento sólido en{" "}
            <b>desarrollo full stack</b>.
          </li>
          <li>
            🎓 Máster en <b>Ingeniería Informática</b> por la{" "}
            <a
              href="https://www.uniandes.edu.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Universidad de los Andes
            </a>
            .
          </li>
          <li>
            🌱 Me especializo en <b>microservicios</b>,{" "}
            <b>arquitecturas cloud</b> y <b>bases de datos distribuidas</b>, con
            experiencia en <b>Kafka, Redis y PostgreSQL</b>.
          </li>
          <li>
            🔭 Trabajo en proyectos que combinan{" "}
            <b>
              Golang, React, Kafka, Redis, MongoDB, Azure, AWS, Grafana y
              Elasticsearch
            </b>
            .
          </li>
          <li>
            ⚡ Me motiva aplicar <b>buenas prácticas de arquitectura</b>,{" "}
            <b>observabilidad</b> y <b>CI/CD</b> para entregar software
            escalable y mantenible.
          </li>
          <li>
            🎮 Fun fact: disfruto los juegos de estrategia y jugar{" "}
            <a
              href="https://www.aoe2insights.com/user/1231262/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Age of Empires 2 DE
            </a>
            .
          </li>
        </ul>
      </section>

      {/* Stack Tecnológico */}
      <section className={styles.section}>
        <h2>💻 Stack Tecnológico</h2>

        <h3>🏗️ Backend</h3>
        <div className={styles.icons}>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg"
            alt="Golang"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
            alt="Python"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
            alt="MongoDB"
          />
          <img
            src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
            alt="PostgreSQL"
          />
          <img
            src="https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg"
            alt="Kafka"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg"
            alt="Redis"
          />
        </div>

        <h3>🖥️ Frontend</h3>
        <div className={styles.icons}>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="React.js"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="JavaScript"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
            alt="TypeScript"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
            alt="HTML5"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
            alt="CSS3"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
            alt="Sass"
          />
        </div>

        <h3>☁️ Cloud & DevOps</h3>
        <div className={styles.icons}>
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
            alt="AWS"
          />
          <img
            src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg"
            alt="Azure"
          />
          <img
            src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg"
            alt="Kubernetes"
          />
          <img
            src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg"
            alt="Docker"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/githubactions/githubactions-original.svg"
            alt="GitHub Actions"
          />
        </div>

        <h3>📊 Observabilidad & Monitoreo</h3>
        <div className={styles.icons}>
          <img
            src="https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg"
            alt="Grafana"
          />
          <img
            src="https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg"
            alt="ElasticSearch"
          />
        </div>

        <h3>🤖 Intereses en IA/ML</h3>
        <div className={styles.icons}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
            alt="Scikit-learn"
          />
          <img
            src="https://pandas.pydata.org/static/img/pandas_mark.svg"
            alt="Pandas"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg"
            alt="TensorFlow"
          />
        </div>
      </section>
    </main>
  );
}
