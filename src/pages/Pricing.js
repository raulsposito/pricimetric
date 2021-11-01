import React from 'react'
import { withTranslation } from 'react-i18next'
import PricingActionBtn from '../components/Pricing/PricingActionBtn'

function PricingPage(props) {
	const { t } = props
	return (
		<div className="p-grid">
			<div className="p-col-12 p-lg-3">
				<h1 className="text-primary">{t('PricingPage.Title')}</h1>
			</div>
			<PricingActionBtn/>
		</div>
	)
}

export default withTranslation()(PricingPage)
