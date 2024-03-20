'use client'
import { useState, useEffect } from 'react'

export default function Page() {
  const [subscribers, setSubscribers] = useState([])

  useEffect(() => {
    fetch('/api/subscribers') // replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setSubscribers(data))
  }, [])

  return (
    <main>
      <h1>Backoffice</h1>
      <ul>
        {subscribers.map((subscriber, index) => (
          <li key={index}>
            {subscriber.email} -{subscriber.message}
          </li> // replace 'email' with the property you want to display
        ))}
      </ul>
    </main>
  )
}
