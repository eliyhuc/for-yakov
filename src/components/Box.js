

const Box = (props) => {
  return (
    <>
        <p>
            This is some box component {props.number} 
            {
                props.name && <>my name is {props.name}</>
                // props.name ? <>my name is {props.name}</> : <>I have no name</>
            }
        </p>
    </>
  )
}

export default Box