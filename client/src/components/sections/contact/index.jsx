import React, { useState } from 'react'
import styles from './style.module.scss'
import { postApiData } from "@/http/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    topic: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, phone, email, topic, message } = formData;

    const contactData = {
      fullName,
      phone,
      email,
      topic,
      message,
    };

    try {
      await postApiData("/v1/contact/apply", contactData);
      alert("Məlumat uğurla göndərildi!");
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Göndərmə zamanı xəta baş verdi.");
    }
  };

  return (
    <div className="container max-w-screen-xl mx-auto my-10 px-3 relative">
      <form onSubmit={handleSubmit} className={styles.formGrid}>
        <div className={styles.inputGroupFull}>
          <input
            type="text"
            placeholder="Ad və soyad"
            name="fullName"
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroupFull}>
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroupFull}>
          <input
            type="text"
            placeholder="Əlaqə nömrəsi"
            name="phone"
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroupFull}>
          <input
            type="text"
            placeholder="Mövzu"
            name="topic"
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroupFull}>
          <textarea
            name="message"
            placeholder="Mesaj"
            onChange={handleChange}
            required
            className={styles.textarea}
          />
        </div>
        <div className={styles.fileAndButtonBlock}>
          <button type="submit" className={styles.submitButton}>Göndər</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
