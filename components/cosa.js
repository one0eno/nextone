
  
  
export default function Cosa(props){

    function handleChange(e) {
      
        console.log(e.target.value);
    }  
  

    const {esto} = props
    const {arrcosas} = props

    console.log(arrcosas)
    return (

        

        <>
            <select  onChange={handleChange} >
            {
                arrcosas.map(arrcosa => <option id={arrcosa.id} key={arrcosa.id}>{arrcosa.value}</option>)
            }
            </select>
            <div>
                <input type="text" value={esto}></input>
                <input type="text" value={esto}></input>
                <input type="text" value={esto}></input>
                <input type="text" value={esto}></input>
                Esta es lacosa {esto}
            </div>
           
        </>

    )

}