'use client'
import Button from '@/components/button/button/button'
import styles from './form.module.css'
import FormComplete from '@/app/(membership)/formSuccess/page'
import { useState } from 'react'

const Form = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  return (
    <div className={styles.container}>
      {formSubmitted ? (
        <FormComplete />
      ) : (
        <form
          className={styles.formWrapper}
          onSubmit={(e) => {
            e.preventDefault()
            setFormSubmitted(true)
          }}
        >
          <label>Fulde Navn</label>
          <input type='text' name='name' required />
          <label>E-mail</label>
          <input type='email' name='email' required />
          <label>Ris og/eller ros</label>
          <textarea name='message' required />
          <div>
            <button type='submit'>CLICK ME</button>
          </div>
        </form>
      )}
    </div>
  )
}

export default Form
