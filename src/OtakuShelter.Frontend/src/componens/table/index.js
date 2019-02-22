import React from 'react'

class Table extends React.Component {
	render() {
		const {headers, items, shema} = this.props

		return (
			<div className="column is-fullwidth">
				<table width="100%" className="table">
					<thead>
					<tr>
						{headers.map((header) => <th key={header}>{header}</th>)}
					</tr>
					</thead>
					<tbody>
					{items.map((item) => (
						<tr key={item.id}>
							{shema.map((shem) => (
								<td className={shem.className}>
									{shem.template(item)}
								</td>
							))}
						</tr>
					))}
					</tbody>
				</table>
			</div>
		)
	}
}

export default Table