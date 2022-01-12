import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid'
import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';

const App = () => {

    const [feedback, setFeedback] = useState(FeedbackData);

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }

    const deleteFeedback = (feedbackItem) => {
        setFeedback(feedback.filter((item) => item.id !== feedbackItem.id))
    }

    
    return ( 
        <FeedbackProvider>
            <Router> 
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm handleAdd={addFeedback} />
                                <FeedbackStats feedback={feedback} />
                                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                            </>
                        } />

                        <Route path='/about' element={<AboutPage />} />
                    </Routes>
                </div>

                <AboutIconLink />
            </Router>
        </FeedbackProvider>              
     );
}
 
export default App;