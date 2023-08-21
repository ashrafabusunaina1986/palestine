'use client'
import React from 'react'
import Buttonc from '@/components/buttonc/Buttonc'
import styles from './form.module.css'
function Form({ ok, btn = '', s = false, clickok = '',data='' ,setData=''}) {
    return (
        <form
            className={
                s ? styles.container +
                    ' ' +
                    styles.notdisplay :
                    styles.display
            }
        >
            <div>
                <input type="text" name='name' placeholder='name'
                value={data.name}  onChange={e=>setData({...data,name:e.target.value})}/>
            </div>
            <div>
                <input type="email" name='email' placeholder='email'
                onChange={e=>setData({...data,email:e.target.value})}
                value={data.email} />
            </div>
            <div>
                <textarea name="message" id="" cols="30" rows="10" placeholder='message'
                onChange={e=>setData({...data,message:e.target.value})}
                value={data.message}
                ></textarea>
            </div>
            <div>
                <Buttonc txt={ok} click={clickok} />
                {btn}
            </div>
        </form>
    )
}

export default Form