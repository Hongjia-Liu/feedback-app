import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';

const App = () => {

    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (feedbackItem) => {
        setFeedback(feedback.filter((item) => item.id !== feedbackItem.id))
    }

    
    return ( 
        <>
            <Header />
            <div className="container">
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </div>
        </>
     );
}
 
export default App;