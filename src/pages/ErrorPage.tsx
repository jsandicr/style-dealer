import { Layout } from '../components/Layout'
import { Trend }from '../components/Trend'

export const ErrorPage = () => {
    return(
        <Layout className='flex flex-col gap-14 my-10 text-center'>
            <span className='text-xl font-semibold'>Lo sentimos, no hemos encontrado la página que estás buscando.</span>
            <Trend />
        </Layout>
    )
}