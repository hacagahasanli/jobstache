import { useTrail } from "react-spring"

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


export const animateCards = (jobs) => {
    const trail = useTrail(jobs?.length, {
        from: { opacity: 0, transform: "translate3d(0, 30px, 0)" },
        to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
        config: { mass: 1, tension: 500, friction: 35 },
        delay: 300,
    });
    return trail
}
