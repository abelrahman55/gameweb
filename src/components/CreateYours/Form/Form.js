import './form.css';
import React from 'react'

const Form = () => {
  return (
    <div className='form'>
<div className="form-content">
<div className="fieldsets-top">
        <div className="fieldset">
          <h4>Item Title</h4>
          <input type="text" placeholder='Ex.Lyon King' />
        </div>
        <div className="fieldset">
          <h4>Describe For Item</h4>
          <input type="text" placeholder='Give us Your idea' />
        </div>
        <div className="fieldset">
          <h4>Your Username</h4>
          <input type="text" placeholder='Ex.@abdoali' />
        </div>
      </div>
      <div className="fieldsets-center">
        <div className="fieldset">
            <h4>Price of item</h4>
            <input type="text" placeholder='Give us Your idea' />
          </div>
          <div className="fieldset">
            <h4>Royyalties</h4>
            <input type="text" placeholder='Ex.@abdoali' />
          </div>        
      </div>
      <div className="uploadfile">
        <div className="upfile-fieldset">
          <h4>Your File</h4>
          <input type="file" name="" id="" />
        </div>
        <input type="submit" value="Submit Your Applying" />
      </div>
</div>
    </div>
  )
}

export default Form