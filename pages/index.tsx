import Head from 'next/head'
import Image from 'next/image'
import { Inter, Russo_One, Rubik_Wet_Paint } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useTranslation } from "next-i18next";
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import BlogCard from '@/components/BlogCard';

// const inter = Inter({ subsets: ['latin'] })
// const russo_one = Russo_One({ weight: '400', subsets: ['latin'] })
// const rubik = Rubik_Wet_Paint({ weight: '400', subsets: ['latin'] })
const inter = { className: "" }
const russo_one = { className: "" }
const rubik = { className: "" }

export default function Home() {
  const { t } = useTranslation("");

  const handleSelectEvent = () => {

  }

  return (
    <>
      <Head>
        <title>Welcome to Zomfi</title>
        <meta property="og:title" content="Welcome to Zomfi" />
      </Head>
      <main className={styles.main}>
        <div className={`${styles.banner} flex flex-row overflow-hidden`}>
          <div className={`${styles.bannerContent} flex flex-col max-w-[1280px] w-full mx-4 md:mx-10 my-20 lg_2:m-auto items-center lg_2:my-44`}>
            <h6 className={`${rubik.className} text-3xl md:text-4xl lg_2:text-5xl text-white mt-0 md:mt-10 lg_2:mt-0 mb-10`}>{t("BRC20 The Szab Project")}</h6>
            <div className='flex flex-row text-white'>
              SZAB, the reserve currency native to the crypto industry, is named after Nick Szabo, the renowned computer scientist and cryptographer who is widely considered to be the father of smart contracts. Nick Szabo is a prominent figure in the development of blockchain technology and is known for his contributions to the concept of digital currency and decentralized systems. By naming the protocol after Nick Szabo, the developers behind SZAB are paying homage to a pioneer in the field of cryptography and highlighting the importance of his work in the development of blockchain technology.
            </div>
            <div className='flex'>
            <Button color={"#e48e0e"} height={"Normal"} radius={"Small"} textColor={"White"} fontSize={'20px'} class={"mt-14 mr-2"} onClick={() => {}}>Documentation</Button>
            <Button color={"#e48e0e"} height={"Normal"} radius={"Small"} textColor={"White"} fontSize={"20px"} class={"mt-14 ml-2"} onClick={() => {}}>Gitbook</Button>
            </div>
          </div>
        </div>
        <div className={`${styles.mainBackground}`}>
          <div className={`${styles.blogSection} flex flex-row`}>
            <div className={`${styles.bannerContent} flex flex-col max-w-[1280px] w-full mx-0 sm:mx-4 md:mx-10 my-10 lg_2:m-auto items-left lg_2:my-20`}>
              <div className={`flex flex-col sm:flex-row items-center justify-between mt-2`}>
                <BlogCard 
                  title={'BRC20 Owned Liquidity Pools'} 
                  content={`The SZAB Project pioneered the concept of BRC20 Owned Liquidity, and the SZAB protocol has always owned a substantial amount of the $SZAB liquidity. This ensures users and protocols are always able to swap $SZAB, regardless of market conditions and external events.
                  The SZAB treasury keeps $SZAB liquidity on unisat at high-rates prices. With RBT, the balance between reserves and liquidity is algorithmic, with the goal to optimize the liquidity depth and reserves for robustness and long term market stability.
                  Liquidity pools are essential components of decentralized finance (DeFi) platforms. But it is new on BRC20.                  
                  These pools enable users to deposit and trade different BRC20 tokens without the need for an intermediary. Liquidity pools are created by depositing equal values of two different tokens into a smart contract. These tokens are then used to facilitate trades, and the liquidity provider (LP) earns a fee for each transaction. The more liquidity a pool has, the easier it is for traders to execute large orders without impacting the market price.`}
                />
                <BlogCard 
                  title={'Range bound tangibility (RBT) mechanism'} 
                  content={`The proposed system leverages SZAB’s unique liquidity structure to de-risk the $SZAB market through the issuance of guidance. Participants are instructed on a correct behavioral path wherein those aligned with the desired behavior are rewarded and those deviating are dissuaded. By providing credible expectations of future pricing, the treasury can diminish downside risk for network participants at desired times, increasing $SZAB’s attractiveness as an asset and encouraging investment into SZAB’s economy. This is the job of a monetary authority: to mitigate volatility (to both the downside and upside) to encourage healthy growth, and to provide clarity for financial planning.
                  The credibility of this guidance is derived from the capitalization of the treasury and its monopoly on market liquidity. As long as the treasury holds significant assets relative to the market capitalization of the liquid supply of $SZAB, the market should take its guidance seriously. The protocol’s ownership of the entire market (through its liquidity holdings) further extends this dynamic.`}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'common',
    ])),
  },
})