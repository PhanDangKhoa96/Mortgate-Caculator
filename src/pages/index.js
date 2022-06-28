import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Navigation from '../components/navigation'
import Banner from '../components/banner'
import Service from '../components/service'
import Caculator from '../components/caculator'
import Footer from '../components/footer'


const RootIndex = ({ data }) => {
  const navigation = data.contentfulNavigation
  const banner = data.contentfulBanner
  const service = data.contentfulService
  const caculator = data.contentfulCaculator
  const footer = data.contentfulFooter


  return (
    <Layout className="overflow-hidden" >
      <header className="h-screen bg-primary bg-contain bg-no-repeat bg-right-bottom bg-[url('https://images.ctfassets.net/v9g6pp5szq10/4XnqHdQ2KE4HwDBcAgxBuP/670b21a877bd290cef9fb31d1570c699/hero-banner.png')] text-white section" >
        <Navigation navigation={navigation} />
        <Banner banner={banner} />
      </header>
      <main className='container text-black'>
        <Service service={service} />
        <Caculator caculator={caculator} />
      </main>
      <Footer footer={footer} />
    </Layout >
  )
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    contentfulNavigation {
    logo {
      description
      url
    }
    link {
      id
      links {
        href
        name
      }
    }
  }
      contentfulBanner {
        title
        description {
          raw
        }
        buttonText
        backgroundImage {
          url
        }
    }

    contentfulService {
    title
    serviceData {
      data {
        description
        name
      }
    }
    pattern {
      url
    }
  }

  contentfulCaculator {
    title
    description {
      raw
    }
    caculatorFigure {
      name
      position
      unit
      value
      currentValue
      tag_name
    }
    advertisement {
      title
      description {
        raw
      }
      buttonText
    }
    loanAmountText
    estimateRepaymentText
  }  

  contentfulFooter {
    logo {
      url
    }
    description
    socialLinks {
      icon
      url
    }
    column {
      title
      lines {
        name
        url
      }
    }
    copyright
  }
  }
`
