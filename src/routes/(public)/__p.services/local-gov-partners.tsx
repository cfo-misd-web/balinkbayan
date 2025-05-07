import { createFileRoute } from '@tanstack/react-router'
import Paragraph from '@/components/user/shared/paragraph'
import BiggerBanner from '@/components/user/shared/banner/bigger-banner'
import Heading4 from '@/components/user/shared/headings/heading-4'
import ImageHolder from '@/components/user/shared/images/image-holder'


export const Route = createFileRoute(
  '/(public)/__p/services/local-gov-partners',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <BiggerBanner text='Access Government Services' label='Local Government Partners' img_url='/img-assets/gov-services/local-gov-partners/web-macbook-air-1738168.jpg' />
      <section className='text-cyan-900'>
        <div className='max-lg:mx-4 3xl:max-w-[1400px] 2xl:max-w-[1280px] lg:max-w-[1080px] mx-auto my-20 bg-light max-lg:space-y-20 space-y-10'>
          <Paragraph>To reach more overseas Filipinos and enable them to connect directly with their home town, some services offered by select local government units are featured in the localized BaLinkBayan portals.</Paragraph>
          <Heading4 className='text-center mt-32 mb-20'>Provincial Government</Heading4>
          <div className='max-lg:space-y-20 space-y-10 flex flex-row max-lg:flex-col justify-center space-x-20 max-lg:space-x-0'>
            <div className='flex flex-row max-lg:justify-center space-x-20 justify-between'>
              <ImageHolder blb_url='https://agusandelnorte.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/agusan-del-norte-province-logo.png'>Agusan del Norte</ImageHolder>
              <ImageHolder blb_url='https://aklan.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/aklanlogo.png'>Aklan</ImageHolder>
            </div>
            <div className='flex flex-row max-lg:justify-center space-x-20  justify-between'>
              <ImageHolder blb_url='https://antiqueprovince.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/antique-logo.png'>Antique</ImageHolder>
              <ImageHolder blb_url='https://1bossco.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/Bataan.png'>Bataan</ImageHolder>
            </div>
          </div>
          <div className='max-lg:space-y-20 space-y-10 flex flex-row max-lg:flex-col justify-center space-x-20 max-lg:space-x-0'>
            <div className='flex flex-row max-lg:justify-center space-x-20 justify-between'>
              <ImageHolder blb_url='https://batangas.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/batangas.png'>Batangas</ImageHolder>
              <ImageHolder blb_url='https://camarinesnorte.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/camnorte.png'>Camarines Norte</ImageHolder>
            </div>
            <div className='flex flex-row max-lg:justify-center space-x-20  justify-between'>
              <ImageHolder blb_url='https://guimaras.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/guimaras.png'>Guimaras</ImageHolder>
              <ImageHolder blb_url='https://ilocosnorte.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/ilocosnorte.png'>Ilocos Norte</ImageHolder>
            </div>
          </div>
          <div className='max-lg:space-y-20 space-y-10 flex flex-row max-lg:flex-col justify-center space-x-20 max-lg:space-x-0'>
            <div className='flex flex-row max-lg:justify-center space-x-20 justify-between'>
              <ImageHolder blb_url='https://iloiloprovince.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/iloiloprovince.png'>Iloilo Province</ImageHolder>
              <ImageHolder blb_url='https://laguna.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/laguna.png'>Laguna</ImageHolder>
            </div>
            <div className='flex flex-row max-lg:justify-center space-x-20  justify-between'>
              <ImageHolder blb_url='https://negrosoccidental.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/negrosoccidental.png'>Negros Occidental</ImageHolder>
              <ImageHolder blb_url='https://pangasinan.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/pangasinan.png'>Pangasinan</ImageHolder>
            </div>
          </div>
          <div className='max-lg:space-y-20 space-y-10 flex flex-row max-lg:flex-col justify-center space-x-20 max-lg:space-x-0'>
            <div className='flex flex-row max-lg:justify-center space-x-20 justify-between'>
              <ImageHolder blb_url='https://samarprovince.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/Samar.png'>Samar</ImageHolder>
              <ImageHolder blb_url='https://sorsogonprovince.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/sorsogon-logo.png'>Sorsogon</ImageHolder>
            </div>
            <div className='flex flex-row max-lg:justify-center space-x-20  justify-between'>
              <ImageHolder blb_url='https://tarlacprovince.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/tarlac_official_seal.png'>Tarlac</ImageHolder>
            </div>
          </div>
          {/*  */}
          <Heading4 className='text-center mt-40 mb-20'>City Government</Heading4>
          <div className='max-lg:space-y-20 space-y-10 flex flex-row max-lg:flex-col justify-center space-x-20 max-lg:space-x-0'>
            <div className='flex flex-row max-lg:justify-center space-x-20 justify-between'>
              <ImageHolder blb_url='https://antipolo.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/antipolo-city-logo.png'>Antipolo</ImageHolder>
              <ImageHolder blb_url='https://bacoor.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/bacoor-logo.png'>Bacoor</ImageHolder>
            </div>
            <div className='flex flex-row max-lg:justify-center space-x-20  justify-between'>
              <ImageHolder blb_url='https://cabanatuancity.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/cabanatuan-logo.png'>Cabanatuan</ImageHolder>
              <ImageHolder blb_url='http://cagayandeoro.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/cagayandeoro-logo.png'>Cagayan de Oro</ImageHolder>
            </div>
          </div>
          <div className='max-lg:space-y-20 space-y-10 flex flex-row max-lg:flex-col justify-center space-x-20 max-lg:space-x-0'>
            <div className='flex flex-row max-lg:justify-center space-x-20 justify-between'>
              <ImageHolder blb_url='https://carcar.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/carcarcity-logo.png'>Carcar</ImageHolder>
              <ImageHolder blb_url='https://carmona.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/carmona-cavite.png'>Carmona</ImageHolder>
            </div>
            <div className='flex flex-row max-lg:justify-center space-x-20  justify-between'>
              <ImageHolder blb_url='https://catbalogancity.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/Catbalogan-City.png'>Catbalogan</ImageHolder>
              <ImageHolder blb_url='https://cebucity.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/cebucity.png'>Cebu</ImageHolder>
            </div>
          </div>
          <div className='max-lg:space-y-20 space-y-10 flex flex-row max-lg:flex-col justify-center space-x-20 max-lg:space-x-0'>
            <div className='flex flex-row max-lg:justify-center space-x-20 justify-between'>
              <ImageHolder blb_url='https://dagupan.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/dagupan.png'>Dagupan</ImageHolder>
              <ImageHolder blb_url='https://dumaguete.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/dumaguete.png'>Dumaguete</ImageHolder>
            </div>
            <div className='flex flex-row max-lg:justify-center space-x-20  justify-between'>
              <ImageHolder blb_url='https://iloilocity.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/iloilocity.png'>Iloilo City</ImageHolder>
              <ImageHolder blb_url='https://iriga.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/iriga.png'>Iriga</ImageHolder>
            </div>
          </div>
          <div className='max-lg:space-y-20 space-y-10 flex flex-row max-lg:flex-col justify-center space-x-20 max-lg:space-x-0'>
            <div className='flex flex-row max-lg:justify-center space-x-20 justify-between'>
              <ImageHolder blb_url='https://kidapawancity.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/kidapawan.png'>Kidapawan</ImageHolder>
              <ImageHolder blb_url='https://lapulapu.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/lapulapu-logo.png'>Lapu-Lapu</ImageHolder>
            </div>
            <div className='flex flex-row max-lg:justify-center space-x-20  justify-between'>
              <ImageHolder blb_url='https://legazpi.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/legazpi.png'>Legazpi</ImageHolder>
              <ImageHolder blb_url='https://ligao.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/ligao.png'>Ligao</ImageHolder>
            </div>
          </div>
          <div className='max-lg:space-y-20 space-y-10 flex flex-row max-lg:flex-col justify-center space-x-20 max-lg:space-x-0'>
            <div className='flex flex-row max-lg:justify-center space-x-20 justify-between'>
              <ImageHolder blb_url='https://mabalacat.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/mabalacat.png'>Mabalacat</ImageHolder>
              <ImageHolder blb_url='https://mabinilgu.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/mabini-batangas-logo.png'>Mabini</ImageHolder>
            </div>
            <div className='flex flex-row max-lg:justify-center space-x-20  justify-between'>
              <ImageHolder blb_url='https://masbatecity.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/masbate.png'>Masbate</ImageHolder>
              <ImageHolder blb_url='https://naga.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/naga.png'>Naga</ImageHolder>
            </div>
          </div>
          <div className='max-lg:space-y-20 space-y-10 flex flex-row max-lg:flex-col justify-center space-x-20 max-lg:space-x-0'>
            <div className='flex flex-row max-lg:justify-center space-x-20 justify-between'>
              <ImageHolder blb_url='https://pasigcity.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/pasigcity-logo.png'>Pasig</ImageHolder>
              <ImageHolder blb_url='https://quezoncity.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/quezoncitylogo.png'>Quezon City</ImageHolder>
            </div>
            <div className='flex flex-row max-lg:justify-center space-x-20  justify-between'>
              <ImageHolder blb_url='https://sorsogoncity.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/sorsogon-city.png'>Sorsogon</ImageHolder>
              <ImageHolder blb_url='https://tabaco.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/tabacocity.png'>Tabaco</ImageHolder>
            </div>
          </div>
          <div className='max-lg:space-y-20 space-y-10 flex flex-row max-lg:flex-col justify-center space-x-20 max-lg:space-x-0'>
            <div className='flex flex-row max-lg:justify-center space-x-20 justify-between'>
              <ImageHolder blb_url='https://tagbilaran.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/tagbilaran.png'>Tagbilaran</ImageHolder>
              <ImageHolder blb_url='https://tarlaccity.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/Tarlac-City.png'>Tarlac City</ImageHolder>
            </div>
            <div className='flex flex-row max-lg:justify-center space-x-20  justify-between'>
              <ImageHolder blb_url='https://tuguegarao.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/tuguegarao-logo.png'>Tuguegarao</ImageHolder>
              <ImageHolder blb_url='https://urdaneta.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/urdanetacitylogo.png'>Urdaneta</ImageHolder>
            </div>
          </div>
          {/*  */}
          <Heading4 className='text-center mt-40 mb-20'>Municipal Government</Heading4>
          <div className='max-lg:space-y-20 space-y-10 flex flex-row max-lg:flex-col justify-center space-x-20 max-lg:space-x-0'>
            <div className='flex flex-row max-lg:justify-center space-x-20 justify-between'>
              <ImageHolder blb_url='https://bayambang.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/bayambanglogo.png'>Bayambang</ImageHolder>
              <ImageHolder blb_url='https://cabagan.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/cabagan-LOGO.png'>Cabagan, Isabela</ImageHolder>
            </div>
            <div className='flex flex-row max-lg:justify-center space-x-20  justify-between'>
              <ImageHolder blb_url='https://cordova.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/cordova-logo.png'>Cordova</ImageHolder>
              <ImageHolder blb_url='https://cuenca.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/cuenca-batangas.png'>Cuenca, Batangas</ImageHolder>
            </div>
          </div>
          <div className='max-lg:space-y-20 space-y-10 flex flex-row max-lg:flex-col justify-center space-x-20 max-lg:space-x-0'>
            <div className='flex flex-row max-lg:justify-center space-x-20 justify-between'>
              <ImageHolder blb_url='https://dauin.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/dauin-logo.png'>Dauin</ImageHolder>
              <ImageHolder blb_url='https://guinobatan.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/guinobatan.png'>Guinobatan</ImageHolder>
            </div>
            <div className='flex flex-row max-lg:justify-center space-x-20  justify-between'>
              <ImageHolder blb_url='https://losbanos.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/losbanos.png'>Los Baños</ImageHolder>
              <ImageHolder blb_url='https://mercedes.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/mercedes-logo.png'>Mercedes, Camarines Norte</ImageHolder>
            </div>
          </div>
          <div className='max-lg:space-y-20 space-y-10 flex flex-row max-lg:flex-col justify-center space-x-10 max-lg:space-x-0'>
            <div className='flex flex-row max-lg:justify-center max-lg:space-x-20 space-x-10 justify-between'>
              <ImageHolder blb_url='https://rosales.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/rosales-pangasinan.png'>Rosales, Pangasinan</ImageHolder>
              <ImageHolder blb_url='https://sanildefonso.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/sanildefonso-logo.png'>San Ildefonso</ImageHolder>
            </div>
            <div className='flex max-lg:flex-col flex-row space-y-20 max-lg:space-x-0 space-x-10'>
              <div className='flex flex-row max-lg:justify-center justify-between max-lg:space-x-20 space-x-10'>
              <ImageHolder blb_url='https://sanjuanbatangas.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/San-Juan-Batangas-Logo.png'>San Juan</ImageHolder>
              <ImageHolder blb_url='https://tayugmunicipality.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/tayug-logo.png'>Tayug</ImageHolder>
              </div>
              <div className='flex justify-center'>
                <ImageHolder blb_url='https://tuao-cagayan.balinkbayan.gov.ph/' img_url='/img-assets/gov-services/local-gov-partners/tuao-logo.png'>Tuao</ImageHolder>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}