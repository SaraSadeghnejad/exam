import { ReactElement, ReactNode, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import '../src/assets/scss/index.scss';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';
import ThemeProviderWrapper from 'src/theme/ThemeProviderWrapper';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from 'src/createEmotionCache';
import { SidebarProvider } from 'src/contexts/SidebarContext';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { ThemeProvider } from 'next-themes';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { appWithTranslation, useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
const clientSideEmotionCache = createEmotionCache();

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface TokyoAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

function MyApp(props: TokyoAppProps) {
  const router = useRouter();
  const { t } = useTranslation("");
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  Router.events.on('routeChangeStart', nProgress.start);
  Router.events.on('routeChangeError', nProgress.done);
  Router.events.on('routeChangeComplete', nProgress.done);

  useEffect(() => {
    let dir = router.locale == "fa" ? "rtl" : "ltr";
    let lang = router.locale == "fa" ? "fa" : "en";
    document.querySelector("html").setAttribute("dir", dir);
    document.querySelector("html").setAttribute("lang", lang);
  }, [router.locale]);
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin]
});

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <CacheProvider value={router.locale == 'fa' ? cacheRtl : emotionCache}>
        <Head>
          <title>Bizi</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="csrf-token" content="{{ csrf_token() }}" />
        </Head>
        <SidebarProvider>
          <ThemeProviderWrapper>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <CssBaseline />
              {getLayout(<Component {...pageProps} />)}
            </LocalizationProvider>
          </ThemeProviderWrapper>
        </SidebarProvider>
      </CacheProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}