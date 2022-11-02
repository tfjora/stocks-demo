import "./styles.scss";

type Props = { error: any };

export default function ErrorPage({ error }: Props) {
  return (
    <div className="error-container">
      <div>
        <h2>Something went wrong</h2>
      </div>
      <div>{error?.message}</div>
    </div>
  );
}
