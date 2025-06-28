import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./style.module.scss";
import Edit from "../../../../assets/edit.svg";
import { getHomeAbout, updateHomeAbout } from "@/http/homeabout";

const AdminHomeAbout = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editedCard, setEditedCard] = useState({ id: null, title: "", description: "" });
  const [cards, setCards] = useState([]);
  

  useEffect(() => {
    getHomeAbout()
      .then((res) => {
        setCards(res.data || []);
      })
      .catch(console.error);
  }, []);

  const openModal = (card) => {
    setEditedCard({ ...card });
    setModalOpen(true);
  };

  const resetForm = () => {
    setModalOpen(false);
    setEditedCard({ id: null, title: "", description: "" });
  };
  // const handleDelete = async (id) => {
  //   if (!confirm("Silmək istədiyinizə əminsiniz?")) return;
  
  //   try {
  //     await deleteHomeAbout(id);
  //     setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  //   } catch (err) {
  //     console.error(err.response?.data || err.message);
  //     alert("Silinərkən xəta baş verdi.");
  //   }
  // };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
  
      const request = {
        title: editedCard.title.trim(),
        paragraph: editedCard.description.trim(),
      };
  
      formData.append(
        "request",
        new Blob([JSON.stringify(request)], { type: "application/json" })
      );
  
      // 👇 Use PUT with ID
      await updateHomeAbout(editedCard.id, formData);
  
      // 🛠 Update local state
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === editedCard.id ? { ...card, ...editedCard } : card
        )
      );
  
      resetForm();
    } catch (err) {
      console.error(err.response?.data || err.message);
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
            {cards.map((card) => (
              <tr key={card.id}>
                <td className={clsx(styles.cardrow, "flex justify-between items-center")}>
                  <div>
                    <strong>{card.title}</strong>: {card.description}
                  </div>
                  <button
                    className={clsx(styles.cardedit)}
                    onClick={() => openModal(card)}
                  >
                    <Edit />
                  </button>
                  {/* <button
  className="ml-4 text-red-600 hover:text-red-800"
  onClick={() => handleDelete(card.id)}
  title="Sil"
>
  ✖
</button> */}

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
