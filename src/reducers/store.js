import {createStore} from 'redux';
import reducer from './reducer';
export const initialState = {
    filters:[],
    results: [
        {
            productNames: "SAP Managed Services Application Implementation Services, SAP Managed Services Application Management Services",
            rate: 4.4,
            formattedReviewDate: "Sep 16, 2017",
            jobRole: "Program and Portfolio Management",
            companySize: "1B - 3B USD",
            reviewHeadline: "Excellent Service through SAP Premium Support Services (Active Embeded Support)",
            industryName: "Energy and Utilities",
            reviewSummary: "We get very good and timely support with selected Experienced Consultants, as the Account manager maitains a very good contact and understanding with us. The team updates on the roadmap, identifies project and dependencies etc. Guides on the Resource requirements and the cautions to be taken. gives exposure with other customers journey and experience and bring others to our place as well.Guide us for national and international recognitions and awards.↵the OFIs are For New Solutions we find lack of knowledgeable consultants availability loaclly i.e. within the country. hence in those cases remote support becomes not so effective. Lack of guidance on Custom Dvelopments.",
            category:['1B - 3B USD','SAP Managed Services Application Implementation Services','SAP Managed Services Application Management Services',4]
        },
        {
            productNames:"SAP Managed Services Application Implementation Services",
            rate: 4.2,
            formattedReviewDate: "Aug 23, 2017",
            jobRole: "Program and Portfolio Management",
            companySize: "1B - 3B USD",
            reviewHeadline: "With the implementation we found more synergy potential for our business processes",
            industryName: "Energy and Utilities",
            reviewSummary:"Solution-focused-easy communication-long time partner-appropriate solution for the rest of the environment ",
            category:['1B - 3B USD','SAP Managed Services Application Implementation Services',4]
        },
        {
            productNames: "SAP Managed Services Application Management Services",
            rate: 3.7,
            formattedReviewDate: "Sep 13, 2017",
            jobRole: "Applications",
            companySize: "< 50M USD",
            reviewHeadline: "We have achieved stability , but time to integrate the dynamic business processes into SAP",
            industryName: "Manufacturing",
            reviewSummary: "The overall experience cannot really be identified with a single number. when we engaged with this vendor, we were expecting it to be SAP the company, only to find out that it was internally outsourced to another vendor, and we had no say in selectign the vendor or the team members. ↵↵to say, that we are unhappy or not depends on what function we are talking about. the MM and SD-MM functions are providing us with a very good service and very capable personnel, however, the FI-CO function is very substandard with little or no services of merit provided. ↵↵the team is trying hard, to keep it all going and make improvements, which has happened in some areas of abap, PI and basis, but the FI-CO has not yet gotten off the ground.",
            category:['< 50M USD','SAP Managed Services Application Management Services',3]
        }
    ]
}
const store = createStore(reducer,initialState);

export default store;