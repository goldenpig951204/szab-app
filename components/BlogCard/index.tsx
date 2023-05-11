import Image from 'next/image'
import Button from '../Button';
import { Icon } from '@iconify/react';
import { Russo_One } from '@next/font/google'
import { useTranslation } from "next-i18next";
import styles from '@/styles/Home.module.css'

// const russo_one = Russo_One({ weight: '400', subsets: ['latin'] })
const russo_one = { className: "" }

interface Props {
  title: string,
  content: string
}

export default function BlogCard(props: Props) {
  const { t } = useTranslation("");

  return (
    <div className={`${styles.blogCard} relative overflow-hidden mb-6`}>
      <div className={`${styles.blogTitle} w-full h-full flex flex-col items-start justify-end p-5`}>
        <h6 className={`${russo_one.className} text-left text-white text-sm lg_2:text-lg tablet:text-2xl mb-3`}>{props.title}</h6>
        <p className='text-left text-white'>{props.content}</p>
      </div>
    </div>
  )
}
