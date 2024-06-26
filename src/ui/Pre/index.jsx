import './pre.styles.css';

export const Pre = ({ data }) => {
  if (!data) return null;

  return <pre className="pre">{JSON.stringify(data, null, 2)}</pre>;
};
