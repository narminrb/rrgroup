import clsx from 'clsx'
import React from 'react'
import styles from './style.module.scss'

const AboutManagement = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8">
      <h1 className={clsx(styles.history, "text-center mb-6")}>İdarəetmə strukturu</h1>
      
      <div className="max-w-4xl text-center">
        <p className={clsx(styles.histdesc)}>
        “RR Group of Companies” biznesin müxtəlif sahələri üzrə fəaliyyət göstərir və investisiya yatırımları həyata keçirir. Şirkətlər Qrupu 7 şirkət və 3 xarici nümayəndəlikdən ibarətdir.Qrup kənd təsərrüfatı, tikinti, ticarət, logistika, okyektlərin icarəsi və istismarı istiqamətində fəaliyyət göstərir, bu sahələrdə əsaslı investisiya layihələrini reallaşdırır.Getdikcə genişlənən və inkişaf edən“RR Group of Companies”-in təşkilati fəaliyyətin müasir korporativ idarəetmə təcrübələrinə və yüksək peşəkarlığa əsaslanır. İdarəetmədə “səlahiyyət ver, nəzarət et və yoxla” prinsipi əsas götürülür.Funksional bölmələrin strateji fəaliyyəti vahid mərkəzdən istiqamətləndirilir və mərkəzdən qəbul olunmuş vahid idarəetmə standartları əsasında təşkil olunur.
 
        </p>
      </div>
    </div>
  )
}

export default AboutManagement
