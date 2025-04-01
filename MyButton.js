<<<<<<< HEAD
function MyButton(props){
    const[isClicked,setIsClicked] =React.useState(false);

    return React.createElement(
        'button',
        {onClick:()=>setIsClicked(true)},
        isClicked ? 'Clicked!' :'Clicked here!'
    )
}
const domContainer=document.querySelector('#root');
=======
function MyButton(props){
    const[isClicked,setIsClicked] =React.useState(false);

    return React.createElement(
        'button',
        {onClick:()=>setIsClicked(true)},
        isClicked ? 'Clicked!' :'Clicked here!'
    )
}
const domContainer=document.querySelector('#root');
>>>>>>> 8bff041016af88b36628f2a4064caf0e7230ceb7
ReactDOM.render(React.createElement(MyButton),domContainer);