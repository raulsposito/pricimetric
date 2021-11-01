import React from 'react'
import { withTranslation } from 'react-i18next'

function PerformancePage(props) {
	const { t } = props
	return (
		<div className="p-grid">
			<div className="p-col-12 p-lg-3">
				<h1 className="text-primary">{t('Administration.Header')}</h1>
			</div>
		</div>
	)
}

export default withTranslation()(PerformancePage)
