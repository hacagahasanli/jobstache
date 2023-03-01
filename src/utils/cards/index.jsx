export const setSalaryDetail = (job_max_salary, job_min_salary, job_salary_currency, job_salary_period) => {
    const details = {
        "HOUR": `${job_min_salary}${'$'}-${job_max_salary}${'$'} per hour`,
        "YEAR": `${job_min_salary}${'k'}-${job_max_salary}${'k'} ${job_salary_currency}`,
    }
    return details[job_salary_period]
}

export const jobDescShorter = (job_description, descLength) => {
    return `${job_description.substring(0, descLength)} ...`
}
