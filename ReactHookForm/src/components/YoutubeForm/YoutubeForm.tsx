import { YoutubeFormProps, FormDataProps } from "./YoutubeForm.types";
import styles from './YoutubeForm.module.scss';
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { FormEventHandler, useState } from "react";

let renderCount = 0;

const YoutubeForm = ({ }: YoutubeFormProps) => {

  const form = useForm<FormDataProps>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  // const { name, ref, onChange, onBlur } = register('username');

  const handleFormSubmit = (data: FormDataProps) => {
    console.log('Form Submitted ', data);
  }

  renderCount++;

  return (
    <div>
      <h1 className={styles.Text}>{renderCount / 2}</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.YoutubeForm}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: 'Username is required',
          })}
        />
        {errors.username && <p style={{ 'color': 'red' }}>Invalid username</p>}

        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          id="email"
          {...register("email", {
            pattern: {
              value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
              message: 'Invalid email format'
            }
          })}
        />
        {errors.email && <p>Wrong username</p>}

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          {...register("channel")}
        />

        <label htmlFor="primaryNumber">Primary Number</label>
        <input
          type="text"
          id="primaryNumber"
          {...register("phoneNumbers.primary")}
        />

        <label htmlFor="secondaryNumber">Secindary Number</label>
        <input
          type="text"
          id="secondaryNumber"
          {...register("phoneNumbers.secondary")}
        />

        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );

  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [channel, setChannel] = useState("");

  // const handleOldFormSubmit = (e: any) => {
  //   e.preventDefault();
  //   console.log('Form data ', username, email, channel);
  // }

  // return ( 
  //   <div> 
  //     <h1 className={styles.Text}>{renderCount/2}</h1>
  //     <form onSubmit={handleOldFormSubmit} className={styles.YoutubeForm}>
  //       <label htmlFor="username">Username</label>
  //       <input 
  //       type="text" 
  //       id="username" 
  //       name="username"
  //       value={username}
  //       onChange={(e) => setUsername(e.target.value)}
  //       />

  //       <label htmlFor="email">E-mail</label>
  //       <input 
  //       type="text" 
  //       id="email" 
  //       name="email"
  //       value={email}
  //       onChange={(e) => setEmail(e.target.value)}
  //       />

  //       <label htmlFor="channel">Channel</label>
  //       <input 
  //       type="text" 
  //       id="channel" 
  //       name="channel"
  //       value={channel}
  //       onChange={(e) => setChannel(e.target.value)}
  //       />

  //       <button type="submit"
  //       >Submit
  //       </button>
  //     </form>
  //     <DevTool control={control}/>
  //   </div> 
  // ); 
};

export default YoutubeForm;  
