import { useState } from "react";
import { Col } from "react-bootstrap"
import styled from "styled-components"

const expLevels = [
    {
        id: "less3",
        type: "under_3_years_experience",
        value: "< than 3 years"
    },
    {
        id: "more3",
        type: "more_than_3_years_experience",
        value: "> than 3 years"
    },
    {
        id: "noDegree",
        type: "no_degree",
        value: "no degree"
    },
    {
        id: "noExprience",
        type: "no_experience",
        value: "no experience"
    },
]

const empTypes = [
    {
        id: "full_time",
        type: "FULLTIME",
        value: "full-time"
    },
    {
        id: "part_time",
        type: "PARTTIME",
        value: "part-time"
    }, 
    {
        id: "intern",
        type: "INTERN",
        value: "intern"
    },
    {
        id: "contractor",
        type: "CONTRACTOR",
        value: "contract"
    },

]

export const Sidebard = () => {
    const [{ exp, emp }, setActive] = useState({
        exp: "",
        emp: ""
    });

    const activeExpHandler = (type, name) => {
        setActive((prev) => prev[name] === type ?
            { ...prev, [name]: "" } : { ...prev, [name]: type }
        )
    }

    return <Column xs={2} >
        <ExtraDetailsContainer>
            <h5>Requirements</h5>
            <ReqType>Expreinces</ReqType>
            <div>
                {
                    expLevels?.map(({ id, type, value }) => (
                        <ExpTag active={exp === type} key={id} onClick={() => activeExpHandler(type, "exp")}>{value}</ExpTag>
                    ))
                }
            </div>
            <ReqType>Employer type</ReqType>
            <div>
                {
                    empTypes?.map(({ id, type, value }) => (
                        <ExpTag active={emp === type} key={id} onClick={() => activeExpHandler(type, "emp")}>{value}</ExpTag>
                    ))
                }
            </div>
        </ExtraDetailsContainer>
    </Column>
}

const ReqType = styled.h5`
    margin: 0;
    padding: 0; 
    text-align: left;
    font-size: 0.9rem;
`

const ExtraDetailsContainer = styled.div`
    display: flex;
    width: 100%;
    min-height: 100%;
    flex-direction: column;
    position: relative;
    gap:.8rem;

    h5{
        color: white;
    }
    /* flex-wrap: wrap; */
    /* grid-template-rows: 1rem 1rem; */
    div{    
        width: 100%;
        display: flex;
        gap:0.3rem;
        flex-wrap: wrap;
    }
`

const ExpTag = styled.span`
    padding: 0.4rem 0.4rem;
    background: ${({ active }) => active ? "#46abee" : "#215e8a"};
    color: white;
    font-size: .7rem;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
`

const Column = styled(Col)`
    padding: 1rem 1.1rem;
    background: #0e4366;
    border-radius: 10px;
    max-height: 20rem;
    border: 1px solid #2b6690;
`