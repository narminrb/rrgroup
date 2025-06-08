import React, { useState } from 'react'
import styles from './style.module.scss'

import { postApiData } from "@/http/api";


const CareerCv = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    position: '',
    motivation: '',
    file: null,
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { fullName, phone, email, position, motivation, file } = formData;
  
    const cvData = {
      fullName,
      phone,
      email,
      position,
      motivation,
      fileName: file?.name || '',
    };
  
    try {
      await postApiData("cvSubmissions", cvData);
      alert("CV uğurla göndərildi!");
    } catch (error) {
      console.error("Error submitting CV:", error);
      alert("Göndərmə zamanı xəta baş verdi.");
    }
  };
  

  return (
   <div className="container max-w-screen-xl mx-auto my-10 px-3 relative">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <form onSubmit={handleSubmit} className={styles.formGrid}>
      <h2 className={styles.title}>CV göndər</h2>

      <div className={styles.inputGroupFull}>
        <label>Ad və soyad</label>
        <input type="text" name="fullName" onChange={handleChange} required className={styles.input} />
      </div>

      <div className={styles.inputGroupFull}>
        <label>Əlaqə nömrəsi</label>
        <input type="text" name="phone" onChange={handleChange} required className={styles.input} />
      </div>

      <div className={styles.inputGroupFull}>
        <label>E-mail</label>
        <input type="email" name="email" onChange={handleChange} required className={styles.input} />
      </div>

      <div className={styles.inputGroupFull}>
        <label>İşləmək istədiyiniz pozisiya</label>
        <input type="text" name="position" onChange={handleChange} required className={styles.input} />
      </div>

      <div className={styles.inputGroupFull}>
        <label>Bu sahə üzrə motivasiyanız</label>
        <textarea name="motivation" onChange={handleChange} required className={styles.textarea} />
      </div>

      <div className={styles.fileAndButtonBlock}>
  <label htmlFor="cvFile" className={styles.fileLabel}>CV faylınızı daxil edin</label>
  <div className={styles.fileAndButton}>
    <input
      id="cvFile"
      type="file"
      name="file"
      accept=".pdf,.doc,.docx"
      onChange={handleChange}
      required
      className={styles.fileInput}
    />
    <button type="submit" className={styles.submitButton}>Göndər</button>
  </div>
</div>

    </form>
    </div>
   </div>
  )
}

export default CareerCv
