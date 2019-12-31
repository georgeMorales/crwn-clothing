import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import './App.css';


// const HatsPage = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <h1>HATS PAGE</h1>
//         </div>
//     )
// }

// const TopicsList = () => {
//     return (
//         <div>
//             <h1>TOPICS LIST PAGE</h1>
//         </div>
//     )
// }

// const TopicDetail = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <h1>TOPICS DETAIL PAGE: {props.match.params.topicId}</h1>
//         </div>
//     )
// }

function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage} />
                {/* <Route path='/hats' component={HatsPage} /> */}
                <Route path='/shop' component={ShopPage} />
                
            </Switch>
        </div>
    );
}

export default App;
