import Button from '@/components/button/button/button'
import styles from './form.module.css'

const Form = async () => {
  return (
    <div className={styles.container}>
      <form>
        <label>Fulde Navn</label>
        <input type='text' name='name' required />
        <label>E-mail</label>
        <input type='email' name='email' required />
        <label>Ris og/eller ros</label>
        <textarea name='message' required />
      </form>
      <div>
        <Button
          title={'Opret'}
          link={'formSuccess'}
          className={styles.buttonHeight}
        />
      </div>
    </div>
  )
}

export default Form
