import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./style.module.scss";
import Trash from "../../../../assets/trash.svg";
import { getCv } from "@/http/cv";

const AdminCv = () => {
  const [messages, setMessages] = useState([]);
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    getCv()
      .then((res) => {
        const data = Array.isArray(res?.data) ? res.data : [res.data];
        setMessages(data);
      })
      .catch((err) => {
        console.error("Failed to fetch contact messages", err);
        setMessages([]);
      });
  }, []);

//   const handleDelete = async (id) => {
//     try {
//       await deleteContactMessages(id);
//       setMessages((prev) => prev.filter((msg) => msg.id !== id));
//     } catch (err) {
//       console.error("Delete failed", err);
//     }
//   };

  return (
    <div className={clsx(styles.card)}>
      <div className="overflow-auto">
      <table>
  <thead>
    <tr>
      <th><div className={styles.flexCelll}>Ad və soyad</div></th>
      <th><div className={styles.flexCelll}>Pozisiya</div></th>
      <th><div className={styles.flexCelll}>Nömrə</div></th>
      <th><div className={styles.flexCelll}>E-mail</div></th>
      <th><div className={styles.flexCelll}>Motivasiya</div></th>
      <th><div className={styles.flexCelll}>CV</div></th>
      <th><div className={styles.flexCelll}>Sil</div></th>
    </tr>
  </thead>
  <tbody>
    {messages.map((item) => (
      <tr key={item.id}>
        <td><div className={styles.flexCell}>{item.fullName}</div></td>
        <td><div className={styles.flexCell}>{item.position}</div></td>
        <td><div className={styles.flexCell}>{item.contactNumber}</div></td>
        <td><div className={styles.flexCell}>{item.email}</div></td>
        <td><div className={styles.flexCell} style={{ overflowWrap: "break-word" }}>{item.motivation}</div></td>
        <td>
            <div className={styles.flexCell}>
            <a
                href={`${baseURL}/v1/files/view/${item.cvFile}`} 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.downloadLink}
                >
                CV bax
                </a>
            </div>
            </td>

        <td>
          <button onClick={() => handleDelete(item.id)}><Trash /></button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      </div>
    </div>
  );
};

export default AdminCv;
