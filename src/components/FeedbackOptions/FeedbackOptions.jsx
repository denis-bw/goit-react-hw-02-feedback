import {BTNfeedback,ContainetButonsFeedback} from './FeedbackOptions.styled'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    
    const marcupButons = options.map(option => {
            return (<BTNfeedback key={option} onClick={onLeaveFeedback}>{option}</BTNfeedback>);
    });
    
    return <ContainetButonsFeedback>{marcupButons}</ContainetButonsFeedback>
}