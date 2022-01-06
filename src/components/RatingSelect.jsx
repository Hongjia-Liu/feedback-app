
const RatingSelect = ({rating, setRating }) => {

    const handleChange = (e) => {
        setRating(+e.target.value)
    }

    return (
        <ul className="rating">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num, index) =>  
                <li key={index}>
                    <input type="radio" name="rating" id={`num${num}`} value={`${num}`} onChange={handleChange} checked={rating === num} />
                    <label htmlFor={`num${num}`}>{num}</label>  
                </li>)
            }
        </ul>
    )
}

export default RatingSelect
