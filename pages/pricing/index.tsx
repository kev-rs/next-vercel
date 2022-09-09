import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function Pricing() {
  return (
    <MainLayout title='Pricing'>
      <h1 className='title'>
          Go to <Link href="/about">Home</Link>
      </h1>

      <p className='description'>
        Get started by editing{' '}
        <code className='code'>pages/index.js</code>
      </p>
    </MainLayout>
  )
}
