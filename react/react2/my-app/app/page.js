import Image from "next/image";
import styles from "./page.module.css";
import Mars from "./components/Mars";
import Form from "./components/Form";

export default function Home() {
  return (
    <div>
      <Mars />
      <Form />
    </div>
  );
}
