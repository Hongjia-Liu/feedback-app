import {v4 as uuidv4} from 'uuid'
import { createContext, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            rating: 10,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
          },
          {
            id: 2,
            rating: 9,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
          },
          {
            id: 3,
            rating: 8,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
          },
    ])

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }

    const deleteFeedback = (feedbackItem) => {
        setFeedback(feedback.filter((item) => item.id !== feedbackItem.id))
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback, 
        addFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;