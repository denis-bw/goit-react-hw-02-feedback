export const Statistics = ({good,neutral,bad,total = 0,positivePercentage}) => {
    return (
    
        <>
            <p>good: {good}</p>
            <p>neutral: {neutral}</p>
            <p>bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
        </>

    )
}