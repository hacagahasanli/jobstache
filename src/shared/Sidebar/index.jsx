import { useEffect, useState } from "react";
import { Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { setRequirements } from "../../store/slices";

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

export const Sidebard = ({ getSearchedPosts }) => {
    const dispatch = useDispatch()
    const { searchValue } = useSelector(state => state.job)
    const [active, setActive] = useState({ exp: "", emp: "" });

    const seem = window.innerWidth > 968;

    useEffect(() => {
        const setDatas = async () => {
            const { emp, exp } = active;
            await dispatch(setRequirements(active))
            await getSearchedPosts({ query: searchValue, num_pages: 2, job_requirements: exp, employment_types: emp })
        }
        setDatas()
    }, [active])

    const activeExpHandler = (type, name) => {
        setActive((prev) => prev[name] === type ?
            { ...prev, [name]: "" } : { ...prev, [name]: type }
        )
    }

    return <Column xs={2}>
        <ExtraDetailsContainer>
            {seem && <>
                <h5>Requirements</h5>
                <ReqType>Expreinces</ReqType>
            </>
            }
            <div>
                {expLevels?.map(({ id, type, value }) => (
                    <ExpTag active={active?.exp === type} key={id} onClick={() => activeExpHandler(type, "exp")}>{value}</ExpTag>
                ))}
            </div>
            {seem && <ReqType>Employer type</ReqType>}
            <div>
                {empTypes?.map(({ id, type, value }) => (
                    <ExpTag active={active?.emp === type} key={id} onClick={() => activeExpHandler(type, "emp")}>{value}</ExpTag>
                ))}
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

        @media screen and (max-width: 968px) {
            display: flex !important;
            flex-direction: column;
        }
        @media screen and (max-width: 453px) {
            flex-wrap: wrap;
            width: 100%;
        }
    }

     @media screen and (max-width: 968px) {
        display: flex !important;
        flex-direction: row;
        padding: 0 0.2rem;
        width: 100%;
        min-height: 100%;
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
    @media screen and (max-width: 453px) {
        padding: .5rem;
    }

    @media screen and (max-width: 968px) {
        font-size: 0.68rem;
        max-height:2rem;
        align-items: center;
    }
    
   
`

const Column = styled(Col)`
    padding: 1rem 1.1rem;
    background: #0e4366;
    border-radius: 10px;
    max-height: 20rem;
    border: 1px solid #2b6690;
     @media screen and (max-width: 968px) {
        width: 95%;
        margin: 0 auto;
        margin-bottom: 1rem;
        &:hover{
            scale:1.02;
            cursor:pointer;
        }
    }
   
`