import React from 'react'
import { useQuery, gql } from '@apollo/client'

const GET_JOBS = gql`
	query {
		jobs {
			id
			title
			slug
			userEmail
		}
	}
`

export default function App() {
	const [getJobs, { loading, error, data }] = useQuery(GET_JOBS)

	console.log('loading ', loading, 'error ', error, 'data ', data)

	if (loading) {
		return <div>loading...</div>
	}
	return (data.jobs.map((job) => {
		return (
			<div key={job.id}>
				<h1>{job.title}</h1>
			</div>
		)
	}))
}
