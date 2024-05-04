import React from 'react'
import {Helmet} from 'react-helmet'

export default function Metatags() {
    return (
        <div>
            <Helmet htmlAttributes={{
    lang: 'id',
  }}>
          <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
          <title>RAGfier</title>
          <link rel="canonical" href="https://drive.google.com/file/d/1oLVfl0HsyC1S0z-vnOdmcBN7cUSRdGER/view?usp=sharing/" />
           </Helmet>
        </div>
    )
}
