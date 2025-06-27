import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./style.module.scss";
import Edit from "../../../../assets/edit.svg";
import { getHomeAbout, updateHomeAbout } from "@/http/homeabout";

const AdminHomeAbout = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [editedCard, setEditedCard] = useState({ title: "", description: "" });
  const [aboutCards, setAboutCards] = useState([]);
const [paragraph, setParagraph] = useState("");
const [image, setImage] = useState("");

const [id, setId] = useState(null);

useEffect(() => {
  getHomeAbout()
    .then((res) => {
      const item = res.data;
      setId(item.id); // store ID
      setAboutCards(item.aboutCards || []);
      setParagraph(item.paragraph || "");
      setImage(item.image || "");
    })
    .catch(console.error);
}, []);



  const openModal = (index) => {
    setActiveCardIndex(index);
    setEditedCard({ ...aboutCards[index] });
    setModalOpen(true);
  };

  const resetForm = () => {
    setModalOpen(false);
    setActiveCardIndex(null);
    setEditedCard({ title: "", description: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const updatedCards = [...aboutCards];
      updatedCards[activeCardIndex] = { ...editedCard };
  
      const fullBody = {
        id, // ✅ now include ID
        paragraph,
        image,
        aboutCards: updatedCards,
      };
  
      await updateHomeAbout(fullBody);
      setAboutCards(updatedCards);
      resetForm();
    } catch (err) {
      console.error("Update failed:", err.response?.data || err.message);
      alert("Əməliyyat zamanı xəta baş verdi.");
    }
  };
  
  

  return (
    <div className="p-8 mx-auto">
      {modalOpen && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.2)] flex justify-center items-center z-50 px-4 overflow-x-hidden"
          onClick={resetForm}
        >
          <div className={clsx(styles.modal)} onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl font-bold"
              onClick={resetForm}
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className={clsx(styles.cardname)}>Kartı redaktə et</div>

            <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Title"
                className={clsx(styles.modalinput)}
                value={editedCard.title}
                onChange={(e) =>
                  setEditedCard((prev) => ({ ...prev, title: e.target.value }))
                }
              />
              <textarea
                rows={3}
                placeholder="Description"
                className={clsx(styles.modalinput)}
                value={editedCard.description}
                onChange={(e) =>
                  setEditedCard((prev) => ({ ...prev, description: e.target.value }))
                }
              />
              <button className={clsx(styles.modalbtn)} type="submit">
                Yadda saxla
              </button>
            </form>
          </div>
        </div>
      )}

      <div className={clsx(styles.card)}>
        <table className="w-full table-auto border-collapse">
          <tbody>
            <tr>
              <td className={clsx(styles.cardname)}>Dəyərlərimiz</td>
            </tr>
            {aboutCards.map((card, idx) => (
              <tr key={idx}>
                <td className={clsx(styles.cardrow, "flex justify-between items-center")}>
                  <div>
                    <strong>{card.title}</strong>: {card.description}
                  </div>
                  <button
                    className={clsx(styles.cardedit)}
                    onClick={() => openModal(idx)}
                  >
                    <Edit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHomeAbout;
