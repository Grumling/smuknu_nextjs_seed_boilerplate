'use client'
import styles from './form.module.css'
import FormComplete from '@/app/(site)/(membership)/formSuccess/page'
import { useState } from 'react'

const Form = () => {
  const [formSubmitted, setFormSubmitted] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { name, email, message } = e.target.elements
    console.log(name.value, email.value, message.value)

    let result = await fetch('/api/subscriber', {
      method: 'POST',
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    }).then(async (res) => {
      let result = await res.json()

      setFormSubmitted(result.data)
      console.log('Repsonse', result.data.name)
    })

    //setFormSubmitted(true)
  }
  return (
    <div className={styles.container}>
      {formSubmitted.name ? (
        <FormComplete name={formSubmitted.name} />
      ) : (
        <form className={styles.formWrapper} onSubmit={handleSubmit}>
          <label>Fulde Navn</label>
          <input type='text' name='name' required />
          <label>E-mail</label>
          <input type='email' name='email' required />
          <label>Ris og/eller ros</label>
          <textarea name='message' required />
          <div>
            <button className={styles.formButton} type='submit'>
              Send
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default Form
