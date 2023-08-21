import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Notfound from '@/components/notfound/Notfound'


function BlogPost({ params }) {
  const id=params.id
  
  return (id==='id'?
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <div className={styles.imgContent}>
          <div className={styles.content}>
            <h1 className={styles.title}>test</h1>
            <p className={styles.desc}>Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sequi neque magni reiciendis nisi ut quidem, itaque at illo eos libero aliquid saepe deserunt dolorem. Ipsam, corporis. Voluptate, eos doloremque. dolor, sit amet consectetur adipisicing elit. Libero eaque culpa, perspiciatis vel voluptatibus aliquid obcaecati alias accusantium illum nisi fuga iusto molestias quod maxime distinctio, dignissimos itaque. Voluptas, ipsa.</p>
          </div>

          <div className={styles.imgText}>
            <div className={styles.imgT}>
              <Image src={'/aaps.jpeg'} width={50} height={50} className={styles.imgt} />
            </div>
            <div className={styles.name}>
              <span>apps</span>
            </div>


          </div>
        </div>
        <div className={styles.imgCont}>
          <Image fill={true} alt='apps' className={styles.img} src={'/aaps.jpeg'} />
        </div>

      </div>
      <div className={styles.txtContent}>
        <p className={styles.desc} >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quibusdam soluta rerum, labore voluptates a. Dolorem, qui? Quia dolorum veniam rerum? Distinctio, eaque aliquid. Accusantium dolorem deserunt molestiae quo placeat.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, doloribus eveniet? Error, debitis obcaecati quos labore ut mollitia provident laboriosam, ipsa molestiae reprehenderit laborum enim illo vitae atque illum quam.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Et totam consequatur asperiores cumque aut cupiditate voluptatum ducimus iure ratione laudantium ut aliquam saepe, ex blanditiis. Nobis a veritatis quibusdam quia.



Lorem ipsum, <p className={styles.desc}> dolor sit amet consectetur adipisicing elit. Sapiente error totam quod repudiandae excepturi quo enim itaque corporis quis, vero, repellendus repellat ea asperiores deleniti maiores nihil aliquid nobis nemo?



Lorem ipsum dolor sit amet consectetur </p>adipisbr
<br />icing elit. Accusamus non officia eveniet aliquid dolore voluptatum id, mollitia libero iure quo sunt, blanditiis iusto unde nemo iste sint rerum tempore odit?




          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid quam natus impedit odit. Harum amet sint similique delectus excepturi? Corporis quisquam doloremque possimus incidunt quia, similique totam dolor accusamus veritatis.

          Lorem ipsum dolor sit amet consec<p className={styles.desc}>tetur adipisicing elit. At, labore deleniti eius, repellendus imped
          it nostrum dicta quia quod <br /><br />hic quidem eligendi fuga eos atqu</p>e 
          tempore nisi explicabo inventore eum saepe?</p>
      </div>
    </div>:<Notfound/>
  )
}

export default BlogPost