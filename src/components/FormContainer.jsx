const FormComponent = () =>{
    return (
        <>
    <section id="FormContainer">
        <form id="studentForm">
            <div className="input-field">
                <label htmlFor="name">Student Name</label>
                <input type="Text" name="name" id="name"/>
            </div>
            <div className="input-field">
                 <label htmlFor="name">Program</label>
                  <input type="Text" name="name" id="name"/>
            </div>
            <div>
                <button>Add Student</button>
            </div>
        </form>
    </section>
        </>
    )
}

export default FormComponent;