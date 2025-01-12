import React from 'react';
import './Sorting_Visualiser.css';

export default class Sorting_Visualiser extends React.Component{ //Sorting_Visualiser is now a component
    constructor(props){// constructor hai
        super(props);// inherits properties from React.Component(parent)

        this.state={ //defines state of component
            array: [], //array is a key here [] initialises empty array
        };
    }
    componentDidMount() //componentDidMount: Called once the component is mounted in the DOM.
    {
        this.resetArray();//working before it is defined; in js as long as in same class it works
    }

    resetArray(){
        const array=[];
        for(let i=0;i<175;i++)
        {
            array.push(randomIntFromInterval(5,450));
        }
        this.setState({array});// changes the state of component to this
    }
    render() {
        // Access the current state of the component and store it in the 'array' variable
        const array = this.state.array; 
    
        return (
            // Use React Fragment to return multiple elements without adding an extra DOM element
            <div className='array-container'>
                 
                {
                    // Use the map function to iterate over each element in the 'array'
                    array.map((value, idx) => (
                        // For each element, return a <div> element with the class "array-bar"
                        // The 'key' prop is assigned the index of the element to help React identify changes
                        <div className="array-bar" 
                        key={idx}
                        style={{height:`${value}px`}}>
                        </div>
                        /* Display the value of the current element from the 'array'*/
                    ))
                }
            </div>
        );
    }
    

} 
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}