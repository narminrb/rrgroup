import { useEffect, useState } from "react";
import {
  getAboutValues,
  deleteAboutValue,
  createAboutValue,
  updateAboutValue, // make sure this is defined in your API utils
} from "../../../../http/event";
import Open from "../../../../assets/open.svg";
import clsx from "clsx";
import styles from "./style.module.scss";
import Trash from "../../../../assets/trash.svg";
import SearchIcon from "../../../../assets/searchicon.svg";
import RichTextEditor from "../../RichTextEditor";
import Edit from "../../../../assets/edit.svg";

const AdminValues = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [aboutValues, setAboutValues] = useState([]);
  const [content, setContent] = useState("");

  const [newValue, setNewValue] = useState({
    name: "",
    desc: "",
    image: { url: "" },
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    getAboutValues()
      .then((res) => setAboutValues(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (id) => {
    deleteAboutValue(id).then(() => {
      setAboutValues((prev) => prev.filter((val) => val.id !== id));
    });
  };

  const handleEdit = (val) => {
    setIsEditing(true);
    setEditId(val.id);
    setNewValue({
      name: val.name,
      desc: val.desc,
      image: { url: val.image.url },
    });
    setContent(val.desc);
    setModalOpen(true);
  };

  const resetForm = () => {
    setNewValue({ name: "", desc: "", image: { url: "" } });
    setContent("");
    setModalOpen(false);
    setIsEditing(false);
    setEditId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newValue.name || !content || !newValue.image.url) return;

    const payload = { ...newValue, desc: content };

    if (isEditing) {
      updateAboutValue(editId, payload).then((res) => {
        setAboutValues((prev) =>
          prev.map((item) => (item.id === editId ? res.data : item))
        );
        resetForm();
      });
    } else {
      createAboutValue(payload).then((res) => {
        setAboutValues((prev) => [...prev, res.data]);
        resetForm();
      });
    }
  };

  return (
    <div className="p-8 mx-auto">
      {modalOpen && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.2)] flex justify-center items-center z-50 px-4 overflow-x-hidden"
          onClick={resetForm}
        >
          <div
            className={clsx(styles.modal)}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl font-bold"
              onClick={resetForm}
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className={clsx(styles.cardname)}>Dəyərlərimiz</div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className={clsx(styles.modalinput)}
                value={newValue.name}
                onChange={(e) =>
                  setNewValue({ ...newValue, name: e.target.value })
                }
              />

              <RichTextEditor value={content} onChange={setContent} />
              <input
                type="text"
                placeholder="Image URL"
                className="border p-2 w-full"
                value={newValue.image.url}
                onChange={(e) =>
                  setNewValue({
                    ...newValue,
                    image: { url: e.target.value },
                  })
                }
              />
              <button className={clsx(styles.modalbtn)} type="submit">
                {isEditing ? "Yenilə" : "Yadda saxla"}
              </button>
            </form>
          </div>
        </div>
      )}

      <div className={clsx(styles.card)}>
        <table className="w-full table-auto border-collapse">
          <tbody>
            <tr>
              <td className={clsx(styles.cardname)}>
                Dəyərlərimiz
                <div
                  className={clsx(
                    styles.cardsearch,
                    "flex items-center gap-2"
                  )}
                >
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border-b border-gray-400 px-0 w-full text-sm outline-none"
                  />
                  <SearchIcon className="w-5 h-5 text-gray-500" />
                </div>
                <button
                  className={clsx(styles.cardopen)}
                  onClick={() => {
                    setIsEditing(false);
                    setEditId(null);
                    setModalOpen(true);
                  }}
                >
                  <Open />
                </button>
              </td>
            </tr>

            {aboutValues
              .filter((val) =>
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((val) => (
                <tr key={val.id}>
                  <td className="w-15">
                    <img
                      src={val.image.url}
                      className="w-12 h-12 object-contain"
                    />
                  </td>

                  <td className={clsx(styles.cardrow)}>
                    <div
                      className={clsx(styles.cardedit)}
                      onClick={() => handleEdit(val)}
                    >
                      <Edit />
                    </div>
                    {val.name}
                  </td>

                  <td>
                    <button
                      onClick={() => handleDelete(val.id)}
                      className="text-red-500 hover:underline"
                    >
                      <Trash />
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

export default AdminValues;
