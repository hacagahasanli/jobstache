import styled from "styled-components"
import { Button, Form, InputGroup } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from "react"
import { setSearchedValue } from "../../store/slices"
import getJobsApi from "../../client"

const { Control } = Form

export const Input = ({ getSearchedPosts }) => {
    const ref = useRef()
    const dispatch = useDispatch()
    const { requirements } = useSelector(state => state.job);

    const searchJobHandler = () => {
        const inputValue = ref.current.value;
        dispatch(setSearchedValue(inputValue))
        if (Object.entries(requirements).length) {
            const { emp, exp } = requirements
            getSearchedPosts(inputValue, 1, exp, emp)
        }
    }

    return <InputGroup className="mb-1 justify-content-center">
        <StyledControl
            ref={ref}
            placeholder="Job alerts straight to your inbox"
            aria-label="Job alerts straight to your inbox"
            aria-describedby="basic-addon2"
        />
        <GotItButton onClick={searchJobHandler}>Hear about it first</GotItButton>
    </InputGroup>
}



const StyledControl = styled(Control)`
    background:${({ theme }) => theme.colors.grayBlack} !important;
    color: white !important;
    border: 1px solid ${({ theme }) => theme.colors.lightBlue};
    max-width: 32%;
    ::placeholder{
        color: #8c8a8a;
        font-weight: 600;
        font-size: smaller;
    }

`
const GotItButton = styled(Button)`
    background-color: ${({ theme }) => theme.colors.lightBlue};
    border: none;
    outline: none;
    font-size: .9rem;
    font-weight: 700;
    padding: .6rem 1.4rem;

`