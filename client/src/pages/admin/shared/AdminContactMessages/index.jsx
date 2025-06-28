import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./style.module.scss";
import Trash from "../../../../assets/trash.svg";
import { deleteContactMessages, getContactsMessages } from "@/http/contactMessages";

const AdminContactMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getContactsMessages()
      .then((res) => {
        const data = Array.isArray(res?.data) ? res.data : [res.data];
        setMessages(data);
      })
      .catch((err) => {
        console.error("Failed to fetch contact messages", err);
        setMessages([]);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteContactMessages(id);
      setMessages((prev) => prev.filter((msg) => msg.id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <div className={clsx(styles.card)}>
      <div className="overflow-auto">
      <table>
  <thead>
    <tr>
      <th><div className={styles.flexCelll}>Ad və soyad</div></th>
      <th><div className={styles.flexCelll}>Mövzu</div></th>
      <th><div className={styles.flexCelll}>Tarix</div></th>
      <th><div className={styles.flexCelll}>Nömrə</div></th>
      <th><div className={styles.flexCelll}>E-mail</div></th>
      <th><div className={styles.flexCelll}>Mesaj</div></th>
      <th><div className={styles.flexCelll}>Sil</div></th>
    </tr>
  </thead>
  <tbody>
    {messages.map((item) => (
      <tr key={item.id}>
        <td><div className={styles.flexCell}>{item.fullName}</div></td>
        <td><div className={styles.flexCell}>{item.topic}</div></td>
        <td><div className={styles.flexCell}>{new Date(item.createdAt).toLocaleDateString()}</div></td>
        <td><div className={styles.flexCell}>{item.phone}</div></td>
        <td><div className={styles.flexCell}>{item.email}</div></td>
        <td><div className={styles.flexCell} style={{ overflowWrap: "break-word" }}>{item.message}</div></td>
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

export default AdminContactMessages;
