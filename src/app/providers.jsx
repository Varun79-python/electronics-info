import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'
import AppRouter from './router'
import MainLayout from './layouts/MainLayout'
import PageLoader from '../shared/components/loaders/PageLoader'

export default function Providers() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <MainLayout>
            <AppRouter />
          </MainLayout>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  )
}
