import { Button } from "react-bootstrap";

export default function IconButton({ isTop, className, onClick, text }) {
  return (
    <Button variant="light" className="rounded-pill" onClick={onClick}>
      <i
        className={`${className} me-3`}
        style={{ fontSize: "24px", color: isTop ? "dodgerblue" : "black" }}
      ></i>
      {text}
    </Button>
  );
}