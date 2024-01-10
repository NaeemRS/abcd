import AboutBanner from '@/components/common/AboutBanner'
import ServicesBanner from '@/components/common/ServicesBanner'
import { aboutUsBanner } from '@/helper/about'
import { ourServices, sections1, sections2, sections3, sections4, sections5 } from '@/helper/services'
import React from 'react'

export default function index() {
    return (
        <>
          <AboutBanner
        banner={ourServices.banner}
        title={ourServices.title}
        Link1={ourServices.Link1}
        Link2={ourServices.Link2}
      />
            <ServicesBanner
                reverse
                imageUrl={sections1.banner}
                title={sections2.subtitle}
                text={sections2.description}
                lable={sections2.title} />

            <ServicesBanner
                imageUrl={sections2.banner}
                title={sections2.subtitle}
                text={sections2.description}
                lable={sections2.title} />

            <ServicesBanner
                reverse
                imageUrl={sections3.banner}
                title={sections3.subtitle}
                text={sections3.description}
                lable={sections3.title} />

            <ServicesBanner
                imageUrl={sections4.banner}
                title={sections4.subtitle}
                text={sections4.description}
                lable={sections4.title} />

            <ServicesBanner
                reverse
                imageUrl={sections5.banner}
                title={sections5.subtitle}
                text={sections5.description}
                lable={sections5.title} />
        </>
    )
}
