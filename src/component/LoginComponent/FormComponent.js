import UserFormComponent from './UseFormComponent';

function FormComponent(){

  const {values,handleChange,handleSubmit} = UserFormComponent();
  return(
    <div className="">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="form-group">
          <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <button 
          type="submit"
          className="btn btn-primary"
          >Submit</button>
        </div>
      </form>
    </div>
  )

}
export default FormComponent;