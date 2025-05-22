import clsx from 'clsx'
import React from 'react'
import styles from './style.module.scss'

const AboutHistory = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8">
      <h1 className={clsx(styles.history, "text-center mb-6")}>Korporativ tarix</h1>
      
      <div className="max-w-4xl text-center">
        <p className={clsx(styles.histdesc)}>
          RR Group of Companies 2006-cı ildə təsis edilmişdir. Fəaliyyət göstərdiyi müddət ərzində RR Group of Companies Azərbaycanın iri özəl şirkətlərindən birinə çevrilmiş, ölkə və dünya iqtisadiyyatında baş verən proseslərə çevik reaksiya göstərərək biznes fəaliyyətini uğurla davam etdirmişdir.

        <br />
        <br/>
          Şirkətin fəaliyyət bütövlüyünü obyektivlik, şəffaflıq və müasir korporativ idarəetmə standartları təşkil edir. Məhz bu amillər, RR Group of Companies-ə bu gün “harda olduğunu” müəyyən etməyə, “hara getməli olduğunu” hədəfləməyə və “necə getməli olduğunu” planlaşdırmağa imkan verir.
    <br/>
    <br />
          RR Group of Companies biznesin müxtəlif sahələri - tikinti, ticarət və logistika sahələri üzrə uğurlu investisiya layihələrini reallaşdırır. Faəliyyətinin əsas məqsədi biznesin effektiv idarə olunması, korporativ idarəetmə standartlarına uyğun ölkə daxilində və onun hüdudlarından kənarda keyfiyyət brendinə - rəqabətə davamlı şirkətə çevrilməkdir.
        </p>
      </div>
    </div>
  )
}

export default AboutHistory
