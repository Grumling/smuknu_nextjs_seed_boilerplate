'use client'
import { useState } from 'react'
import styles from './accordion.module.css'
import { FaQuestion } from 'react-icons/fa6'

const HealthAccordion = () => {
  const [openIndex, setOpenIndex] = useState(!null)

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
                <p className={styles.content}>{item.content}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const data = [
  {
    question: 'Hvorfor dannes pigmentering?',
    content:
      'Vores brune pigmentering i huden kommer fra vores melaninceller, også kaldet melanocytter. De frigiver melanin til vores celler og lægger sig som en paraply oven på cellen for at beskytte cellens dna. Pigmentfejl skyldes skade eller forvirring i melanocytterne. Det kan være på grund af at huden har været udsat for meget sol eller skyldes hormoner som f.eks. stress eller graviditet. Pigmentering i forbindelse med stress kan ske ved overproduktion af stress hormon da det minder meget om vores melaninstimulerende hormon, og på den måde snyder kroppen til at danne melanin.',
  },
  {
    question: 'Glycerin, som dagens helt?',
    content:
      'Vores brune pigmentering i huden kommer fra vores melaninceller, også kaldet melanocytter. De frigiver melanin til vores celler og lægger sig som en paraply oven på cellen for at beskytte cellens dna. Pigmentfejl skyldes skade eller forvirring i melanocytterne. Det kan være på grund af at huden har været udsat for meget sol eller skyldes hormoner som f.eks. stress eller graviditet. Pigmentering i forbindelse med stress kan ske ved overproduktion af stress hormon da det minder meget om vores melaninstimulerende hormon, og på den måde snyder kroppen til at danne melanin.',
  },
  {
    question: 'Hvorfor får man skæl?',
    content:
      'Vores brune pigmentering i huden kommer fra vores melaninceller, også kaldet melanocytter. De frigiver melanin til vores celler og lægger sig som en paraply oven på cellen for at beskytte cellens dna. Pigmentfejl skyldes skade eller forvirring i melanocytterne. Det kan være på grund af at huden har været udsat for meget sol eller skyldes hormoner som f.eks. stress eller graviditet. Pigmentering i forbindelse med stress kan ske ved overproduktion af stress hormon da det minder meget om vores melaninstimulerende hormon, og på den måde snyder kroppen til at danne melanin.',
  },
]

export default HealthAccordion
