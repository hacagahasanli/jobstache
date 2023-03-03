import { useState } from "react";
import { Col } from "react-bootstrap"
import styled from "styled-components"

// under_3_years_experience, more_than_3_years_experience, no_experience, no_degree.
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

// FULLTIME, CONTRACTOR, PARTTIME, INTERN

const empTypes = [
    {
        id: "full_time",
        type: "FULLTIME",
        value: "fulltime"
    },
    {
        id: "contractor",
        type: "CONTRACTOR",
        value: "contractor"
    },
    {
        id: "part_time",
        type: "PARTTIME",
        value: "parttime"
    },
    {
        id: "intern",
        type: "INTERN",
        value: "intern"
    }
]

export const Sidebard = () => {

    const [active, setActive] = useState({
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
            <div>
                {
                    expLevels?.map(({ id, type, value }) => (
                        <ExpTag active={active?.exp === type} key={id} onClick={() => activeExpHandler(type, "exp")}>{value}</ExpTag>
                    ))
                }
            </div>
            <div>
                {
                    empTypes?.map(({ id, type, value }) => (
                        <ExpTag active={active?.emp === type} key={id} onClick={() => activeExpHandler(type, "emp")}>{value}</ExpTag>
                    ))
                }
            </div>
        </ExtraDetailsContainer>
    </Column>
}

const ExtraDetailsContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
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
    background: ${({ active }) => active ? "#BBE1FA" : "#3282BB"};
    color: white;
    font-size: .72rem;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
    z-index: 10;
`


// grayBlack: "#1B262C",
//     darkBlue: "#0F4C75",
//         lightBlue: "#3282BB",
//             whiteBlue: "#BBE1FA

const Column = styled(Col)`
    padding: 1rem 1.1rem;
    background: #0F4C75;
    border-radius: 10px;
    max-height: 20rem;
`