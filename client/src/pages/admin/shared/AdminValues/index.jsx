import { useEffect, useState } from "react";
import {
  getAboutValues,
  deleteAboutValue,
  createAboutValue,
  updateAboutValue, 
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
      .then(res => {
        const items = res.data; 
        const normalized = items.map(item => ({
          id: item.id,
          name: item.title,
          desc: item.paragraph,
          image: {
            url: item.icon
              ? `${import.meta.env.VITE_API_BASE_URL}/v1/files/view/${item.icon}`
              : "https://via.placeholder.com/150"
          }
        }));
        setAboutValues(normalized);
      })
      .catch(console.error);
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
      image: {
        file: undefined, 
        url: val.image.url, 
      },
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
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!newValue.name.trim() || !content.trim()) {
      alert("Zəhmət olmasa bütün xanaları doldurun.");
      return;
    }
  
    try {
      const formData = new FormData();
  
      const dto = {
        title: newValue.name.trim(),
        paragraph: content.trim(),
      };
  
      formData.append("dto", new Blob([JSON.stringify(dto)], { type: "application/json" }));
  
      if (newValue.image.file) {
        formData.append("file", newValue.image.file);
      }
  
      let response;
      if (isEditing) {
        response = await updateAboutValue(editId, formData);
        setAboutValues((prev) =>
          prev.map((item) => (item.id === editId ? response.data : item))
        );
      } else {
        response = await createAboutValue(formData);
        setAboutValues((prev) => [...prev, response.data]);
      }
  
      resetForm();
    } catch (err) {
      console.error(
        isEditing ? "Update failed:" : "Create failed:",
        err.response?.data || err.message
      );
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
            type="file"
            accept="image/*"
            className="border p-2 w-full"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setNewValue((prev) => ({
                  ...prev,
                  image: {
                    file,
                    url: URL.createObjectURL(file), 
                  },
                }));
              }
            }}
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
            .filter(val => {
              if (!val?.name || typeof val.name !== 'string') return false;
              return val.name.toLowerCase().includes(searchTerm.toLowerCase());
            })
              .map(val => (
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
