import Link from 'next/link'
import { LightLayout } from '../components/layouts/LightLayout'
import { MainLayout } from '../components/layouts/MainLayout'
import { ReactElement } from 'react';

export default function About() {
  return (
    <>
     <h1 className='title'>
        Go to <Link href="/">Home</Link>
     </h1>

      <p className='description'>
        Get started by editing{' '}
        <code className='code'>pages/index.js</code>
      </p> 
    </>
  )
}

About.getLayout = function getLayout(page:ReactElement) {
  return (
    <LightLayout>
      <MainLayout title='About'>
        {page}
      </MainLayout>
    </LightLayout>
  )
}
