import { useForm } from 'react-hook-form'
import {DevTool} from '@hookform/devtools'

const YoutubeForm = () => {

  const form = useForm<FormValues>()
  const {register, control, handleSubmit, getValues} = form
  const {name, ref, onChange, onBlur} = register("username")


  type FormValues = {
    username: string,
    email: string,
    password: string
  }

  const onSubmit = (data: FormValues) => {
    console.log('submitted', data)
  }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row mb-3'>
                <div className='col-12'>
                  <label htmlFor='username'>Username</label><br/>
                  <input  type='text' placeholder='username' id='username' name={name} ref={ref} onChange={onChange} onBlur={onBlur}/>
                </div>
            </div>

            <div className='row mb-3'>
                <div className='col-12'>
                  <label htmlFor='email'>Email</label><br/>
                  <input  type='email' placeholder='email' id='email' {...register('email')}/>
                </div>
            </div>

            <div className='row mb-3'>
                <div className='col-12'>
                  <label htmlFor='password'>Password</label><br/>
                  <input  type='password'  id='password' {...register('password')}/><br/>
                </div>
            </div>

            <div className='row mb-3'>
                <div className='col-12'>
                  <button name='submit' className='mb-3' style={{background:'#008179'}}>Submit</button><br />
                  <button name='clear' >Clear</button>
                </div>
            </div>
        </form>
        <DevTool control={control} />
    </div>
  )
}

export default YoutubeForm