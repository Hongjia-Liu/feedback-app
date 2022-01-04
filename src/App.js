import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from './components/FeedbackForm';

const App = () => {

    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (feedbackItem) => {
        setFeedback(feedback.filter((item) => item.id !== feedbackItem.id))
    }

    
    return ( 
        <>
            <Header />
            <div className="container">
                <FeedbackForm />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </div>
        </>
     );
}
 
export default App;