import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section>
      <p>{title}</p>
      {children}
    </section>
  );
};

export default Section;
