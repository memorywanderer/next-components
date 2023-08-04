import { Button } from '@/components/ui/Button/Button'
import { Input } from '@/components/ui/Input/Input'

export default function Home() {
  return (
    <main>
      <form action="">
        <Input name='input' placeholder='Test placeholder' required />
        <Button type='submit'>Send</Button>
      </form>

    </main>
  )
}
