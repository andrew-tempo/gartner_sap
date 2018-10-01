import React from 'react'
import Stars from './Stars';
import ReviewSrcButton from './ReviewSrcButton';

export default (props) => {
    let {productNames, rate, formattedReviewDate, jobRole, companySize, reviewHeadline, industryName, reviewSummary} = props;

    return (
        <div className='result-card row'>

            <div className='col-md-4'>
                <p className='product-name'>{productNames.length > 47 ? productNames.substring(0,47) : productNames} ...</p>
                <Stars rate={rate} />
                <p className='small-font'>{formattedReviewDate}</p>
                <p className='small-font'><strong>Reviewer Role</strong><br/>{jobRole}</p>
                <p className='small-font'><strong>Company Size</strong><br/>{companySize}</p>
                <ReviewSrcButton />
            </div>


            <div className='col-md-8'>
                <p className="product-name">{reviewHeadline}</p>
                <p className='medium-font grey-font'> - <em>{`${jobRole}`}</em> in the <em>{`${industryName}`}</em> </p>
                <article className='medium-font article-box'>{reviewSummary.substring(0,260)} ...</article>
                <p className='medium-font navy-font'>READ FULL REVIEW</p>
            </div>
        </div>
    )
}
