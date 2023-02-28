import * as ReactDOM from 'react-dom';

const List = () => {

    const numbers = [1 , 2 ,3,4,5];
    console.log(numbers);
    
    // const doubled = numbers.map((num , index) => 
    //   <li key={index}>{num*2}</li>   
    // )

    return(
        <div>    
        {
            numbers.map((num) => 
            <li>{num*2}</li>   
          )}
        </div>
    )
}

export default List