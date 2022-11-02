import { CircularProgress } from "@mui/material";
import "./styles.scss";

type Props = { title: string };

export default function Spinner({ title }: Props) {
  return (
    <div className="spinner-container">
      <span>{title}</span>
      <CircularProgress />
    </div>
  );
}
