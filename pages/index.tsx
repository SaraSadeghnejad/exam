import { useRouter } from 'next/router'
import { useEffect } from 'react';
import Login from './auth/Login';
import cookie from 'js-cookie';
import axios from 'axios';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
const Home = ()=>{

  return(
    <>
   <Login />
   </>
  )
}
export default Home;
export async function getServerSideProps({ res, req,ctx,locale }) {
  // try {
  //   const isAuthed = await fetch(`http://localhost:8002/login`, {
  //     credentials: "include",
  //     headers: {
  //       accept: 'application/json',
  //       cookie: req.headers.cookie,
  //     }
      
  //   });
  //   if (isAuthed.status === 200) {
  //     res.setHeader('Location', "/");
  //     res.statusCode = 302;

  //     return { props: { } };
  //   }
  // } catch (error) {
  //   console.error(error);
  // } 
  // const csrf = await fetch(`http://localhost:8002/sanctum/csrf-cookie`)
  // res.setHeader('set-cookie', csrf.headers.raw()['set-cookie']);
return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),

    },
  }
}

