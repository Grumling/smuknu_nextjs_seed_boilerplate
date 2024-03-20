'use client'
import { useState, useEffect } from 'react'
import styles from './accordion.module.css'
import { FaQuestion } from 'react-icons/fa6'

const HealthAccordion = () => {
  const [openIndex, setOpenIndex] = useState(!null)
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/questions')
      const data = await response.json()

      setData(data)
    }

    fetchData()
  }, [])

  return (
    <div className={styles.accordioncontainer}>
      <div className={styles.accordion}>
        {data.map((item, index) => (
          <div key={index} className={styles.accordionItem}>
            <div className={styles.accordionLine}>
              <div className={styles.titleInline}>
                <FaQuestion />
                <h2
                  onClick={() =>
                    setOpenIndex(index === openIndex ? null : index)
                  }
                >
                  {item.question}
                </h2>
              </div>
              {openIndex === index && (
                <div className={styles.content}>
                  {item._id === '65e861b298ef8bdfc7391c6c' ? (
                    <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                  ) : (
                    <p>{item.answer}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HealthAccordion
