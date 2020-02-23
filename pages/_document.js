import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
// ---------------------------------------------
export default class CustomDocument extends Document {
  render () {
    return (
    <html lang='en-US'>
      <Head>
        <link rel="stylesheet" href="../sanitize.css" />
      </Head>
      <body className={'scaffolding'}>
        <Main />
        <NextScript />
      </body>
    </html>)
  }
}